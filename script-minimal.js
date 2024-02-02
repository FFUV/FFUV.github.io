document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector('.content p');
    const buttonElement = document.querySelector('.sketchy-button');

    const ffuvQuotes = [
        "Coding is my superpower!",
        "In the world of science, curiosity knows no bounds.",
        "Exploring new realms, one line of code at a time.",
        "FFUV: Where technology meets creativity."
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * ffuvQuotes.length);
        return ffuvQuotes[randomIndex];
    }

    function applyFFUVEffect() {
        textElement.textContent = getRandomQuote();
        textElement.style.color = getRandomColor();
        textElement.classList.add('sketchy-animation');
        setTimeout(() => {
            textElement.classList.remove('sketchy-animation');
        }, 500);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Apply FFUV effect on page load
    applyFFUVEffect();

    // Change text and color with sketchy animation on click
    textElement.addEventListener("click", applyFFUVEffect);

    // Add sketchy effect to button
    buttonElement.addEventListener("mouseenter", () => {
        buttonElement.classList.add('sketchy-animation');
    });

    buttonElement.addEventListener("mouseleave", () => {
        buttonElement.classList.remove('sketchy-animation');
    });
});
