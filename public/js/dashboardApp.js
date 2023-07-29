var dashNewPostCont = document.getElementById('dashboardNewPostContainer');

var newPostBool = false;

function newPostDisplay () {
 console.log('new post clicked');
 if (newPostBool === false) {
 dashNewPostCont.style.display = 'flex';
 newPostBool = true;
 } else if (newPostBool === true) {
  dashNewPostCont.style.display = 'none';
  newPostBool = false;
 }
}

var hostVar = 'http://localhost:3001';
 
function populateUsersBlog () {
 console.log('fetch blog')
 fetch(hostVar + '/retrieveuserentries')
 .then((res) => res.json())
 .then(function (data) {

  if (data.length != 0) {
  console.log(data.length);
  console.log(data[0]);
  console.log(data[0].username);
  console.log(data[0].title);
  console.log(data[0].blogtext);
  console.log(data[0].date);
  
    let homeBlogPostsCont = document.getElementById('dashboardBlogPostsContainer');
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
    commentDisplayBtnEl.setAttribute('onClick', 'commentDisplayBtn()')

    deleteBtnCont.setAttribute('id', 'deleteBtnContainer');
    deleteBlogF.setAttribute('action', '/deleteblogdashboard');
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

// this below will be in another fetch to comment route with a for loop to populate container with comments

      let commentPostDispCont = document.createElement('div');

      commentPostDispCont.setAttribute('id', 'commentPostDispCont');

      individualPostCont.appendChild(commentPostDispCont);

      commentPostDispCont.innerHTML = 'commentPostDispCont';

      //user ability to comments on post

      let addCommentDiv = document.createElement('div');

      addCommentDiv.setAttribute('id', 'addCommentDiv');

      commentPostDispCont.appendChild(addCommentDiv);

      addCommentDiv.innerHTML = 'addCommentDiv';

      let addCommentForm = document.createElement('form');
      let addCommentInputField = document.createElement('textarea');
      let addCommentSubmitBtn = document.createElement('button');

      addCommentForm.setAttribute('id', 'addCommentFormEl')
      addCommentInputField.setAttribute('id', 'addCommentInputFieldEl');
      addCommentSubmitBtn.setAttribute('id', 'addCommentSubmitBtnEl');



      addCommentSubmitBtn.innerHTML = 'Add Comment';

      addCommentDiv.appendChild(addCommentForm);
      
      addCommentForm.appendChild(addCommentInputField);
      addCommentForm.appendChild(addCommentSubmitBtn);

      /////////////////////////////////////////////


      //add database users comments to blog post

      let individualCommentPostDiv = document.createElement('div');

      individualCommentPostDiv.setAttribute('id', 'individualCommentPostDiv');

      commentPostDispCont.appendChild(individualCommentPostDiv);

      individualCommentPostDiv.innerHTML = 'individualCommentPostDiv';

     //write a for loop for the comments to be added to each individual post
     //add a counter var++ to create individual comment buttons for displaying data


    //  for (let x=0;x<5;x++) {

    //      //comment container for individual post
    // let commentUnderCont = document.createElement('div');

    // //blog comments

    // commentUnderCont.setAttribute('id', 'commentUnderCont');

    // individualPostCont.appendChild(commentUnderCont);

    // commentUnderCont.innerHTML = 'comment under display cont';

    // //adding add comment section of individual post

    //  }

    }
  }
 }
 )
 .catch(err => console.error(err));
}

populateUsersBlog();

var commentDisplayBool = false;

// function commentDisplayBtn () {
//   let commentUnderCont = document.getElementById('commentUnderCont');
//   if (commentDisplayBool === false) {
//   console.log('comment btn pressed display is now flex');
//   commentUnderCont.style.display = "flex";
//   commentDisplayBool = true;
//   } else if (commentDisplayBool === true) {
//     console.log('comment btn pressed display is now none');
//   commentUnderCont.style.display = "none";
//   commentDisplayBool = false;
//   }
// }