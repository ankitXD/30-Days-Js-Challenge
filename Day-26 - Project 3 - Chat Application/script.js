const socket = new WebSocket('ws://localhost:8080');

const usernameContainer = document.getElementById('username-container');
const chatContainer = document.getElementById('chat-container');
const usernameInput = document.getElementById('username-input');
const joinChatButton = document.getElementById('join-chat-button');
const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
let username = '';

joinChatButton.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username) {
        usernameContainer.style.display = 'none';
        chatContainer.style.display = 'flex';
    }
});

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

socket.addEventListener('open', () => {
    console.log('Connected to WebSocket server');
});

socket.addEventListener('message', event => {
    const message = event.data;
    if (typeof message === 'string') {
        displayMessage('Other', message);
    } else {
        console.error('Received non-text message:', message);
    }
});

function sendMessage() {
    const message = messageInput.value;
    if (message.trim()) {
        const fullMessage = `${username}: ${message}`;
        socket.send(fullMessage);  // Ensure sending text, not Blob or other data types
        displayMessage(username, message);
        messageInput.value = '';
    }
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');
    messageElement.classList.add(sender === username ? 'you' : 'other');
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
