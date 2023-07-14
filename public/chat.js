const socket = io();

//DOM Elements 
let message = document.getElementById('message');
let username = document.getElementById('username');
let send = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');
send.addEventListener('click', function(){
    socket.emit('chat:Menssage', {
        username: username.value, 
        message: message.value
    });
});

message.addEventListener('keypress', function (){
    console.log(username.value);
    socket.emit('chat:typing', username.value)
});

socket.on('chat:Menssage', function(data){
        actions.innerHTML = '';
        output.innerHTML += `<p> <strong>${data.username}</strong>: ${data.message}
    </p>`
});

socket.on('chat:typing', function(data){
        actions.innerHTML = `<p><em>${data} is typing a message.</em></p>`
});