// Cart functionality using in-memory storage and localStorage

// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in navbar
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cartCount');
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
    });
}

// Add item to cart
function addToCart(name, price) {
    const cart = getCart();
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    saveCart(cart);
    
    // Show success message
    showToast(`${name} added to cart!`);
}

// Remove item from cart
function removeFromCart(index) {
    const cart = getCart();
    const removedItem = cart[index];
    cart.splice(index, 1);
    saveCart(cart);
    
    // Refresh cart display if on cart page
    if (typeof displayCart === 'function') {
        displayCart();
    }
    
    showToast(`${removedItem.name} removed from cart!`);
}

// Update quantity
function updateQuantity(index, change) {
    const cart = getCart();
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
        return;
    }
    
    saveCart(cart);
    
    // Refresh cart display if on cart page
    if (typeof displayCart === 'function') {
        displayCart();
    }
}

// Clear cart
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
    
    // Refresh cart display if on cart page
    if (typeof displayCart === 'function') {
        displayCart();
    }
}

// Show toast notification (simple version)
function showToast(message) {
    // Check if toast container exists, if not create it
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.style.cssText = 'position: fixed; top: 80px; right: 20px; z-index: 9999;';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="toast-header bg-success text-white">
            <i class="bi bi-check-circle-fill me-2"></i>
            <strong class="me-auto">Success</strong>
            <button type="button" class="btn-close btn-close-white" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});