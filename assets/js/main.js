const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li, #theme-mode-icon')
    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 500ms ease forwards ${index / 3 + .05}s`;
            }
        });

        // Burger animation
        burger.classList.toggle(`toggle-burger`);
    });
}

navSlide();