// Get all elements with the class 'fade-in'
const fadeInElements = document.querySelectorAll('.fade-in');

// Function to check if an element is in view
function checkIfInView() {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.classList.add('visible'); // Add 'visible' class when in view
        }
    });
}

// Run checkIfInView on scroll and on page load
window.addEventListener('scroll', checkIfInView);
window.addEventListener('load', checkIfInView);

// Initial check
checkIfInView();