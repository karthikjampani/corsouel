
    const slides = document.querySelectorAll(".carousel-slide");
    const btnPrev = document.getElementById("btim1");
    const btnNext = document.getElementById("btim2");

    let currentIndex = 0;

    // Set initial position
    updateCarousel();

    btnNext.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    btnPrev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            if (index === currentIndex) {
                slide.classList.add("active");
            }
        });
    }
