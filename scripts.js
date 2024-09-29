// scripts.js

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const email = this.querySelector('input[placeholder="Your Email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Dynamic Theme Switching
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

// Interactive Project Modals
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Toggles the 'show' class
});
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        console.log('Project card clicked!'); // Debugging line
        modal.style.display = 'block';
    });
});
// Select all project cards
const projectCards = document.querySelectorAll('.project-card');

// Add event listener for each card
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        // Toggle the flip animation on click
        this.classList.toggle('is-flipped');
    });
});




