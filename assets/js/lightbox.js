const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".post-detail img")
images.forEach(image => {
    image.addEventListener('click', e=> {
        // Add class active to lightbox div
        lightbox.classList.add("active")
        // Create img element
        const img = document.createElement("img")
        // Add clicked image to img element
        img.src = image.src;
        // Remove first child if there is any
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        // Add img to lightbox div
        lightbox.appendChild(img);
    });
});

// Remove active lightbox
lightbox.addEventListener("click", e => {
    // remove 
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove("active")
});
