const path = require('path');
const express = require('express');
const socketio = require('socket.io');

const namespaces = require('./data/namespaces');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

const expressServer = app.listen(process.env.PORT | 3000);

const io = socketio(expressServer);
