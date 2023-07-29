var signUpCont = document.getElementById('signUpContainer');
var loginCont = document.getElementById('loginContainer');
var dashNewPostCont = document.getElementById('dashboardNewPostContainer');

// var newPostBool = false;

// function newPostDisplay () {
//  console.log('new post clicked');
//  if (newPostBool === false) {
//  dashNewPostCont.style.display = 'flex';
//  newPostBool = true;
//  } else if (newPostBool === true) {
//   dashNewPostCont.style.display = 'none';
//   newPostBool = false;
//  }
// }

var hostVar = 'http://localhost:3001';
var retrievedBlogArray = [];

function populateBlog () {
 console.log('fetch blog')
 fetch(hostVar + '/retrieveblogentries')
 .then((res) => res.json())
 .then(function (data) {

  if (data.length != 0) {
  console.log(data.length);
  console.log(data[0]);
  console.log(data[0].username);
  console.log(data[0].title);
  console.log(data[0].blogtext);
  console.log(data[0].date);
  
    let homeBlogPostsCont = document.getElementById('homeBlogPostsContainer');
    let mainBodyCont = document.getElementById('mainBodyContainer');
    let populatedPostsCont = document.createElement('div');

    mainBodyCont.style.height = 'none';
    mainBodyCont.style.justifyContent = 'none';
    mainBodyCont.style.alignItems = 'none';

    populatedPostsCont.setAttribute('id', 'populatedPostsContainer');
    homeBlogPostsCont.appendChild(populatedPostsCont);


    for(x=0; x<data.length; x++) {
    
    //individual post container
    let individualPostCont = document.createElement('div');
    let titleEl = document.createElement('div');
    let authorEl = document.createElement('div');
    let individualPost = document.createElement('div');

    //comment display btn for individual post
    let commentBtnCont = document.createElement('div');
    let commentDisplayBtnEl = document.createElement('button');

    //delete btn for individual post
    let deleteBtnCont = document.createElement('div');
    let deleteBlogF = document.createElement('form');
    let blogcommentidholderEl = document.createElement('textarea');
    let deleteBlogBtn = document.createElement('input');

    individualPostCont.setAttribute('id', 'individualPostContainer');
    titleEl.setAttribute('id', 'title');
    authorEl.setAttribute('id', 'author');
    individualPost.setAttribute('id', 'individualPost');

    commentBtnCont.setAttribute('id', 'commentBtnContainer');
    commentDisplayBtnEl.setAttribute('id', 'commentDisplayBtn');

    deleteBtnCont.setAttribute('id', 'deleteBtnContainer');
    deleteBlogF.setAttribute('action', '/deleteblog');
    deleteBlogF.setAttribute('id', 'deleteBlogForm');
    deleteBlogF.setAttribute('method', 'post');
    blogcommentidholderEl.setAttribute('id', 'blogcommentidholder');
    blogcommentidholderEl.setAttribute('type', 'text');
    blogcommentidholderEl.setAttribute('name', 'blogcommentidholder');
    // blogcommentidholderEl.setAttribute('disabled', false);
    deleteBlogBtn.setAttribute('id', 'deleteBlogBtn');
    deleteBlogBtn.setAttribute('type', 'submit');
    deleteBlogBtn.setAttribute('value', 'Delete');
  

    // homeBlogPostsCont.innerText = 'test';

    populatedPostsCont.appendChild(individualPostCont);
    individualPostCont.appendChild(titleEl);
    individualPostCont.appendChild(authorEl);
    individualPostCont.appendChild(individualPost);
    individualPostCont.appendChild(commentBtnCont);
    individualPostCont.appendChild(deleteBtnCont);

    commentBtnCont.appendChild(commentDisplayBtnEl);

    deleteBtnCont.appendChild(deleteBlogF);
    // deleteBtnCont.appendChild(blogcommentidholderEl);
    // deleteBtnCont.appendChild(deleteBlogBtn);
    // must append blogcommentidholderEl and deleteBlogBtn to deleteBlogF not to the deleteBtnCont
    deleteBlogF.appendChild(blogcommentidholderEl);
    deleteBlogF.appendChild(deleteBlogBtn);

    titleEl.innerHTML = data[x].title;
    authorEl.innerHTML = data[x].username;
    individualPost.innerHTML = data[x].blogtext;

    blogcommentidholderEl.value = data[x].blogcommentid;
    console.log(data[x].blogcommentid);
    commentDisplayBtnEl.innerHTML = "Comment";
    }
  }
 }
 )
 .catch(err => console.error(err));
};



// function testPopulate () {

//     let homeBlogPostsCont = document.getElementById('homeBlogPostsContainer');
//     let populatedPostsCont = document.createElement('div');

//         populatedPostsCont.setAttribute('id', 'populatedPostsContainer');
//        homeBlogPostsCont.appendChild(populatedPostsCont);
//     for(x=0; x<10; x++) {
    
//     //individual post container
//     let individualPostCont = document.createElement('div');
//     let titleEl = document.createElement('div');
//     let authorEl = document.createElement('div');
//     let individualPost = document.createElement('div');

//     //comment display btn for individual post
//     let commentBtnCont = document.createElement('div');
//     let commentDisplayBtnEl = document.createElement('button');

//     //delete btn for individual post
//     let deleteBtnCont = document.createElement('div');
//     let deleteBlogF = document.createElement('form');
//     let blogcommentidholderEl = document.createElement('textarea');
//     let deleteBlogBtn = document.createElement('input');

//     individualPostCont.setAttribute('id', 'individualPostContainer');
//     titleEl.setAttribute('id', 'title');
//     authorEl.setAttribute('id', 'author');
//     individualPost.setAttribute('id', 'individualPost');

//     commentBtnCont.setAttribute('id', 'commentBtnContainer');
//     commentDisplayBtnEl.setAttribute('id', 'commentDisplayBtn');

//     deleteBtnCont.setAttribute('id', 'deleteBtnContainer');
//     deleteBlogF.setAttribute('id', 'deleteBlogForm');
//     deleteBlogF.setAttribute('action', '');
//     deleteBlogF.setAttribute('method', '');
//     blogcommentidholderEl.setAttribute('id', 'blogcommentidholder');
//     blogcommentidholderEl.setAttribute('disabled', true);
//     deleteBlogBtn.setAttribute('id', 'deleteBlogBtn');
//     deleteBlogBtn.setAttribute('type', 'submit');
//     deleteBlogBtn.setAttribute('value', 'Delete');
  

//     // homeBlogPostsCont.innerText = 'test';

//     populatedPostsCont.appendChild(individualPostCont);
//     individualPostCont.appendChild(titleEl);
//     individualPostCont.appendChild(authorEl);
//     individualPostCont.appendChild(individualPost);
//     individualPostCont.appendChild(commentBtnCont);
//     individualPostCont.appendChild(deleteBtnCont);

//     commentBtnCont.appendChild(commentDisplayBtnEl);

//     deleteBtnCont.appendChild(deleteBlogF);
//     deleteBtnCont.appendChild(blogcommentidholderEl);
//     deleteBtnCont.appendChild(deleteBlogBtn);

//    //  titleEl.innerHTML = data[x].title;
//    //  authorEl.innerHTML = data[x].username;
//    //  individualPost.innerHTML = data[x].blogtext;

//    //  blogcommentidholderEl = data[x].blogcommentidholderEl;
//      commentDisplayBtnEl.innerHTML = "Comment";
//     }

// }

// testPopulate();

populateBlog();


