// config.js variables - edit these for your brand
const CONFIG = {
    storeName: "AI Commerce",
    tagline: "Fully Autonomous AI-Powered Store",
    currency: "$",
    freeTierLimit: 5,
    proPrice: 9.99
};

// Simple cart simulation
let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(`${product} added to cart! Total items: ${cart.length}`);
    console.log('Cart:', cart);
    // In production, this would call Commerce Layer agents
}

function scrollToPricing() {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

// Load config into page (simple demonstration)
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    if (logo) logo.textContent = CONFIG.storeName;
    
    console.log('Store loaded with config:', CONFIG);
    // Agents would update products dynamically via APIs
});

// Paywall logic example
function checkAccess(tier) {
    if (tier === 'free' && cart.length > CONFIG.freeTierLimit) {
        alert('Free tier limit reached. Upgrade to Pro for unlimited!');
        return false;
    }
    return true;
}