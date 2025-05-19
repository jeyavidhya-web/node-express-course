const express = require('express');
const path = require('path');
const { products } = require("./data");  // Importing the products array
const app = express();


app.use(express.static('./public'));

// Serve index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/v1/products', (req, res) => {
  
  res.json(products); // Send the products array as response
});



app.get('/api/v1/products/:productID', (req, res) => {
  const idToFind = parseInt(req.params.productID); // Convert ID to an integer
  
  if (isNaN(idToFind)) {
    return res.status(404).json({ message: "That product was not found." });
  }

  const product = products.find((p) => p.id === idToFind); // Find product by ID


  if (!product) {
    return res.status(404).json({ message: "Product not found" }); 
  }

  res.json(product); // Return the found product
});
app.get('/api/v1/query', (req, res) => {
  let { search, limit,regex, maxPrice } = req.query;
  let filteredProducts = [...products]; 

  // If "search" is provided, filter products whose name starts with the search term
  if (search) {
    if (regex === 'true') {
      const searchRegex = new RegExp(search, 'i'); // Case-insensitive regex
      filteredProducts = filteredProducts.filter((product) => searchRegex.test(product.name));
    } else {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().startsWith(search.toLowerCase())
      );
    }
  }if (maxPrice) {
    maxPrice = parseFloat(maxPrice);
    filteredProducts = filteredProducts.filter((product) => product.price < maxPrice);
  }


   
  // If "limit" is provided, slice the array to return only the specified number of results
  if (limit) {
    limit = parseInt(limit);
    filteredProducts = filteredProducts.slice(0, limit);
  }

  
  if (filteredProducts.length === 0) {
    return res.status(200).json({ message: "No products matched your search." });
  }

  res.json(filteredProducts);
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

