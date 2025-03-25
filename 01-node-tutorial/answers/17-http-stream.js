const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./content/big.txt', 'utf8');
  
  // Pipe the read stream directly to the response
  stream.pipe(res);

  stream.on('error', (err) => {
    res.end(err);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
