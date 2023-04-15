const chalk = require('chalk');
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

require('./session')(app);

io.on('connection', (socket) => {
  console.log(chalk.green.bold('[CONNECTED]'), 'A client just connected.');

  socket.on('disconnect', () =>
    console.log(chalk.red.bold('[DISCONNECTED]'), 'A client just disconnected.')
  );

  socket.onAny((msg, points) => {
    io.emit(msg, points);
  });
});

server.listen(8000, () => {
  console.log('listening on *:8000');
});
