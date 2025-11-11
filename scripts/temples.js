document.addEventListener('DOMContentLoaded', function () {

    // ✅ Set footer copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').innerText = currentYear;

    // ✅ Set footer last modified date
    document.getElementById('lastModified').innerText = document.lastModified;

    // ✅ Mobile menu toggle
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', function () {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

});
