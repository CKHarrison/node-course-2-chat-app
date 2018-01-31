const socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'LuLu at example.com',
    text: 'I am hungry'
  });

  socket.on('newMessage', function(newMessage){
    console.log('Received new message: ', newMessage);
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});