document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').replace('.html', '');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
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
});