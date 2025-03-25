const fs = require('fs');

// Create a read stream with utf8 encoding and highWaterMark of 200
const stream = fs.createReadStream('../content/big.txt', {
  encoding: 'utf8',
  highWaterMark: 400
});

let counter = 0;

// Handle data event
stream.on('data', (chunk) => {
  counter++;
  console.log(`Received chunk ${counter}:`, chunk);
});

// Handle end event
stream.on('end', () => {
  console.log(`Stream ended. Total chunks received: ${counter}`);
});

// Handle error event
stream.on('error', (err) => {
  console.error('Error reading file:', err);
});
