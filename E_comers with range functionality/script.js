// Hamburger menu toggling
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// User authentication
let currentUser = null;

function login(username, password) {
  // Mock login implementation
  if (username === 'admin' && password === 'password') {
    currentUser = { username: 'admin' };
    updateUserUI();
    closeModal('login-modal');
  } else {
    alert('Invalid username or password');
  }
}

function logout() {
  currentUser = null;
  updateUserUI();
}

function updateUserUI() {
  const userNameElement = document.querySelector('.user-name');
  const loginLink = document.querySelector('.login-link');
  const logoutLink = document.querySelector('.logout-link');
  const ordersLink = document.querySelector('.orders-link');

  if (currentUser) {
    userNameElement.textContent = currentUser.username;
    loginLink.style.display = 'none';
    logoutLink.style.display = 'inline';
    ordersLink.style.display = 'inline';
  } else {
    userNameElement.textContent = '';
    loginLink.style.display = 'inline';
    logoutLink.style.display = 'none';
    ordersLink.style.display = 'none';
  }
}

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  login(username, password);
});

document.querySelector('.logout-link').addEventListener('click', logout);

// Product listing and filtering
const productList = [
  {
    name: 'Product 1',
    image: 'pro1.jpg',
    price: 19.99,
    category: 'Category 1'
  },
  {
    name: 'Product 2',
    image: 'pro2.jpg',
    price: 24.99,
    category: 'Category 2'
  },
  // Add more products as needed
];

const productsContainer = document.querySelector('.products');
const categorySelect = document.getElementById('category');
const priceRange = document.getElementById('price-range');
const priceRangeValue = document.getElementById('price-range-value');

function renderProducts(filteredProducts) {
  productsContainer.innerHTML = '';
  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement('h3');
    name.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = `$${product.price}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => addToCart(product));

    productCard.appendChild(image);
    productCard.appendChild(name);
    productCard.appendChild(price);
    productCard.appendChild(addToCartButton);

    productsContainer.appendChild(productCard);
  });
}

function filterProducts() {
  const selectedCategory = categorySelect.value;
  const maxPrice = priceRange.value;

  const filteredProducts = productList.filter(product => {
    return (selectedCategory === '' || product.category === selectedCategory) &&
      product.price <= maxPrice;
  });

  renderProducts(filteredProducts);
}

function populateCategories() {
  const categories = [...new Set(productList.map(product => product.category))];
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

populateCategories();
filterProducts();

categorySelect.addEventListener('change', filterProducts);
priceRange.addEventListener('input', () => {
  priceRangeValue.textContent = `$${priceRange.value}`;
  filterProducts();
});

// Shopping cart functionality
const cart = [];
const cartCount = document.querySelector('.cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

function addToCart(product) {
  cart.push(product);
  updateCartUI();
}

function updateCartUI() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const name = document.createElement('h4');
    name.textContent = item.name;

    const price = document.createElement('p');
    price.textContent = `$${item.price}`;

    cartItem.appendChild(name);
    cartItem.appendChild(price);
    cartItems.appendChild(cartItem);

    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

cartCount.addEventListener('click', () => {
  updateCartUI();
  openModal('cart-modal');
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target.id);
  }
});

document.querySelectorAll('.close-button').forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal.id);
  });
});

checkoutButton.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty');
  } else {
    closeModal('cart-modal');
    openModal('checkout-modal');
  }
});

// Checkout process
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!currentUser) {
    alert('Please login to place an order');
    openModal('login-modal');
    return;
  }

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  // Here, you would typically send the order details to a server for processing

  alert('Order placed successfully!');
  cart.length = 0; // Clear the cart
  updateCartUI();
  closeModal('checkout-modal');
});

// Order history
const ordersModal = document.getElementById('orders-modal');
const ordersList = document.querySelector('.orders-list');

document.querySelector('.orders-link').addEventListener('click', () => {
  if (!currentUser) {
    alert('Please login to view your orders');
    openModal('login-modal');
    return;
  }

  // Here, you would fetch the user's order history from a server
  const orders = [
    {
      id: 1,
      date: '2023-04-01',
      total: 39.99,
      items: [
        { name: 'Product 1', price: 19.99 },
        { name: 'Product 2', price: 20.00 }
      ]
    },
    {
      id: 2,
      date: '2023-03-15',
      total: 24.99,
      items: [
        { name: 'Product 3', price: 24.99 }
      ]
    }
  ];

  ordersList.innerHTML = '';
  orders.forEach(order => {
    const orderItem = document.createElement('div');
    orderItem.classList.add('order-item');

    const orderId = document.createElement('h4');
    orderId.textContent = `Order ID: ${order.id}`;

    const orderDate = document.createElement('p');
    orderDate.textContent = `Date: ${order.date}`;

    const orderTotal = document.createElement('p');
    orderTotal.textContent = `Total: $${order.total.toFixed(2)}`;

    const itemList = document.createElement('ul');
    order.items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price}`;
      itemList.appendChild(listItem);
    });

    orderItem.appendChild(orderId);
    orderItem.appendChild(orderDate);
    orderItem.appendChild(orderTotal);
    orderItem.appendChild(itemList);

    ordersList.appendChild(orderItem);
  });
  openModal('orders-modal');
});
