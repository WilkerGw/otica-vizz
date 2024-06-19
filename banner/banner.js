let slideIndex = 1;
const slides = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dots span');
let timer;

function showSlides() {
    clearTimeout(timer); // Clear any existing timer

    // Hide all slides and remove active class from dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove('active');
    }

    // Increment slide index and reset if out of bounds
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide and add the active class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');

    // Set the timer for the next slide
    timer = setTimeout(showSlides, 1000); // Change image every 3 seconds
}

// Initialize the slideshow
showSlides();

// Change slide when clicking next or previous buttons
function changeSlide(n) {
    clearTimeout(timer); // Clear any existing timer

    // Adjust slide index based on the direction
    slideIndex += n;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    } else if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the slide and set the timer to 10 seconds
    showCurrentSlide();
    timer = setTimeout(showSlides, 10000); // Set the timer to 10 seconds
}

// Show the specific slide based on the current index
function showCurrentSlide() {
    // Hide all slides and remove active class from dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove('active');
    }

    // Display the current slide and add the active class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');
}

// Go to a specific slide when clicking on dots
function currentSlide(n) {
    clearTimeout(timer); // Clear any existing timer

    // Set the current slide index
    slideIndex = n;

    // Show the slide and set the timer to 10 seconds
    showCurrentSlide();
    timer = setTimeout(showSlides, 10000); // Set the timer to 10 seconds
}

// Add event listeners to next and previous buttons
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

// Add event listeners to dots (if needed)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
});
