const http = require('http');
const querystring = require('querystring');

let selectedColor = 'white'; // Default background color

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head>
          <title>Choose a Background Color</title>
        </head>
        <body style="background-color: ${selectedColor};">
          <h1>Pick a Background Color</h1>
          <form action="/" method="POST">
            <label for="color">Choose a color:</label>
            <select name="color" id="color">
              <option value="white">White</option>
              <option value="lightblue">Light Blue</option>
              <option value="lightgreen">Light Green</option>
              <option value="Gray">Gray</option>
              <option value="pink">Pink</option>
            </select>
            <button type="submit">Set Color</button>
          </form>
          <p>Current Color: <strong>${selectedColor}</strong></p>
        </body>
      </html>
    `);
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = querystring.parse(body);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
  });
  }
})
