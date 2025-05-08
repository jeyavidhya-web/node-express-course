document.getElementById('loadProducts').addEventListener('click', async function() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '<p>Loading products...</p>'; // Show loading text

  try {
      const response = await fetch('/api/v1/products'); // Fetch products from API
      if (!response.ok) {
          throw new Error('Failed to fetch products');
      }
      
      const products = await response.json();
      productList.innerHTML = ''; // Clear previous content

      if (products.length === 0) {
          productList.innerHTML = '<p>No products available.</p>';
          return;
      }

      // Loop through products and create HTML elements
      products.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.classList.add('product');
          productDiv.innerHTML = `
              <h3>${product.name}</h3>
              <p>Price: $${product.price}</p>
          `;
          productList.appendChild(productDiv);
      });

  } catch (error) {
      productList.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
});
