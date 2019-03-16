const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('join', (id) => {
    console.log(`New player coming ${id}`);
    client.join(id);
  });

  client.on('play', (data) => {
    client.broadcast.to(data.game).emit('chooseWeapon', data.weapon);
  });

  client.on('result', (data) => {
    client.broadcast.to(data.game).emit('showResult');
  });

  client.on('restartUser', (data) => {
    client.broadcast.to(data.game).emit('restartGame');
  });

  client.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
