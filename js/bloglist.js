function fullPost(){
  window.location.href="./post.html";
}

function onDeletePost(){
  document.getElementById('deletePostPrompt').style.display='block';
}


function onCloseDeleteClicked() {
  document.getElementById('deletePostPrompt').style.display='none';
}

var myPost;

myPost = [
          {
            author: "Akash",
            title: "Welcome to my post!",
            blogContent: "Post Details! Demo Demo .............................end"
          },
          {
            author: "Akash",
            title: "Welcome to my post!",
            blogContent: "Post Details! Demo Demo .............................end"
          }
];
