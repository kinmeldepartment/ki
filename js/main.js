// Add these variables at the top of your file
const signInLink = document.querySelector('.sign-in');
const registerLink = document.querySelector('.register');
const signInModal = document.getElementById('signInModal');
const registerModal = document.getElementById('registerModal');
const closeSignIn = document.getElementById('closeSignIn');
const closeRegister = document.getElementById('closeRegister');

// Registration Modal Functionality
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.classList.add('active');
});

closeRegister.addEventListener('click', () => {
    registerModal.classList.remove('active');
});

registerModal.addEventListener('click', (e) => {
    if (e.target === registerModal) {
        registerModal.classList.remove('active');
    }
});

// Sign In Modal Functionality
signInLink.addEventListener('click', (e) => {
    e.preventDefault();
    signInModal.classList.add('active');
});

closeSignIn.addEventListener('click', () => {
    signInModal.classList.remove('active');
});

signInModal.addEventListener('click', (e) => {
    if (e.target === signInModal) {
        signInModal.classList.remove('active');
    }
});

// Form Submissions
document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Here you would typically validate credentials
    console.log('Sign in:', { email, password, rememberMe });
    
    // For demo, just show success
    alert('Successfully signed in!');
    document.getElementById('signInModal').classList.remove('active');
    
    // Update UI for logged in user
    updateUserInterface(email);
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Here you would typically send registration data to server
    console.log('Register:', { fullName, email });
    
    // For demo, just show success
    alert('Successfully registered! Please sign in.');
    document.getElementById('registerModal').classList.remove('active');
    document.getElementById('signInModal').classList.add('active');
});

// Forgot Password Functionality
const forgotPasswordLink = document.querySelector('.forgot-password');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const closeForgot = document.getElementById('closeForgot');

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    signInModal.classList.remove('active');
    forgotPasswordModal.classList.add('active');
});

closeForgot.addEventListener('click', () => {
    forgotPasswordModal.classList.remove('active');
});

forgotPasswordModal.addEventListener('click', (e) => {
    if (e.target === forgotPasswordModal) {
        forgotPasswordModal.classList.remove('active');
    }
});

document.getElementById('forgotPasswordForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('resetEmail').value;
    console.log('Password reset requested for:', email);
    
    // Clear form and close modal
    e.target.reset();
    forgotPasswordModal.classList.remove('active');
    alert('Password reset link has been sent to your email!');
});

// Product and Cart Management
const CDN_URL = 'https://your-cdn-url.com/images/';

const products = {
    'tomatoes': {
        id: 'tomatoes',
        name: 'Fresh Tomatoes',
        price: 80,
        image: 'path/to/tomatoes.jpg',
        description: 'Fresh and ripe tomatoes',
        category: 'Vegetables'
    },
    'milk': {
        id: 'milk',
        name: 'Fresh Milk',
        price: 120,
        image: 'path/to/milk.jpg',
        description: 'Fresh dairy milk',
        category: 'Dairy'
    },
    'chicken': {
        id: 'chicken',
        name: 'Fresh Chicken',
        price: 450,
        image: 'path/to/chicken.jpg',
        description: 'Fresh chicken meat',
        category: 'Meat'
    },
    'lays-cream-onion': {
        id: 'lays-cream-onion',
        name: 'Lay\'s Cream & Onion',
        price: 50,
        image: 'path/to/lays-cream-onion.jpg',
        description: 'Crispy potato chips',
        category: 'Snacks'
    },
    'brown-bread': {
        id: 'brown-bread',
        name: 'Fresh Brown Bread',
        price: 80,
        image: 'path/to/brown-bread.jpg',
        description: 'Freshly baked brown bread',
        category: 'Bakery'
    },
    'basmati-rice': {
        id: 'basmati-rice',
        name: 'Premium Basmati Rice',
        price: 250,
        image: 'path/to/basmati-rice.jpg',
        description: 'Premium quality basmati rice',
        category: 'Rice'
    }
};

function updateQuantity(productId, change) {
    const input = document.getElementById(`qty-${productId}`);
    let newValue = parseInt(input.value) + change;
    
    if (newValue >= 1 && newValue <= 12) {
        input.value = newValue;
    }
}

// Payment Modal Functionality
const paymentModal = document.getElementById('paymentModal');
const closePayment = document.getElementById('closePayment');
const checkoutBtn = document.querySelector('.checkout-btn');

checkoutBtn.addEventListener('click', () => {
    paymentModal.classList.add('active');
});

