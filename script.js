document.addEventListener('DOMContentLoaded', () => {
    
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
    const particleCount = 50; // Number of particles

    for (let i = 0; i < particleCount; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Randomize size and initial position
        const size = Math.random() * 10 + 5; // Size between 5px and 15px
        const startPositionX = Math.random() * 100; // Random X position
        const startPositionY = Math.random() * 100; // Random Y position

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.top = `${startPositionY}vh`;
        circle.style.left = `${startPositionX}vw`;

        // Apply random animation delay and duration
        const duration = Math.random() * 10 + 5 + 's';
        circle.style.animationDuration = duration;
        
        container.appendChild(circle);
    }
});