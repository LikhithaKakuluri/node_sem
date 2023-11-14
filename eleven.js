const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port=3251;
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        console.log('chat message'+ msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port,()=>{
    console.log(`Server running on port :${port}`);
});
