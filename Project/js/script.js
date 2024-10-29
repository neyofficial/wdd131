// Function to initialize and set up page events
function init() {
    greetUser();
    displayFestivals();
    displayCuisine();
    setupThemeToggle();
}

// Function to greet the user based on time of day
function greetUser() {
    const greetingMessage = document.createElement('p');
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    greetingMessage.textContent = `${greeting} Welcome to Ghanaian Cultural Heritage!`;
    document.querySelector('main').prepend(greetingMessage);
}

// Function to display popular festivals with images
function displayFestivals() {
    const festivalsSection = document.querySelector('#festivals');
    const festivals = [
        { 
            name: 'Homowo Festival', 
            description: 'The Homowo Festival is celebrated by the Ga people in Accra...',
            imgSrc: 'images/homowo.jpg',
            imgAlt: 'Homowo Festival in Ghana'
        },
        { 
            name: 'Aboakyir Festival', 
            description: 'The Aboakyir Festival, celebrated by the Effutu people in Winneba...',
            imgSrc: 'images/aboakyir.jpg',
            imgAlt: 'Aboakyir Festival in Ghana'
        }
    ];

    festivals.forEach(festival => {
        const festivalArticle = document.createElement('article');
        festivalArticle.innerHTML = `
            <h3>${festival.name}</h3>
            <img src="${festival.imgSrc}" alt="${festival.imgAlt}" loading="lazy">
            <p>${festival.description}</p>
        `;
        festivalsSection.appendChild(festivalArticle);
    });
}

// Function to display popular dishes with images
function displayCuisine() {
    const cuisineSection = document.querySelector('#cuisine');
    const dishes = [
        { 
            name: 'Jollof Rice', 
            description: 'Ghana’s version of Jollof rice is known for its rich, spicy flavor...',
            imgSrc: 'images/jollof.jpg',
            imgAlt: 'Ghanaian Jollof Rice'
        },
        { 
            name: 'Fufu and Light Soup', 
            description: 'A beloved meal made from pounded yams or plantains served with light soup...',
            imgSrc: 'images/fufu.jpg',
            imgAlt: 'Fufu and Light Soup'
        }
    ];

    dishes.forEach(dish => {
        const dishArticle = document.createElement('article');
        dishArticle.innerHTML = `
            <h3>${dish.name}</h3>
            <img src="${dish.imgSrc}" alt="${dish.imgAlt}" loading="lazy">
            <p>${dish.description}</p>
        `;
        cuisineSection.appendChild(dishArticle);
    });
}

// Function to toggle between light and dark theme
function setupThemeToggle() {
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.textContent = 'Toggle Dark Theme';
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
    document.querySelector('header').appendChild(themeToggleBtn);
}

document.addEventListener("DOMContentLoaded", init);
