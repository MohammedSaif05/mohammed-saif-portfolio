// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Typed.js initialization
new Typed('#typed-text', {
    strings: ['Web Developer', 'Frontend Developer', 'UI/UX Designer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Theme toggler
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.setAttribute('data-theme',
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
