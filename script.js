// Product data
const products = [
    {
        id: 1,
        title: "Dr. Raihan Ahmad",
        price: 100,
        description: "MBBS,BCS (Health) (Clinician),FCPS (Internal Medicine) Training/Courses: CCD (Endocrinology),PGT (Neurology)",
        category: "General",
        image: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/175198/profile_photos/LI1Odwz0vFMnJLDUecj4v7JzA1mZhPULQt4zt96E.png",
        rating: 4.5,
        stock: 3 
    },
    {
        id: 2,
        title: "Asst. Prof. Dr. Towhidul Islam ",
        price: 200,
        description: "MBBS,MD (Psychiatry)",
        category: "Psychiatry",
        image: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/515611/profile_photos/6usvxPKLom8fjz3yciZ3O7ZKb8glQmaVHXgZVbX7.png",
        rating: 4.9,
        stock: 5
    },
    {
        id: 3,
        title: "Dr. Golam Moudud Ahmed",
        price: 150,
        description: "MBBS - Training/Courses:PGT (Dermatology),PGT (Pediatrics)General Physician, Pediatrics",
        category: "General",
        image: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/73771/profile_photos/dlRSNss3ELcRYe4O0n7GzOXquTjw9DWtTyF1QAnY.jpg",
        rating: 4.7,
        stock: 5
    },
    {
        id: 4,
        title: "Dr. Mohtasham Hasan",
        price: 499,
        description: "MBBS,MD (Psychiatry)",
        category: "Psychiatry",
        image: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/15386272/profile_photos/f69YY1ewnlURt0Vy7s7W0JlDPy1EHcFoU78Yu4cG.jpg",
        rating: 4.6,
        stock: 2
    },
    {
        id: 5,
        title: "Assoc. Prof. Dr. Md. Zillur Rahman Khan",
        price: 499,
        description: "MBBS,BCS (Health),FCPS (Psychiatry)",
        category: "Psychiatry",
        image: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/16440335/profile_photos/7vtn37sqfQjhuPWhZeODWEJJDQTFb2ht3zDwbFG8.jpg",
        rating: 4.4,
        stock: 5
    },
    {
        id: 6,
        title: "Asst. Prof. Dr. Kazi Md. Hannanur Rahman Jewel",
        price: 499,
        description: "MBBS,MS (Orthopedics),FCPS (Orthopedics)",
        category: "Orthopedic",
        image: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/88507/profile_photos/LKmZYRsqy6WsIU3r3KguDmTczKt6Ef6JsW7di1Cd.jpg",
        rating: 4.3,
        stock: 5
    },
    {
        id: 7,
        title: "Asst. Prof. Dr. Z. Wadud",
        price: 550,
        description: "MBBS,MS (Orthopedics)",
        category: "Orthopedic",
        image: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/3160518/profile_photos/e4GP78X5FKwc4BCz1LN6OeH5wkBC2G4vA90GViyo.png",
        rating: 4.8,
        stock: 7
    },
    {
        id: 8,
        title: "Dr. MD ABDULLA AL MARUF",
        price: 1299,
        description: "MBBS,Diploma (Orthopedics)",
        category: "Orthopedic",
        image: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/10662247/profile_photos/KP8OD5Iweowts4S9RNPJAYqwWANbi3BPtH3aaiDR.png",
        rating: 4.5,
        stock: 7
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
const productDetailContent = document.getElementById('dr_details');
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
function displayProducts(filter) {
    productsContainer.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
          
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
                    <a class="add-to-cart-btn" href="index1.html"> Appointment </a>
                    <button class="add-to-cart-btn" data-id="${product.id}" >Appointment</button>
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
                <div class="product-detail-price">Tk${product.price.toFixed(2)}</div>
                <p class="product-detail-description">${product.description}</p>
                <div class="product-detail-stock ${product.stock > 0 ? '' : 'out-of-stock'}">
                    ${product.stock > 0 ? `In available (${product.stock} days)` : 'Out of Stock'}
                </div>
                <div class="product-detail-rating">
                    Rating: ${product.rating}/5
                    ${Array(Math.round(product.rating)).fill().map(() => '<i class="fas fa-star"></i>').join('')}
                    ${product.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                </div>
                <div class="product-detail-actions">
                    <button class="btn add-to-cart-btn" data-id="${product.id}">Appointment</button>
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
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

function updateCartModal() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
           
        `;
        
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

