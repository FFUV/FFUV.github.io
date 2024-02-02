document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector('.content p');
    const buttonElement = document.querySelector('.sketchy-button');

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
        textElement.classList.add('sketchy-border');
        setTimeout(() => {
            textElement.classList.remove('sketchy-border');
        }, 500);
    }

    // Apply Oppenheimer effect on page load
    applyOppenheimerEffect();

    // Change text with sketchy border on click
    textElement.addEventListener("click", applyOppenheimerEffect);

    // Add sketchy effect to button
    buttonElement.addEventListener("mouseenter", () => {
        buttonElement.classList.add('sketchy-border');
    });

    buttonElement.addEventListener("mouseleave", () => {
        buttonElement.classList.remove('sketchy-border');
    });
});
