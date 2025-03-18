const http = require("http");


const server = http.createServer((req, res) => {
  

  if (req.url === "/") {
    res.end("<h1>Welcome to the Homepage</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About Us</h1><p>This is a simple Node.js HTTP server.</p>");
  } else {
    res.writeHead(404); 
    res.end("<h1>404 Not Found</h1><p>The page you're looking for doesn't exist.</p>");
  }
  res.end(); 
});


server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
