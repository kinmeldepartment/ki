// Function to include HTML components
async function includeHTML(selector, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Error loading ${filePath}`);
        const html = await response.text();
        document.querySelector(selector).innerHTML = html;
        
        // Update active nav item based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Initialize header functionality if it's the header
        if (selector === '#header-placeholder') {
            initializeHeader();
        }
    } catch (error) {
        console.error('Error including HTML:', error);
    }
}

// Initialize header functionality
function initializeHeader() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    searchInput?.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length > 0) {
            searchResults.style.display = 'block';
            // Implement search logic here
        } else {
            searchResults.style.display = 'none';
        }
    });

    // Cart dropdown
    const cartIcon = document.querySelector('.cart');
    const cartDropdown = document.querySelector('.cart-dropdown');
    const closeCart = document.querySelector('.close-cart');

    cartIcon?.addEventListener('click', (e) => {
        e.stopPropagation();
        cartDropdown?.classList.toggle('active');
    });

    closeCart?.addEventListener('click', () => {
        cartDropdown?.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
        if (!cartIcon?.contains(e.target)) {
            cartDropdown?.classList.remove('active');
        }
    });

    // Update cart count
    updateCartCount();
}

// Include header and footer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    includeHTML('#header-placeholder', 'components/header.html');
    includeHTML('#footer-placeholder', 'components/footer.html');
});

// Helper function to update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
} 