closePayment.addEventListener('click', () => {
    paymentModal.classList.remove('active');
});

paymentModal.addEventListener('click', (e) => {
    if (e.target === paymentModal) {
        paymentModal.classList.remove('active');
    }
});

// Add these variables at the top with other modal declarations
const esewaQRModal = document.getElementById('esewaQRModal');
const closeEsewaQR = document.getElementById('closeEsewaQR');

// Add this function to show eSewa QR code
function showEsewaQR(totalAmount) {
    document.getElementById('esewaAmount').textContent = `Rs. ${totalAmount}`;
    paymentModal.classList.remove('active');
    esewaQRModal.classList.add('active');
}

// Add event listeners for the eSewa QR modal
closeEsewaQR.addEventListener('click', () => {
    esewaQRModal.classList.remove('active');
});

esewaQRModal.addEventListener('click', (e) => {
    if (e.target === esewaQRModal) {
        esewaQRModal.classList.remove('active');
    }
});

// Add these variables at the top of your file
let currentPurchase = null;

// Buy Now functionality
function buyNow(productId) {
    const product = products[productId];
    if (!product) return;

    // Update payment modal with product info
    document.getElementById('paymentProductImage').src = product.image;
    document.getElementById('paymentProductName').textContent = product.name;
    document.getElementById('paymentProductPrice').textContent = product.price;
    
    // Calculate totals
    const subtotal = product.price;
    const shipping = 100;
    const total = subtotal + shipping;
    
    document.getElementById('subtotalAmount').textContent = subtotal;
    document.getElementById('totalAmount').textContent = total;

    // Save purchase info
    const purchaseInfo = {
        productId: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        shipping: shipping,
        total: total,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('currentPurchase', JSON.stringify(purchaseInfo));

    // Show payment modal
    const paymentModal = document.getElementById('paymentModal');
    paymentModal.classList.add('active');

    // Close modal when clicking outside
    paymentModal.onclick = function(event) {
        if (event.target === paymentModal) {
            paymentModal.classList.remove('active');
        }
    };

    // Close modal when clicking close button
    document.getElementById('closePayment').onclick = function() {
        paymentModal.classList.remove('active');
    };
}

// Process payment selection
function processPayment() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (!selectedPayment) {
        alert('Please select a payment method');
        return;
    }

    const paymentMethod = selectedPayment.value;
    const purchaseInfo = JSON.parse(localStorage.getItem('currentPurchase'));
    if (!purchaseInfo) {
        alert('Something went wrong. Please try again.');
        return;
    }

    // Close payment modal
    document.getElementById('paymentModal').classList.remove('active');

    switch(paymentMethod) {
        case 'cod':
            handleCashOnDelivery(purchaseInfo);
            break;
        case 'esewa':
            handleEsewaPayment(purchaseInfo);
            break;
        case 'imepay':
            alert('Redirecting to IME Pay...');
            document.getElementById('paymentModal').classList.remove('active');
            break;
        case 'card':
            alert('Redirecting to card payment...');
            document.getElementById('paymentModal').classList.remove('active');
            break;
    }
}

// Payment handling functions
function handleEsewaPayment(purchaseInfo) {
    const amount = purchaseInfo.total;
    purchaseInfo.amount = amount;
    localStorage.setItem('currentPurchase', JSON.stringify(purchaseInfo));
    window.location.href = 'esewa-payment.html';
}

function handleCashOnDelivery(purchaseInfo) {
    // Create order
    const order = {
        ...purchaseInfo,
        orderId: `ORD${Date.now()}`,
        paymentMethod: 'cod',
        status: 'pending'
    };

    // Save to orders history
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear current purchase 
    localStorage.removeItem('currentPurchase');

    // Show success message
    alert(`Order placed successfully! You will pay Rs. ${purchaseInfo.total} on delivery.`);

    // Redirect to confirmation
    window.location.href = 'order-confirmation.html';
}

// Close payment modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
};

// Add these variables at the top of your file
let currentPurchase = null;
const paymentModal = document.getElementById('paymentModal');
const esewaQRModal = document.getElementById('esewaQRModal');
const closePayment = document.getElementById('closePayment');

