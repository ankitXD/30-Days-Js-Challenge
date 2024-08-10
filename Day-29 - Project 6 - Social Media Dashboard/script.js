document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
      sessionStorage.setItem('username', username);
      document.getElementById('login-container').classList.add('hidden');
      document.getElementById('dashboard').classList.remove('hidden');
  } else {
      alert('Please enter both username and password.');
  }
});

window.onload = function() {
  if (sessionStorage.getItem('username')) {
      document.getElementById('login-container').classList.add('hidden');
      document.getElementById('dashboard').classList.remove('hidden');
  }
}

let posts = [];

document.getElementById('post-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const postText = document.getElementById('post-text').value;
  const postImage = document.getElementById('post-image').files[0];
  const username = sessionStorage.getItem('username');
  const timestamp = new Date().toLocaleString();

  let post = {
      username: username,
      text: postText,
      timestamp: timestamp,
      image: ''
  };

  if (postImage) {
      const reader = new FileReader();
      reader.onload = function(e) {
          post.image = e.target.result;
          posts.push(post);
          displayPosts();
          document.getElementById('post-form').reset();
      }
      reader.readAsDataURL(postImage);
  } else {
      posts.push(post);
      displayPosts();
      document.getElementById('post-form').reset();
  }
});

function displayPosts() {
  const postFeed = document.getElementById('post-feed');
  postFeed.innerHTML = '';

  posts.forEach((post, index) => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.innerHTML = `
          <p><strong>${post.username}</strong> <em>${post.timestamp}</em></p>
          <p>${post.text}</p>
          ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
          <div class="post-actions">
              <button onclick="likePost(${index})">Like</button>
              <button onclick="showCommentBox(${index})">Comment</button>
          </div>
          <div class="comment-section" id="comment-section-${index}"></div>
      `;
      postFeed.appendChild(postElement);
  });
}

function likePost(index) {
  alert('You liked this post!');
}

function showCommentBox(index) {
  const commentSection = document.getElementById(`comment-section-${index}`);
  if (!commentSection.innerHTML) {
      commentSection.innerHTML = `
          <input type="text" placeholder="Add a comment" id="comment-input-${index}">
          <button onclick="addComment(${index})">Post</button>
      `;
  }
}

function addComment(index) {
  const commentInput = document.getElementById(`comment-input-${index}`);
  const commentText = commentInput.value;
  if (commentText) {
      const comment = document.createElement('p');
      comment.textContent = commentText;
      document.getElementById(`comment-section-${index}`).appendChild(comment);
      commentInput.value = '';
  } else {
      alert('Please enter a comment.');
  }
}
