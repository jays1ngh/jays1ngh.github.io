const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li, #theme-mode-icon, #search-icon')
    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 500ms ease forwards ${index / 6 + .05}s`;
            }
        });

        // Burger animation
        burger.classList.toggle(`toggle-burger`);
    });
}

navSlide();


// Search

const searchBtn = document.querySelector("#search-icon");
const searchBox = document.querySelector("#search-fullscreen");
const searchCloseBtn = document.querySelector("#search-close-btn");

searchCloseBtn.addEventListener("click", () => {
    searchBox.classList.remove('active');
});

searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle('active');
    // focus on search box
    document.getElementById("search-box1").focus();
});