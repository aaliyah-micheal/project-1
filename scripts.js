

const formElement = document.querySelector('form');

formElement.addEventListener('submit', function(e) {

 e.preventDefault();


// get user input
 const userName = document.querySelector('input[type=text]');

 const userComment = document.querySelector('textarea');


 const newComment = {
     name: userName.value,
     comment: userComment.value

 } 

const commentSection = document.querySelector('.comment-section-container')

const commentPost = document.createElement('div')

commentPost.innerHTML = `<div class="comment-flex">
<div>
    <img src="https://placekitten.com/94/92" alt="guest comment image">
</div>
<div class="comment-text">
    <p>${newComment.name}</p>
    <p>${newComment.comment}</p>
</div>
</div>
</div>`

commentSection.appendChild(commentPost)


});