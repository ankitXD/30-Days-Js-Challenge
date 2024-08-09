// Sample product data
const products = [
  {
      name: 'Product 1',
      price: 29.99,
      description: 'Description for Product 1',
      imageUrl: 'https://via.placeholder.com/150'
  },
  {
      name: 'Product 2',
      price: 49.99,
      description: 'Description for Product 2',
      imageUrl: 'https://via.placeholder.com/150'
  },
  {
      name: 'Product 3',
      price: 19.99,
      description: 'Description for Product 3',
      imageUrl: 'https://via.placeholder.com/150'
  }
];

let cart = [];

// Initialize product listing
function displayProducts() {
  const productList = document.getElementById('product-list');
  products.forEach((product, index) => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
          <img src="${product.imageUrl}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${index})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
  });
}

// Add product to cart
function addToCart(index) {
  const product = products[index];
  const cartItem = cart.find(item => item.name === product.name);
  if (cartItem) {
      cartItem.quantity += 1;
  } else {
      cart.push({ ...product, quantity: 1 });
  }
  displayCart();
}

// Display cart items
function displayCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
      total += item.price * item.quantity;
      const cartItem = document.createElement('li');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
          ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
          <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItems.appendChild(cartItem);
  });

  cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
}

// Remove item from cart
function removeFromCart(index) {
  const cartItem = cart[index];
  if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
  } else {
      cart.splice(index, 1);
  }
  displayCart();
}

// Handle checkout process
function handleCheckout(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const payment = document.getElementById('payment').value;

  if (!name || !address || !payment) {
      alert("Please fill out all fields before submitting.");
      return;
  }

  const orderDetails = `
      Name: ${name} <br>
      Address: ${address} <br>
      Payment: ${payment} <br>
      Order Total: $${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
  `;
  
  document.getElementById('order-details').innerHTML = orderDetails;
  document.getElementById('confirmation-message').classList.remove('hidden');
  
  // Clear cart after checkout
  cart = [];
  displayCart();
  document.getElementById('checkout-form').reset();
}

// Initialize product listing on page load
window.onload = () => {
  displayProducts();
  document.getElementById('checkout-form').addEventListener('submit', handleCheckout);
};