// Update buyNow function
function buyNow(productId) {
    const product = products[productId];
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Store current purchase info
    currentPurchase = {
        productId: productId,
        quantity: 1, // Default quantity
        product: product,
        total: product.price + 100 // Product price + shipping
    };

    // Check if user is logged in
    const isLoggedIn = checkLoginStatus(); // You'll need to implement this
    if (!isLoggedIn) {
        showLoginModal();
        return;
    }

    // Show payment modal
    const paymentModal = document.getElementById('paymentModal');
    if (paymentModal) {
        // Update payment modal with product details
        document.querySelector('.subtotal-amount').textContent = `Rs. ${product.price}`;
        document.querySelector('.shipping-amount').textContent = 'Rs. 100';
        document.querySelector('.total-amount').textContent = `Rs. ${product.price + 100}`;
        
        paymentModal.classList.add('active');
    } else {
        console.error('Payment modal not found');
    }
}

// Add login check function
function checkLoginStatus() {
    // Implement your login check logic here
    // For now, we'll use localStorage as an example
    return localStorage.getItem('isLoggedIn') === 'true';
}

function showLoginModal() {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.classList.add('active');
        alert('Please login to continue with purchase');
    }
}

// Update processPayment function
function processPayment() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    
    if (!selectedPayment) {
        alert('Please select a payment method');
        return;
    }

    const paymentMethod = selectedPayment.value;
    
    switch(paymentMethod) {
        case 'cod':
            alert(`Order placed successfully! You will pay Rs. ${currentPurchase.total} on delivery.`);
            completeOrder('cod');
            break;
        case 'esewa':
            showEsewaQR(currentPurchase.total);
            break;
        case 'imepay':
            // Redirect to IME Pay
            window.location.href = 'imepay-payment.html';
            break;
        case 'card':
            alert('Redirecting to card payment...');
            document.getElementById('paymentModal').classList.remove('active');
            break;
    }
}

// Update cart total in payment modal
function updatePaymentSummary() {
    const subtotal = calculateSubtotal();
    const shipping = 100; // Fixed shipping cost
    const total = subtotal + shipping;
    
    document.querySelector('.subtotal-amount').textContent = `Rs. ${subtotal}`;
    document.querySelector('.shipping-amount').textContent = `Rs. ${shipping}`;
    document.querySelector('.total-amount').textContent = `Rs. ${total}`;
}

// Calculate subtotal from cart
function calculateSubtotal() {
    return cart.reduce((total, item) => {
        const product = products[item.id];
        return total + (product.price * item.quantity);
    }, 0);
}

// Show payment modal
function showPaymentModal() {
    updatePaymentSummary();
    document.getElementById('paymentModal').classList.add('active');
}

// Add this with the other event listeners
const homeLink = document.getElementById('homeLink');

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Scroll to top of page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Reset any active modals or dropdowns
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.classList.remove('active'));
});

// Add after existing cart functionality
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function updateWishlistCount() {
    const wishlistCount = document.querySelector('.wishlist-count');
    wishlistCount.textContent = wishlist.length;
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function toggleWishlist(productId) {
    const wishlistBtn = document.querySelector(`[onclick="toggleWishlist('${productId}')"]`);
    const index = wishlist.indexOf(productId);
    
    if (index === -1) {
        // Add to wishlist
        wishlist.push(productId);
        wishlistBtn.classList.add('active');
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'wishlist-success-message';
        successMessage.innerHTML = `
            <i class="fas fa-heart"></i>
            Added to Wishlist
        `;
        document.body.appendChild(successMessage);
        
        // Remove message after 2 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 2000);
    } else {
        // Remove from wishlist
        wishlist.splice(index, 1);
        wishlistBtn.classList.remove('active');
    }
    
    saveWishlist();
    updateWishlistCount();
}

// Initialize wishlist buttons
function initWishlistButtons() {
    wishlist.forEach(productId => {
        const wishlistBtn = document.querySelector(`[onclick="toggleWishlist('${productId}')"]`);
        if (wishlistBtn) {
            wishlistBtn.classList.add('active');
        }
    });
}

// Revert to the simpler wishlist click handler
wishlistIcon.addEventListener('click', () => {
    // Here you can add functionality to show wishlist items
    alert('Wishlist feature coming soon!');
});

// Update DOMContentLoaded to remove wishlist display initialization
document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
    updateCartCount();
    updateWishlistCount();
    initWishlistButtons();
});

// Add this to your existing JavaScript
const groceryLink = document.querySelector('.category-list a');
const groceryModal = document.getElementById('groceryModal');
const closeGrocery = document.getElementById('closeGrocery');

groceryLink.addEventListener('click', (e) => {
    e.preventDefault();
    groceryModal.classList.add('active');
});

closeGrocery.addEventListener('click', () => {
    groceryModal.classList.remove('active');
});

