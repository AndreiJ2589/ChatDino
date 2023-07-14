const path = require('path');
const express = require('express');
const app = express(); 

//setings 
app.set('port', process.env.PORT || 3000);

//static files
app.use(express.static(path.join (__dirname , 'public')));

//start server 
const server = app.listen(app.get('port'),()=> {
    console.log('servidor en el puerto:', app.get('port'));
});

//websockets
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket) => {
    console.log('Nueva conexion', socket.id);

    socket.on('chat:Menssage', (data) => {
    io.sockets.emit('chat:Menssage', data);
    })

    socket.on('chat:typing', (data) => {
    socket.broadcast.emit('chat:typing', data);
    })
    

});   
