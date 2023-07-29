    
    
function createBlogPosts(results) {
    let homeBlogPostsCont = document.getElementById('homeBlogPostsContainer');
    let populatedPostsCont = document.createElement('div');
    
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

    populatedPostsCont.setAttribute('id', 'individualPostContainer');

    homeBlogPostsCont.innerText = 'test';

    homeBlogPostsCont.appendChild(populatedPostsCont);

    console.log('homepage js file');
    console.log(blogPostsArray);
}

module.exports = createBlogPosts;