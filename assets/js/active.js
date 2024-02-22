function toggleActiveClass() {
    var iconElements = document.querySelectorAll(".navbar-toggler-icon");
    var navbarToggler = document.querySelector(".navbar");

    iconElements.forEach(function (element) {
        element.classList.toggle("active");
    });
    navbarToggler.classList.toggle("active");

    var bodyElement = document.body;

    bodyElement.classList.toggle("canvas-open");
}
function countUp(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // Animation duration in milliseconds
    const increment = target / (duration / 10); // Calculate increment per 10ms

    let currentCount = 0;

    const timer = setInterval(function() {
        currentCount += increment;
        element.textContent = Math.ceil(currentCount); // Update text content

        if (currentCount >= target) {
            clearInterval(timer); // Stop the interval when target is reached
            element.textContent = target; // Ensure the final count is accurate
        }
    }, 10); // Run every 10 milliseconds
}

document.querySelectorAll('.counter').forEach(function(counter) {
    countUp(counter);
});

