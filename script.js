// Header scroll
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav
function toggleNav() {
    document.getElementById('nav').classList.toggle('open');
}

// Close nav on link click
document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('nav').classList.remove('open');
    });
});

// FAQ accordion
function toggleFaq(item) {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-a').classList.remove('open');
    });
    if (!isOpen) {
        item.classList.add('open');
        item.querySelector('.faq-a').classList.add('open');
    }
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
