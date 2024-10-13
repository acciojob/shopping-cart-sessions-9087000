// Product data
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
];

// Render products
function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productList.appendChild(li);
    });
}

// Add to cart
function addToCart(productId) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

// Render cart
function renderCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}

// Clear cart
function clearCart() {
    sessionStorage.removeItem('cart');
    renderCart();
}

// Event listeners
document.getElementById('clear-cart-btn').addEventListener('click', clearCart);

// On page load
window.onload = function () {
    renderProducts();
    renderCart();
};
