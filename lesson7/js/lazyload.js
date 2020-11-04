//Get all the images with data src attibute.



function preloadImage(images) {
    const src = images.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
}

const images = document.querySelectorAll("img[data-src]");


const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};


const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.targer);
            imgObserver.unobserve(entry.targer);
        }
    });
}, imgOptions);
images.forEach(images => {
    imgObserver.observe(images);
});