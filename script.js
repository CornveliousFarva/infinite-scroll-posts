const postsContainer = document.getElementById('posts-container');
const loader = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1

//Fetch posts from the API