// ui.js - Handling UI interactions like Scroll

document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('header');
    const scrollThreshold = 50; // Minimum scroll before hiding

    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Determine scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
            // Scrolling Down -> Hide
            header.classList.add('nav-hidden');
        } else {
            // Scrolling Up -> Show
            header.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
});
