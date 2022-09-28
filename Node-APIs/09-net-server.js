const net = require('net');

const server = net.createServer((socket) => {
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Bonjour\r\n');
  socket.end();
});

// server.on('connection', (socket) => {
//   socket.pipe(process.stdout);
//   socket.write('HTTP/1.1 200 OK\r\n');
//   socket.write('Content-type: text/plain\r\n');
//   socket.write('\r\n');
//   socket.write('Bonjour\r\n');
//   socket.end();
// });

// server.on('listening', () => {
//   console.log('server listening on port 8080');
// });

server.on('error', (err) => {
  console.log('server error : ', err);
});

server.listen(8080, () => {
  console.log('server listening on port 8080');
});