groceryModal.addEventListener('click', (e) => {
    if (e.target === groceryModal) {
        groceryModal.classList.remove('active');
    }
});

// Add this to your existing JavaScript
const apparelLink = document.querySelector('.category-list a:nth-child(2)');
const apparelModal = document.getElementById('apparelModal');
const closeApparel = document.getElementById('closeApparel');

apparelLink.addEventListener('click', (e) => {
    e.preventDefault();
    apparelModal.classList.add('active');
});

closeApparel.addEventListener('click', () => {
    apparelModal.classList.remove('active');
});

apparelModal.addEventListener('click', (e) => {
    if (e.target === apparelModal) {
        apparelModal.classList.remove('active');
    }
});

function toggleCart() {
    const cartDropdown = document.querySelector('.cart-dropdown');
    cartDropdown.classList.toggle('active');
}

// Stop propagation on cart clicks
document.querySelector('.cart-dropdown').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close payment modal when clicking outside
document.addEventListener('click', (e) => {
    const paymentModal = document.getElementById('paymentModal');
    if (e.target === paymentModal) {
        paymentModal.classList.remove('active');
    }
});

// Add function to update quantity in cart
function updateCartQuantity(index, change) {
    const item = cart[index];
    const newQuantity = item.quantity + change;
    
    if (newQuantity >= 1 && newQuantity <= 12) {
        item.quantity = newQuantity;
        updateCartDisplay();
        saveCart();
    }
}

// Add search functionality
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Debounce function to limit API calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search products function
function searchProducts(query) {
    query = query.toLowerCase().trim();
    if (!query) return [];

    return Object.values(products).filter(product => {
        return (
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.keywords.some(keyword => keyword.includes(query))
        );
    });
}

// Display search results
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No products found</p>
            </div>`;
        searchResults.classList.add('active');
        return;
    }

    results.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="search-result-details">
                <div class="search-result-title">${product.name}</div>
                <div class="search-result-category">${product.category}</div>
                <div class="search-result-price">Rs. ${product.price}</div>
            </div>
        `;
        resultItem.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
        searchResults.appendChild(resultItem);
    });
    searchResults.classList.add('active');
}

// Navigate to product
function goToProduct(productId) {
    // You can implement navigation to product page here
    console.log(`Navigating to product: ${productId}`);
}

// Add event listeners
searchInput.addEventListener('input', debounce((e) => {
    searchProducts(e.target.value);
}, 300));

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
    }
});

// Handle search button click
function handleSearch() {
    const query = searchInput.value.trim();
    if (query) {
        searchProducts(query);
    }
}

// Add profile functionality
document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...

    // Profile dropdown close on outside click
    document.addEventListener('click', (e) => {
        const profile = document.querySelector('.user-profile');
        const dropdown = document.querySelector('.profile-dropdown');
        
        if (!profile.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });

    // Profile icon click handler
    const profileIcon = document.getElementById('profileIcon');
    profileIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = document.querySelector('.profile-dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});

// Update login functionality
function showLoginModal() {
    const signInModal = document.getElementById('signInModal');
    const profileDropdown = document.querySelector('.profile-dropdown');
    
    // Hide profile dropdown if open
    if (profileDropdown) {
        profileDropdown.style.display = 'none';
    }
    
    // Show sign in modal
    signInModal.classList.add('active');
}

// Close login modal when clicking outside
document.addEventListener('click', (e) => {
    const loginModal = document.getElementById('loginModal');
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
    }
});

// Close button functionality
document.getElementById('closeLogin').addEventListener('click', () => {
    document.getElementById('loginModal').classList.remove('active');
});

// Handle login form submission
document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Here you would typically validate credentials
    console.log('Sign in:', { email, password, rememberMe });
    
    // For demo, just show success
    alert('Successfully signed in!');
    document.getElementById('signInModal').classList.remove('active');
    
    // Update UI for logged in user
    updateUserInterface(email);
});

// Update UI after successful login
function updateUserInterface(email) {
    const profileIcon = document.getElementById('profileIcon');
    const profileInfo = document.querySelector('.profile-info');
    
    if (profileInfo) {
        profileInfo.innerHTML = `
            <h3>${email}</h3>
            <p>Welcome back!</p>
        `;
    }
}

// Add registration functionality
function showRegisterModal() {
    const signInModal = document.getElementById('signInModal');
    const registerModal = document.getElementById('registerModal');
    
    if (signInModal) {
        signInModal.classList.remove('active');
    }
    if (registerModal) {
        registerModal.classList.add('active');
    }
}

