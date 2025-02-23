document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.closest('.card-body').querySelector('.card-title').innerText;
            alert(`${productName} has been added to your cart!`);
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchIcon = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');
    const shopNowButton = document.getElementById('shopNowButton');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    // Load and apply the user's theme preference
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.body.classList.remove('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    searchIcon.addEventListener('click', () => {
        searchBar.classList.toggle('show');
    });

    shopNowButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Shop Now button clicked!');
    });

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });
});