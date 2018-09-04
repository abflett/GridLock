var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
    console.log(socket.id + " Connected");

    socket.on('handshake', function(msg){
      io.emit('handshaken', socket.id + " Connected");
    });

    socket.on('disconnect', function(){
        console.log(socket.id + ' Disconnected');
    });
    
  });

http.listen(8300, function(){
  console.log('listening on *:3000');
});