// Close register modal when clicking outside
document.addEventListener('click', (e) => {
    const registerModal = document.getElementById('registerModal');
    if (e.target === registerModal) {
        registerModal.classList.remove('active');
    }
});

// Close button functionality
document.getElementById('closeRegister').addEventListener('click', () => {
    document.getElementById('registerModal').classList.remove('active');
});

// Get current location
function getCurrentLocation() {
    if (navigator.geolocation) {
        const locationInput = document.getElementById('location');
        locationInput.placeholder = 'Getting your location...';
        
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
                    );
                    const data = await response.json();
                    
                    // Format the address
                    const address = [
                        data.address.road,
                        data.address.suburb,
                        data.address.city,
                        data.address.state,
                        data.address.postcode
                    ].filter(Boolean).join(', ');
                    
                    locationInput.value = address;
                } catch (error) {
                    locationInput.placeholder = 'Enter your address';
                    alert('Could not get your location. Please enter manually.');
                }
            },
            (error) => {
                locationInput.placeholder = 'Enter your address';
                alert('Could not get your location. Please enter manually.');
            }
        );
    } else {
        alert('Geolocation is not supported by your browser');
    }
}

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Add your registration logic here
    console.log('Registration attempt:', {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('regEmail').value,
        location: document.getElementById('location').value
    });
    
    // Close modal after successful registration
    document.getElementById('registerModal').classList.remove('active');
});

// Add social login functionality
function initializeSocialLogin() {
    // Initialize Google Sign-In
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com'
        });
    });
    
    // Initialize Facebook SDK
    FB.init({
        appId: 'YOUR_FACEBOOK_APP_ID',
        cookie: true,
        xfbml: true,
        version: 'v12.0'
    });
}

// Google Sign-In
async function signInWithGoogle() {
    const googleBtn = document.querySelector('.google-btn');
    googleBtn.classList.add('loading');
    
    try {
        const auth2 = gapi.auth2.getAuthInstance();
        const googleUser = await auth2.signIn();
        
        const profile = googleUser.getBasicProfile();
        const userData = {
            name: profile.getName(),
            email: profile.getEmail(),
            image: profile.getImageUrl(),
            id: profile.getId(),
            provider: 'google'
        };
        
        // Handle successful login
        handleSocialLogin(userData);
    } catch (error) {
        console.error('Google Sign-In Error:', error);
        alert('Could not sign in with Google. Please try again.');
    } finally {
        googleBtn.classList.remove('loading');
    }
}

// Facebook Sign-In
function signInWithFacebook() {
    const facebookBtn = document.querySelector('.facebook-btn');
    facebookBtn.classList.add('loading');
    
    FB.login(function(response) {
        if (response.status === 'connected') {
            FB.api('/me', { fields: 'name, email, picture' }, function(userData) {
                const userInfo = {
                    name: userData.name,
                    email: userData.email,
                    image: userData.picture?.data?.url,
                    id: userData.id,
                    provider: 'facebook'
                };
                
                // Handle successful login
                handleSocialLogin(userInfo);
            });
        } else {
            console.error('Facebook Sign-In Error:', response);
            alert('Could not sign in with Facebook. Please try again.');
        }
        facebookBtn.classList.remove('loading');
    }, { scope: 'public_profile,email' });
}

