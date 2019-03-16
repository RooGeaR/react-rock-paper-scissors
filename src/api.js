import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

let socketId;

socket.on('connect', () => {
  socketId = socket.id;
  console.log(socketId, "socketConnect")
});

function join() {
  socket.emit('join', 'game');
}

function play(weapon) {
  socket.emit('play', {weapon, game: 'game'});
}

function chooseWeapon(cb) {
  socket.on('chooseWeapon', choosenWeapon => cb(null, choosenWeapon));
}

function result() {
  socket.emit('result', {game: 'game'});
}

function showResult(cb) {
  socket.on('showResult', () => cb());
}

function restartUser() {
  socket.emit('restartUser', {game: 'game'});
}

function restartGame(cb) {
  socket.on('restartGame', () => cb());
}

export { 
  join,
  play,
  chooseWeapon,
  result,
  showResult,
  restartUser,
  restartGame
}
