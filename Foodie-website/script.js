// Food Items Data
const foodItems = [
    {
        id: 1,
        name: "Cheeseburger",
        description: "Juicy beef patty with melted cheese",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Burgers"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        description: "Classic pizza with pepperoni and mozzarella",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Pizza"
    },
    {
        id: 3,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with croutons and parmesan",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Salads"
    },
    {
        id: 4,
        name: "Spaghetti Bolognese",
        description: "Pasta with rich meat sauce",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Pasta"
    }
];

// Shopping Cart
let cart = [];

// Display Food Items
function displayFoodItems() {
    const foodItemsContainer = document.getElementById('food-items');
    foodItemsContainer.innerHTML = '';

    foodItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'bg-white rounded-lg shadow-md overflow-hidden';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-bold mb-2">${item.name}</h3>
                <p class="text-gray-600 mb-4">${item.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-lg font-bold">$${item.price.toFixed(2)}</span>
                    <button onclick="addToCart(${item.id})" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        foodItemsContainer.appendChild(itemElement);
    });
}

// Add to Cart Function
function addToCart(itemId) {
    const item = foodItems.find(i => i.id === itemId);
    if (item) {
        cart.push(item);
        updateCartCount();
        alert(`${item.name} added to cart!`);
    }
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayFoodItems();
    updateCartCount();
});
