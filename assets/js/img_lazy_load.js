// Lazy load all images
const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        if (src) {
            entry.target.src = src;
            img.setAttribute('src', src);
            observer.disconnect();
        }     
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);