// Handle successful social login
function handleSocialLogin(userData) {
    // Close modals
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('registerModal').classList.remove('active');
    
    // Update UI for logged-in user
    const profileIcon = document.getElementById('profileIcon');
    const profileInfo = document.querySelector('.profile-info');
    
    if (userData.image) {
        profileIcon.src = userData.image;
    }
    
    if (profileInfo) {
        profileInfo.innerHTML = `
            <h3>${userData.name}</h3>
            <p>${userData.email}</p>
        `;
    }
    
    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'add-success-message';
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        Successfully signed in with ${userData.provider}
    `;
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
        successMessage.remove();
    }, 2000);
}

// Check if user is already logged in on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeSocialLogin();
    
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        const userData = JSON.parse(savedUser);
        handleSocialLogin(userData);
    }
});

// Add close functionality for all modals
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close payment modal
document.getElementById('closePayment').addEventListener('click', () => {
    closeModal('paymentModal');
});

// Close eSewa QR modal
document.getElementById('closeEsewaQR').addEventListener('click', () => {
    closeModal('esewaQRModal');
});

// Close login modal
document.getElementById('closeLogin').addEventListener('click', () => {
    closeModal('loginModal');
});

// Close register modal
document.getElementById('closeRegister').addEventListener('click', () => {
    closeModal('registerModal');
});

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    const modals = ['paymentModal', 'esewaQRModal', 'loginModal', 'registerModal'];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (e.target === modal) {
            closeModal(modalId);
        }
    });
});

// Add escape key functionality to close modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modals = ['paymentModal', 'esewaQRModal', 'loginModal', 'registerModal'];
        modals.forEach(modalId => closeModal(modalId));
    }
});

// Add function to clear cart after successful purchase
function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    updateCartCount();
}

// Add these variables at the top of your file
let currentPurchase = null;
const paymentModal = document.getElementById('paymentModal');
const esewaQRModal = document.getElementById('esewaQRModal');
const closePayment = document.getElementById('closePayment');

// Update buyNow function
function buyNow(productId) {
    const product = products[productId];
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Check if user is logged in
    const isLoggedIn = checkLoginStatus();
    if (!isLoggedIn) {
        showLoginModal();
        return;
    }

    // Store purchase info in localStorage
    const purchaseInfo = {
        productId: productId,
        product: {
            name: product.name,
            price: product.price,
            image: product.image
        },
        quantity: 1,
        subtotal: product.price,
        shipping: 100,
        total: product.price + 100
    };
    
    localStorage.setItem('currentPurchase', JSON.stringify(purchaseInfo));
    
    // Redirect to payment page
    window.location.href = 'payment.html';
}

// Add login check function
function checkLoginStatus() {
    // Implement your login check logic here
    // For now, we'll use localStorage as an example
    return localStorage.getItem('isLoggedIn') === 'true';
}

function showLoginModal() {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.classList.add('active');
        alert('Please login to continue with purchase');
    }
}

// Update processPayment function
function processPayment() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    
    if (!selectedPayment) {
        alert('Please select a payment method');
        return;
    }

    const paymentMethod = selectedPayment.value;
    
    switch(paymentMethod) {
        case 'cod':
            alert(`Order placed successfully! You will pay Rs. ${currentPurchase.total} on delivery.`);
            completeOrder('cod');
            break;
        case 'esewa':
            showEsewaQR(currentPurchase.total);
            break;
        case 'imepay':
            // Redirect to IME Pay
            window.location.href = 'imepay-payment.html';
            break;
        case 'card':
            alert('Redirecting to card payment...');
            document.getElementById('paymentModal').classList.remove('active');
            break;
    }
}

// Add close button functionality
closePayment.addEventListener('click', () => {
    paymentModal.classList.remove('active');
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target === paymentModal) {
        paymentModal.classList.remove('active');
    }
});

// Add eSewa QR functionality
function showEsewaQR(totalAmount) {
    document.getElementById('esewaAmount').textContent = `Rs. ${totalAmount}`;
    paymentModal.classList.remove('active');
    esewaQRModal.classList.add('active');
}

// Close eSewa QR modal
document.getElementById('closeEsewaQR').addEventListener('click', () => {
    esewaQRModal.classList.remove('active');
});

// Close eSewa QR modal when clicking outside
esewaQRModal.addEventListener('click', (e) => {
    if (e.target === esewaQRModal) {
        esewaQRModal.classList.remove('active');
    }
});

// Chat functionality
let messageCount = 0;
let chatActive = false;

function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    chatActive = !chatActive;
    chatContainer.classList.toggle('active');
    
    if (chatActive) {
        // Reset notification count when opening chat
        messageCount = 0;
        document.getElementById('messageCount').textContent = messageCount;
    }
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        // Add user message
        chatMessages.innerHTML += `
            <div class="message user">
                <img src="images/user-avatar.png" alt="You" class="avatar">
                <div class="message-content">
                    <p>${message}</p>
                    <span class="time">${time}</span>
                </div>
            </div>
        `;
        
        // Clear input
        input.value = '';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate support response after 1 second
        setTimeout(() => {
            chatMessages.innerHTML += `
                <div class="message support">
                    <img src="images/support-avatar.png" alt="Support" class="avatar">
                    <div class="message-content">
                        <p>Thanks for your message! Our team will get back to you soon.</p>
                        <span class="time">${time}</span>
                    </div>
                </div>
            `;
            
            // Update notification if chat is not active
            if (!chatActive) {
                messageCount++;
                document.getElementById('messageCount').textContent = messageCount;
            }
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

// Allow sending message with Enter key
document.getElementById('messageInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Add these functions to switch between modals
function showSignInModal() {
    const registerModal = document.getElementById('registerModal');
    const signInModal = document.getElementById('signInModal');
    
    if (registerModal) {
        registerModal.classList.remove('active');
    }
    signInModal.classList.add('active');
}

function showRegisterModal() {
    const signInModal = document.getElementById('signInModal');
    const registerModal = document.getElementById('registerModal');
    
    if (signInModal) {
        signInModal.classList.remove('active');
    }
    if (registerModal) {
        registerModal.classList.add('active');
    }
}

// Update the profile menu login click handler
document.addEventListener('DOMContentLoaded', () => {
    // Add click handler for login button in profile menu
    const loginButton = document.querySelector('.profile-item[data-action="login"]');
    if (loginButton) {
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            showRegisterModal();
            // Hide profile dropdown
            const profileDropdown = document.querySelector('.profile-dropdown');
            if (profileDropdown) {
                profileDropdown.style.display = 'none';
            }
        });
    }
});

// Product Slider functionality
let currentPosition = 0;
const track = document.querySelector('.product-track');
const products = document.querySelectorAll('.product-card');
const productWidth = 250; // Width of each product card + gap
const visibleProducts = Math.floor(track.parentElement.offsetWidth / productWidth);

function slideProducts(direction) {
    const maxPosition = -(products.length - visibleProducts) * productWidth;
    
    if (direction === 'next' && currentPosition > maxPosition) {
        currentPosition -= productWidth;
    } else if (direction === 'prev' && currentPosition < 0) {
        currentPosition += productWidth;
    }
    
    track.style.transform = `translateX(${currentPosition}px)`;
}

// Initialize slider on page load
window.addEventListener('load', () => {
    // Set initial width of track
    track.style.width = `${products.length * productWidth}px`;
});

// Update slider on window resize
window.addEventListener('resize', () => {
    const newVisibleProducts = Math.floor(track.parentElement.offsetWidth / productWidth);
    if (newVisibleProducts !== visibleProducts) {
        currentPosition = 0;
        track.style.transform = `translateX(0)`;
    }
});

// Add touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const difference = touchStartX - touchEndX;
    
    if (Math.abs(difference) > swipeThreshold) {
        if (difference > 0) {
            slideProducts('next');
        } else {
            slideProducts('prev');
        }
    }
}

// Add loading state handler
function showLoading(element) {
    element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    element.disabled = true;
}

function hideLoading(element, originalText) {
    element.innerHTML = originalText;
    element.disabled = false;
}

// Add error handler
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        ${message}
    `;
    document.body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
}

