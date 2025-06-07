// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('fade-out');
    }, 1500);
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});