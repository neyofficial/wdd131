// Initialize all page events when the DOM is ready
document.addEventListener("DOMContentLoaded", init);

function init() {
    greetUser();
    displayFestivals();
    displayCuisine();
    setupThemeToggle();
    setupStorageHandlers(); // NEW → Handles newsletter + contact form storage
}

/* -----------------------------
   1. Greeting the User
------------------------------*/
function greetUser() {
    const main = document.querySelector('main');
    if (!main) return;

    const greetingMessage = document.createElement('p');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    greetingMessage.textContent = `${greeting} Welcome to Ghanaian Cultural Heritage!`;
    greetingMessage.classList.add("greeting");
    main.prepend(greetingMessage);
}

/* -----------------------------
   2. Display Festivals
------------------------------*/
function displayFestivals() {
    const section = document.querySelector('#festivals');
    if (!section) return;

    const festivals = [
        {
            name: 'Homowo Festival',
            description: 'The Homowo Festival is celebrated by the Ga people in Accra...',
            imgSrc: 'images/homowo.jpeg',
            imgAlt: 'Homowo Festival celebration'
        },
        {
            name: 'Aboakyir Festival',
            description: 'The Aboakyir Festival, celebrated by the Effutu people in Winneba...',
            imgSrc: 'images/aboakyir.png',
            imgAlt: 'Aboakyir Festival in Ghana'
        }
    ];

    festivals.forEach(festival => {
        section.appendChild(createCard(festival));
    });
}

/* -----------------------------
   3. Display Cuisine
------------------------------*/
function displayCuisine() {
    const section = document.querySelector('#cuisine');
    if (!section) return;

    const dishes = [
        {
            name: 'Jollof Rice',
            description: 'Ghana’s Jollof is rich, smoky, and full of spice...',
            imgSrc: 'images/jollof.jpg',
            imgAlt: 'Ghana Jollof Rice'
        },
        {
            name: 'Fufu and Light Soup',
            description: 'Fufu served with light soup remains a comforting and traditional Ghanaian meal...',
            imgSrc: 'images/fufu.jpg',
            imgAlt: 'Fufu with light soup'
        }
    ];

    dishes.forEach(dish => {
        section.appendChild(createCard(dish));
    });
}

/* -----------------------------
   4. Create a Reusable Content Card
------------------------------*/
function createCard(item) {
    const article = document.createElement('article');
    article.classList.add('content-card');

    article.innerHTML = `
        <h3>${item.name}</h3>
        <img src="${item.imgSrc}" alt="${item.imgAlt}" loading="lazy">
        <p>${item.description}</p>
    `;

    return article;
}

/* -----------------------------
   5. Theme Toggler
------------------------------*/
function setupThemeToggle() {
    const header = document.querySelector('header');
    if (!header) return;

    const button = document.createElement('button');
    button.textContent = 'Toggle Dark Theme';
    button.classList.add('theme-toggle');

    button.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    header.appendChild(button);
}

/* -----------------------------
   6. Newsletter + Contact Storage (LOCALSTORAGE)
------------------------------*/
function setupStorageHandlers() {

    /* ---- Newsletter form ---- */
    const newsletterForm = document.querySelector('#newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.querySelector('#newsletter-name').value.trim();
            const email = document.querySelector('#newsletter-email').value.trim();

            if (!name || !email) {
                showNotice(newsletterForm, `Please enter both name and email.`);
                return;
            }

            const key = 'ghana_newsletter';
            const existing = JSON.parse(localStorage.getItem(key)) || [];

            if (existing.some(entry => entry.email === email)) {
                showNotice(newsletterForm, `You are already subscribed with ${email}.`);
                return;
            }

            existing.push({ name, email, date: new Date().toISOString() });
            localStorage.setItem(key, JSON.stringify(existing));

            showNotice(newsletterForm, `Thank you ${name}! You have subscribed successfully.`);
            newsletterForm.reset();
        });
    }

    /* ---- Contact form ---- */
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nm = document.querySelector('#name').value.trim();
            const em = document.querySelector('#email').value.trim();
            const msg = document.querySelector('#message').value.trim();
            const purpose =
                contactForm.querySelector('input[name="purpose"]:checked')?.value || "unspecified";

            if (!nm || !em || !msg) {
                showNotice(contactForm, `All fields must be filled before submitting.`);
                return;
            }

            const key = 'ghana_contacts';
            const existing = JSON.parse(localStorage.getItem(key)) || [];

            existing.push({
                name: nm,
                email: em,
                purpose,
                message: msg,
                date: new Date().toISOString()
            });

            localStorage.setItem(key, JSON.stringify(existing));
            showNotice(contactForm, `Thank you ${nm}! Your message has been saved.`);
            contactForm.reset();
        });
    }

    /* ---- Notice helper ---- */
    function showNotice(form, message) {
        let notice = form.querySelector('.form-notice');
        if (!notice) {
            notice = document.createElement('p');
            notice.classList.add('form-notice');
            notice.style.color = "#064e3b";
            notice.style.marginTop = "10px";
            form.appendChild(notice);
        }
        notice.innerHTML = `${message}`;
        setTimeout(() => notice.remove(), 6000);
    }

    /* Developer helpers for console testing */
    window.__newsletter = () => JSON.parse(localStorage.getItem('ghana_newsletter') || '[]');
    window.__contacts = () => JSON.parse(localStorage.getItem('ghana_contacts') || '[]');
}