// Featured Products Slider
function initFeaturedSlider() {
    const slider = document.getElementById('featuredSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');
    let currentIndex = 0;
    let autoSlideInterval;
    let itemsPerView = getItemsPerView();

    const items = slider.querySelectorAll('.slider-item');

    // Calculate items per view based on screen width
    function getItemsPerView() {
        if (window.innerWidth > 1200) return 4;
        if (window.innerWidth > 992) return 3;
        if (window.innerWidth > 768) return 2;
        return 1;
    }

    // Update slider on window resize
    window.addEventListener('resize', () => {
        itemsPerView = getItemsPerView();
        slideToIndex(currentIndex);
    });

    function slideToIndex(index) {
        if (index < 0) index = items.length - itemsPerView;
        if (index >= items.length - itemsPerView + 1) index = 0;
        
        currentIndex = index;
        
        // Update active classes
        items.forEach((item, i) => {
            item.classList.toggle('active', 
                i >= currentIndex && i < currentIndex + itemsPerView);
        });
        
        // Update dots
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
        
        // Move slider with smooth transition
        slider.style.transform = `translateX(-${(currentIndex * 100) / itemsPerView}%)`;
    }

    // Auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        stopAutoSlide();
    });

    slider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
        startAutoSlide();
    });

    function handleSwipe() {
        const difference = touchStartX - touchEndX;
        if (Math.abs(difference) > 50) { // Minimum swipe distance
            if (difference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Start auto sliding
    startAutoSlide();

    // Pause auto slide when user hovers over slider
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initFeaturedSlider();
});

// Handle subcategory popup positioning
function handleSubcategoryPopup() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        const popup = item.querySelector('.subcategory-popup');
        
        item.addEventListener('mouseenter', () => {
            // Check if popup would go off screen
            const rect = popup.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            if (rect.bottom > viewportHeight) {
                const overflow = rect.bottom - viewportHeight;
                popup.style.top = `-${overflow}px`;
            }
        });
        
        item.addEventListener('mouseleave', () => {
            popup.style.top = '0'; // Reset position
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    handleSubcategoryPopup();
});

// Payment handling functions
function handleEsewaPayment() {
    const purchaseInfo = JSON.parse(localStorage.getItem('currentPurchase'));
    if (!purchaseInfo) return;

    const amount = purchaseInfo.price;
    
    // Close payment modal
    document.getElementById('paymentModal').classList.remove('active');
    
    // Update purchase info
    purchaseInfo.amount = amount;
    purchaseInfo.orderId = `ORD${Date.now()}`;
    localStorage.setItem('currentPurchase', JSON.stringify(purchaseInfo));
    
    // Redirect to eSewa payment page
    window.location.href = 'esewa-payment.html';
}

function handleCashOnDelivery() {
    const purchaseInfo = JSON.parse(localStorage.getItem('currentPurchase'));
    if (!purchaseInfo) return;

    // Close payment modal
    document.getElementById('paymentModal').classList.remove('active');

    // Save order and redirect to confirmation
    const order = {
        ...purchaseInfo,
        orderId: `ORD${Date.now()}`,
        paymentMethod: 'cod',
        status: 'pending'
    };

    // Save to orders history
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear current purchase
    localStorage.removeItem('currentPurchase');

    // Redirect to confirmation
    window.location.href = 'order-confirmation.html';
}

// Add QRCode library to your HTML
// <script src="https://unpkg.com/qrcode@1.4.4/build/qrcode.min.js"></script>

function handlePaymentMethodChange() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    const qrContainer = document.getElementById('qrCodeContainer');
    const submitBtn = document.querySelector('.submit-btn');

    if (selectedPayment && selectedPayment.value === 'khalti') {
        generateKhaltiQR();
        qrContainer.style.display = 'flex';
        submitBtn.style.display = 'none';
    } else {
        qrContainer.style.display = 'none';
        submitBtn.style.display = 'block';
    }
}

