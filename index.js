let express = require('express');
let socket = require('socket.io');

let app = express();
let server = app.listen(4000,()=>{console.log('prj is running on local host 4000')});

app.get('/',(res,req)=>
    req.sendFile(__dirname+'/public/index.html')
);

let io = socket(server);
io.on('connection',(socket)=>{
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    });
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    });
});