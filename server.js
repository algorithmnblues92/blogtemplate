const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { DateTime } = require('luxon');


const PORT = 3001;

var blogPostsArray = [];
var commentsArray = [];


const dbCon = mysql.createConnection({
 host : 'localhost',
 user : 'root',
 password : 'password123!@#',
 database: 'blogLogin'
});

const app = express();

app.use(session({
    secret: 'very secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
 return res.send('this is the first page');
});

app.get('/homepage', (req,res) => {
 // res.send('this is the homepage page');
 if (req.session.loggedin === true) {

dbCon.query('SELECT * FROM accounts WHERE username = ?', [req.session.username], function (err, results) {
    console.log(req.session.username);
    console.log(results);
    req.session.indexid = results[0].indexid;
    req.session.username = results[0].username;
    req.session.accountid = results[0].accountid;
    // console.log(results[0].id);
    // console.log(results[0].username);
    console.log(req.session.indexid);
    console.log(req.session.username);
    console.log(req.session.accountid);
});

 res.sendFile(path.join(__dirname + '/public/homepage.html'));

//  dbCon.query('SELECT * FROM blogposts', function (err, results) {
//     blogPostsArray = []
//     console.log(results[0]);

//     for(let x=0;x<results.length;x++) {
//         blogPostsArray.push(results[x]);
//         console.log(blogPostsArray);
//         createBlogPosts(results[x]);
//     }
    
//  });

 
 


 } else {
    res.redirect('/pleaselogin');
 };
});



app.get('/dashboard', (req,res) => {
    if(req.session.loggedin === true) {
        return res.sendFile(path.join(__dirname + '/public/dashboard.html'));
    } else {
        res.redirect('/pleaselogin');
    }
});

app.get('/pleaselogin', (req,res) => {
 return res.sendFile(path.join(__dirname + '/public/pleaseLogin.html'));
});

app.post('/auth', (req, res) => {
 let username = req.body.loginUsername;
 let password = req.body.loginPassword;

 if(username && password) {
  dbCon.query(`SELECT * FROM accounts WHERE username = ? and password = ?`, [username, password], function (err, results) {
   
   if(err) {
    throw err
   }

   if(results.length > 0) {
    req.session.loggedin = true;
    req.session.username = username;

    res.redirect('/homepage');

   } else {
    // res.send('Incorrect Username and/or Password');
    res.redirect('/pleaselogin');
   }
   res.end();
  });
 } else {
  res.send('Please enter Username and Password!');
  res.end();
 };
});

app.post('/signup', function(req, res) {
 let username = req.body.signUpUsername;
 let password = req.body.signUpPassword;
 let email = req.body.signUpEmail;
 let accountid = uuidv4();

 if(username && password && email) {
  dbCon.query(`INSERT INTO accounts(indexid, username, password, email, accountid) VALUES (DEFAULT, "${username}", "${password}", "${email}", "${accountid}")`, function (req, res) {
  console.log(username);
  console.log(password);
  console.log(email);
 });
     res.redirect('/');
 }
});

app.get('/retrieveblogentries', (req,res) => {
 // res.send('this is the homepage page');
 if (req.session.loggedin === true) {

 dbCon.query('SELECT * FROM blogposts', function (err, results) {
    // blogPostsArray = []
    // console.log(results[0]);

    // for(let x=0;x<results.length;x++) {
    //     blogPostsArray.push(results[x]);
    //     console.log(blogPostsArray);
    //     createBlogPosts(results[x]);
    // }
    console.log(results);
    return res.send(results);
    
 });


 } else {
    res.redirect('/pleaselogin');
 };
});

app.get('/retrieveuserentries', (req,res) => {
 // res.send('this is the homepage page');
 if (req.session.loggedin === true) {

 dbCon.query(`SELECT * FROM blogposts WHERE username = "${req.session.username}"`, function (err, results) {
    // blogPostsArray = []
    // console.log(results[0]);

    // for(let x=0;x<results.length;x++) {
    //     blogPostsArray.push(results[x]);
    //     console.log(blogPostsArray);
    //     createBlogPosts(results[x]);
    // }
    console.log(results);
    return res.send(results);
    
 });


 } else {
    res.redirect('/pleaselogin');
 };
});



app.post('/addblogpost', function(req, res) {
    let title = req.body.newTitle;
    let blogtext = req.body.newContent;
    let date = DateTime.now().toFormat('MMMM dd, yyyy');
    let blogcommentid = uuidv4();

    dbCon.query(`INSERT INTO blogposts(indexid, username, title, blogtext, date, creatorid, blogcommentid) VALUES (DEFAULT, "${req.session.username}", "${title}", "${blogtext}", "${date}", "${req.session.accountid}", "${blogcommentid}")`, function (err) {
        if (err) {
            throw err;
        }
    });
     res.redirect('/dashboard');
});

app.get('/retrievecomments', function(req, res) {
   return res.send('retrieving previous comments'); 
});

app.post('/addcomment', function(req, res) {

});

app.post('/updateblog', function(req, res) {

});

app.post('/updatecomment', function(req, res) {

});

app.post('/deleteblog', function(req,res) {
    let blogcommentidholder = req.body.blogcommentidholder;
    console.log(blogcommentidholder);
    dbCon.query(`DELETE FROM blogposts WHERE blogcommentid = "${blogcommentidholder}"`, function (err) {
        if (err)
        {
            throw err;
        }
        res.redirect('/homepage')
    })
});

app.post('/deleteblogdashboard', function(req,res) {
    let blogcommentidholder = req.body.blogcommentidholder;
    console.log(blogcommentidholder);
    dbCon.query(`DELETE FROM blogposts WHERE blogcommentid = "${blogcommentidholder}"`, function (err) {
        if (err)
        {
            throw err;
        }
        res.redirect('/dashboard')
    })
});

app.post('/deletecomment', function(req, res) {

});

app.post('/logout', function(req, res) {
    
});

app.listen(PORT, () => {
 console.log(`Listening on PORT ${PORT}`);
})