function generateKhaltiQR() {
    const purchaseInfo = JSON.parse(localStorage.getItem('currentPurchase'));
    if (!purchaseInfo) return;

    const amount = purchaseInfo.total * 100; // Convert to paisa
    
    const khaltiData = {
        merchantId: 'your_merchant_id', // Replace with your Khalti merchant ID
        amount: amount,
        orderId: `ORD${Date.now()}`,
        remarks: 'Payment for KinMel order'
    };

    const qrString = `khalti://payment?` +
        `merchantId=${khaltiData.merchantId}&` +
        `amount=${khaltiData.amount}&` +
        `orderId=${khaltiData.orderId}&` +
        `remarks=${encodeURIComponent(khaltiData.remarks)}`;

    // Clear previous QR code
    const qrElement = document.getElementById('qrCode');
    qrElement.innerHTML = '';

    // Generate new QR code
    new QRCode(qrElement, {
        text: qrString,
        width: 256,
        height: 256,
        colorDark: '#5C2D91',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });

    // Start checking payment status
    checkPaymentStatus(khaltiData.orderId);
}

function checkPaymentStatus(orderId) {
    let attempts = 0;
    const maxAttempts = 60; // Check for 5 minutes
    const statusElement = document.getElementById('paymentStatus');

    const checkInterval = setInterval(() => {
        attempts++;
        
        // Here you would make an API call to check payment status
        // For demo, we'll simulate a successful payment after 10 seconds
        if (attempts === 10) {
            clearInterval(checkInterval);
            statusElement.className = 'payment-status success';
            statusElement.textContent = 'Payment successful!';
            
            // Handle successful payment
            handleSuccessfulPayment();
        } else if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            statusElement.className = 'payment-status error';
            statusElement.textContent = 'Payment timeout. Please try again.';
        }
    }, 1000);
}

function handleSuccessfulPayment() {
    const purchaseInfo = JSON.parse(localStorage.getItem('currentPurchase'));
    if (!purchaseInfo) return;

    // Create order
    const order = {
        ...purchaseInfo,
        paymentMethod: 'khalti',
        status: 'completed'
    };

    // Save to orders history
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear current purchase
    localStorage.removeItem('currentPurchase');

    // Redirect to confirmation page after 2 seconds
    setTimeout(() => {
        window.location.href = 'order-confirmation.html';
    }, 2000);
}

// Add event listeners
document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', handlePaymentMethodChange);
}); 