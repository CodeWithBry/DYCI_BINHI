import { pagoda_paintings } from "./pageComponents.js";

const imageContainer = pagoda_paintings.querySelector(".images-container");
const images = imageContainer.querySelectorAll(".image");
const indicators = pagoda_paintings.querySelectorAll(".indicator");

// Create the observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = [...images].indexOf(entry.target);

                indicators.forEach((ind, i) => {
                    if (i === index) {
                        ind.classList.add("focused");
                        ind.classList.remove("not-focused");
                    } else {
                        ind.classList.add("not-focused");
                        ind.classList.remove("focused");
                    }
                });
            }
        });
    },
    {
        root: imageContainer, // observe visibility inside the scroll container
        threshold: 0.6       // image must be at least 60% visible
    }
);

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        const img = images[index];
        if (!img) return;

        // compute left relative to the scroll container
        const targetLeft = img.offsetLeft - imageContainer.offsetLeft;

        imageContainer.scrollTo({
            left: targetLeft,
            behavior: "smooth"
        });
    });
});


// Observe each image
images.forEach((img) => observer.observe(img));