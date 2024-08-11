document.addEventListener('DOMContentLoaded', () => {

    // Fade-in on page load
    const mainContent = document.querySelector('.container');
    mainContent.classList.add('fade-in-on-load');

    // Example animation: Fade in elements on scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -200px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Particle animation setup
    const container = document.querySelector('.circle-container');
    const particleCount = 30; // Number of particles

    for (let i = 0; i < particleCount; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Randomize size and initial position
        const size = Math.random() * 10 + 5; // Size between 5px and 10px
        const startPositionX = Math.random() * 100; // Random X position
        const startPositionY = Math.random() * 100; // Random Y position

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.top = `${startPositionY}vh`;
        circle.style.left = `${startPositionX}vw`;

        // Apply random animation delay and duration
        const duration = Math.random() * 10 + 10 + 's';
        circle.style.animationDuration = duration;
        
        container.appendChild(circle);
    }

    // Typing animation setup
    const typingText = document.getElementById("typing-text");
    const textArray = [
        "A Full-Stack Developer.",
        "An Innovator.",
        "An Aspiring Software Engineer!"
    ];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let currentString = "";
    let isDeleting = false; // Track if we're deleting

    function type() {
        if (!isDeleting) {
            // Typing characters
            if (currentCharIndex < textArray[currentTextIndex].length) {
                currentString += textArray[currentTextIndex].charAt(currentCharIndex);
                typingText.textContent = currentString;
                currentCharIndex++;
                setTimeout(type, 150);
            } else {
                // Start deleting after a delay
                isDeleting = true;
                setTimeout(type, 1500);
            }
        } else {
            // Deleting characters
            if (currentCharIndex > 0) {
                currentString = currentString.slice(0, -1);
                typingText.textContent = currentString;
                currentCharIndex--;
                setTimeout(type, 150);
            } else {
                // Move to next word
                isDeleting = false;
                currentTextIndex++;
                if (currentTextIndex >= textArray.length) {
                    currentTextIndex = 0; // Loop back to first word
                }
                setTimeout(type, 500);
            }
        }
    }

    type();
});