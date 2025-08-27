const natureElements = {
    forest: {
        images: ['assets/images/forest1.jpg', 'assets/images/forest2.jpg', 'assets/images/forest3.jpg'],
        description: 'A serene forest with tall trees and lush greenery.'
    },
    books: {
        images: ['assets/images/books1.jpg', 'assets/images/books2.jpg', 'assets/images/books3.jpg'],
        description: 'A collection of books that inspire and educate.'
    },
    rivers: {
        images: ['assets/images/rivers1.jpg', 'assets/images/rivers2.jpg', 'assets/images/rivers3.jpg'],
        description: 'Flowing rivers that bring life to the landscape.'
    },
    waterfalls: {
        images: ['assets/images/waterfall1.jpg', 'assets/images/waterfall2.jpg', 'assets/images/waterfall3.jpg'],
        description: 'Majestic waterfalls cascading down rocky cliffs.'
    },
    lights: {
        images: ['assets/images/lights1.jpg', 'assets/images/lights2.jpg', 'assets/images/lights3.jpg'],
        description: 'Enchanting lights that illuminate the night sky.'
    }
};

const displayImages = (element) => {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear previous images
    const selectedElement = natureElements[element];

    selectedElement.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = selectedElement.description;
        img.classList.add('nature-image');
        imageContainer.appendChild(img);
    });
};

const setupEventListeners = () => {
    document.getElementById('forest').addEventListener('click', () => displayImages('forest'));
    document.getElementById('books').addEventListener('click', () => displayImages('books'));
    document.getElementById('rivers').addEventListener('click', () => displayImages('rivers'));
    document.getElementById('waterfalls').addEventListener('click', () => displayImages('waterfalls'));
    document.getElementById('lights').addEventListener('click', () => displayImages('lights'));
};

document.addEventListener('DOMContentLoaded', setupEventListeners);