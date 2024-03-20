const socket = io();

function appendMessage(sender, message) {
  const messages = document.getElementById('messages');
  const li = document.createElement('li');
  li.textContent = `${sender}: ${message}`;
  messages.appendChild(li);
}

function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  if (message !== '') {
    socket.emit('chat message', message);
    input.value = '';
    appendMessage('You', message);
  }
}

socket.on('chat message', function(sender, msg){
  appendMessage(sender, msg);
});
