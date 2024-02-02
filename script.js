// script.js

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector('.content p');

    const oppenheimerQuotes = [
        "I am become Death, the destroyer of worlds.",
        "The release of atomic energy has not created a new problem. It has merely made more urgent the necessity of solving an existing one.",
        "Now I am become Death, the shatterer of worlds.",
        "It is not the weapons that are dangerous; it is the nature of the people who wield them.",
        "The physicists have known sin; and this is a knowledge which they cannot lose."
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * oppenheimerQuotes.length);
        return oppenheimerQuotes[randomIndex];
    }

    function applyOppenheimerEffect() {
        textElement.textContent = getRandomQuote();
        textElement.style.color = getRandomColor();
        textElement.classList.add('scary-animation');
        setTimeout(() => {
            textElement.classList.remove('scary-animation');
        }, 1000);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Apply Oppenheimer effect on page load
    applyOppenheimerEffect();

    // Change text and color with scary animation on click
    textElement.addEventListener("click", applyOppenheimerEffect);
});
