// Product data
const products = [
    {
        id: 1,
        title: "Google Pixel 9,9 pro,9 pro xl,9a",
        price: 170000,
        description: "Althe magic of Gemini, your AI assistant, on Pixel's largest screen.",
        category: "Smart Phone",
        image: "https://lh3.googleusercontent.com/RIA-yh9mi7quHWNKMysPrVJpWlYVh02G0r5JeZ1jnSOM0H68X-44nwEslTLrQ-EqlcRJsYTdK-hMi1PLtjc=rw",
        rating: 4.5,
        stock: 20
    },
    {
        id: 2,
        title: "Bluetooth Headphone ",
        price: 2200,
        description: "",
        category: "headhphone",
        image: "data:image/jpeg;base64,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",
        rating: 4.2,
        stock: 50
    },
    {
        id: 3,
        title: "Samsung S series ",
        price: 99999,
        description: "Latest model smartphone with 256GB storage, high-resolution camera, fast processor, and long-lasting battery. Features the newest operating system and facial recognition technology",
        category: "Smart Phone",
        image: "https://images.samsung.com/is/image/samsung/assets/us/explore/best-samsung-s-series-phones/01/01_HeroKV_MO.jpg?$720_N_JPG$",
        rating: 4.7,
        stock: 10
    },
    {
        id: 4,
        title: "Bluetooth Headphone",
        price: 1999,
        description: "Professional-grade kitchen knife set with high-carbon stainless steel blades. Includes chef's knife, bread knife, utility knife, paring knife, and more. Comes with a beautiful wooden block for safe storage.",
        category: "offer",
        image: "https://www.startech.com.bd/image/cache/catalog/earbuds/earfun/air-mini-2/air-mini-2-01-500x500.webp",
        rating: 4.6,
        stock: 25
    },
    {
        id: 5,
        title: "Bluetooth Headphone",
        price: 3499,
        description: "",
        category: "headhphone",
        image: "https://static.independent.co.uk/2024/10/30/12/Wireless-headphones.jpg?width=1200",
        rating: 4.4,
        stock: 30
    },
    {
        id: 6,
        title: "Bluetooth Headphone",
        price: 1099,
        description: "Comfortable ergonomic office chair with adjustable height, lumbar support, and breathable mesh back. Perfect for long working hours and proper posture support.",
        category: "offer",
        image: "https://extremegadgets.com.bd/wp-content/uploads/2024/06/51wPkNzqyKL.jpg",
        rating: 4.3,
        stock: 15
    },
    {
        id: 7,
        title: "iphone 16,16 pro,16 pro max",
        price: 99999,
        description: "Latest model smartphone with 256GB storage, high-resolution camera, fast processor, and long-lasting battery. Features the newest operating system and facial recognition technology.",
        category: "Smart Phone",
        image: "https://static.independent.co.uk/2024/09/13/15/Iphone-16-hero-indybest.jpg",
        rating: 4.8,
        stock: 8
    },
    {
        id: 8,
        title: "Bluetooth Headphone",
        price: 1299,
        description: "",
        category: "offer",
        image: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-flex/pdp/product-carousel/flame-blue/pc-beats-flex-flame-blue-earbuds.jpg",
        rating: 4.5,
        stock: 20
    }
];

// DOM elements
const productsContainer = document.getElementById('products-container');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const clearCartBtn = document.getElementById('clear-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const productDetailModal = document.getElementById('product-detail-modal');
const productDetailContent = document.getElementById('product-detail-content');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartCount = document.querySelector('.cart-count');
const closeModalBtns = document.querySelectorAll('.close-modal');
const contactForm = document.getElementById('contact-form');

// Cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts('all');
    updateCartCount();
    updateCartModal();
});

cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

clearCartBtn.addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartModal();
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before checkout.');
        return;
    }
    alert('Thank you for your purchase! Your order has been placed.');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartModal();
    cartModal.style.display = 'none';
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        displayProducts(filter);
    });
});

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cartModal.style.display = 'none';
        productDetailModal.style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (event.target === productDetailModal) {
        productDetailModal.style.display = 'none';
    }
});

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`Thank you ${name} for your message! We'll get back to you at ${email} soon.`);
        contactForm.reset();
    });
}

// Functions
function displayProducts(filter) {
    productsContainer.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-items">
                <i class="fas fa-box-open"></i>
                <p>No products found in this category.</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">TK ${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="view-btn" data-id="${product.id}">View Details</button>
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
        
        // Add event listeners to the buttons inside the card
        const viewBtn = productCard.querySelector('.view-btn');
        viewBtn.addEventListener('click', () => showProductDetails(product.id));
        
        const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => addToCart(product.id));
    });
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    productDetailContent.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-detail-info">
                <div class="product-detail-category">${product.category}</div>
                <h2 class="product-detail-title">${product.title}</h2>
                <div class="product-detail-price">$${product.price.toFixed(2)}</div>
                <p class="product-detail-description">${product.description}</p>
                <div class="product-detail-stock ${product.stock > 0 ? '' : 'out-of-stock'}">
                    ${product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                </div>
                <div class="product-detail-rating">
                    Rating: ${product.rating}/5
                    ${Array(Math.round(product.rating)).fill().map(() => '<i class="fas fa-star"></i>').join('')}
                    ${product.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                </div>
                <div class="product-detail-actions">
                    <button class="btn add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    
    productDetailModal.style.display = 'block';
    
    const addToCartBtn = productDetailContent.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        addToCart(product.id);
        productDetailModal.style.display = 'none';
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show confirmation
    alert(`${product.title} has been added to your cart!`);
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

function updateCartModal() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added any products to your cart yet.</p>
                <button class="btn" onclick="document.getElementById('cart-modal').style.display='none'">Continue Shopping</button>
            </div>
        `;
        cartTotalPrice.textContent = '$0.00';
        return;
    }
    
    let cartHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus-btn" data-id="${item.id}">-</button>
                        <input type="number" class="cart-quantity" value="${item.quantity}" min="1" data-id="${item.id}" readonly>
                        <button class="quantity-btn plus-btn" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-from-cart" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = cartHTML;
    cartTotalPrice.textContent = `$${total.toFixed(2)}`;
    
    // Add event listeners for cart item actions
    document.querySelectorAll('.minus-btn').forEach(btn => {
        btn.addEventListener('click', () => updateItemQuantity(btn.getAttribute('data-id'), 'decrease'));
    });
    
    document.querySelectorAll('.plus-btn').forEach(btn => {
        btn.addEventListener('click', () => updateItemQuantity(btn.getAttribute('data-id'), 'increase'));
    });
    
    document.querySelectorAll('.remove-from-cart').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.getAttribute('data-id'))));
    });
}

function updateItemQuantity(itemId, action) {
    const itemIndex = cart.findIndex(item => item.id === parseInt(itemId));
    
    if (itemIndex === -1) return;
    
    if (action === 'increase') {
        cart[itemIndex].quantity += 1;
    } else if (action === 'decrease') {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            removeFromCart(parseInt(itemId));
            return;
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartModal();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartModal();
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        // Skip empty hash links
        if (href === '#') return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});