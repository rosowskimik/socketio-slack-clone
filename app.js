const path = require('path');
const express = require('express');
const socketio = require('socket.io');

const namespaces = require('./data/namespaces');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

const expressServer = app.listen(process.env.PORT | 3000);

const io = socketio(expressServer);

io.on('connection', socket => {
  const nsData = namespaces.map(ns => ({
    id: ns.id,
    img: ns.img,
    endpoint: ns.endpoint
  }));

  socket.emit('namespaceList', nsData);
});

namespaces.forEach(namespace => {
  io.of(namespace.endpoint).on('connection', nsSocket => {
    const roomData = namespace.rooms;
    nsSocket.emit('roomList', roomData);
  });
});
