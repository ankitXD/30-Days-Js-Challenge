// User Authentication
document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  if (username && email && password) {
      const user = { username, email, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Registration successful!');
      switchToLogin();
  } else {
      alert('Please fill out all fields.');
  }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.username === username && user.password === password) {
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));
      loadDashboard();
  } else {
      alert('Invalid username or password.');
  }
});

function loadDashboard() {
  const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
  document.getElementById('profile-username').innerText = user.username;
  document.getElementById('profile-email').innerText = user.email;
  document.getElementById('auth-container').classList.add('hidden');
  document.getElementById('sidebar').style.display = 'block';
  document.getElementById('main-content').style.display = 'block';
}

// Switch Between Login and Registration Forms
document.getElementById('switch-to-login').addEventListener('click', switchToLogin);
document.getElementById('switch-to-register').addEventListener('click', switchToRegister);

function switchToLogin() {
  document.getElementById('registration-form').classList.add('hidden');
  document.getElementById('login-form').classList.remove('hidden');
}

function switchToRegister() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('registration-form').classList.remove('hidden');
}

// Edit Profile
document.getElementById('edit-profile-btn').addEventListener('click', function() {
  const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
  document.getElementById('edit-username').value = user.username;
  document.getElementById('edit-email').value = user.email;
  document.getElementById('edit-profile-modal').classList.remove('hidden');
});

document.getElementById('save-profile-btn').addEventListener('click', function() {
  const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
  user.username = document.getElementById('edit-username').value;
  user.email = document.getElementById('edit-email').value;

  const profilePicture = document.getElementById('edit-profile-picture').files[0];
  if (profilePicture) {
      const reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('profile-picture').src = e.target.result;
      };
      reader.readAsDataURL(profilePicture);
  }

  sessionStorage.setItem('loggedInUser', JSON.stringify(user));
  localStorage.setItem('user', JSON.stringify(user));

  document.getElementById('profile-username').innerText = user.username;
  document.getElementById('profile-email').innerText = user.email;
  document.getElementById('edit-profile-modal').classList.add('hidden');
});

document.getElementById('close-modal-btn').addEventListener('click', function() {
  document.getElementById('edit-profile-modal').classList.add('hidden');
});

// Handle Post Creation
let posts = [];

document.getElementById('post-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const postText = document.getElementById('post-text').value;
  const postImage = document.getElementById('post-image').files[0];
  const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
  const timestamp = new Date().toLocaleString();

  let post = {
      username: user.username,
      text: postText,
      timestamp: timestamp,
      image: '',
      likes: 0,
      comments: []
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
              <button onclick="likePost(${index})">Like (${post.likes})</button>
              <button onclick="showCommentBox(${index})">Comment</button>
          </div>
          <div class="comment-section" id="comment-section-${index}"></div>
      `;
      postFeed.appendChild(postElement);
  });
}

function likePost(index) {
  posts[index].likes++;
  displayPosts();
  generateNotification(`${posts[index].username}, your post received a like!`);
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
      const comment = { text: commentText, timestamp: new Date().toLocaleString() };
      posts[index].comments.push(comment);
      commentInput.value = '';

      const commentElement = document.createElement('p');
      commentElement.textContent = `${comment.timestamp}: ${comment.text}`;
      document.getElementById(`comment-section-${index}`).appendChild(commentElement);

      generateNotification(`${posts[index].username}, your post received a comment!`);
  } else {
      alert('Please enter a comment.');
  }
}

// Notification System
function generateNotification(message) {
  const notificationList = document.getElementById('notification-list');
  const notificationItem = document.createElement('li');
  notificationItem.textContent = message;
  notificationList.appendChild(notificationItem);
}

// Initialize the dashboard if user is already logged in
window.onload = function() {
  if (sessionStorage.getItem('loggedInUser')) {
      loadDashboard();
  } else {
      document.getElementById('auth-container').classList.remove('hidden');
  }
};
