
function playVideo(CrimsonAlpine) {
    var video = document.getElementById(CrimsonAlpine);
    video.play();
}

function playVideo(UmbrellaFLLFFL) {
    var video = document.getElementById(UmbrellaFLLFFL);
    video.play();
}

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll logic
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to detect when an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add the pop-up animation class when the element is in the viewport
    function addPopUpAnimation() {
        const sections = document.querySelectorAll('.home, .About, .Animations');
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('pop-up-animation');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', addPopUpAnimation);
    window.addEventListener('load', addPopUpAnimation);
});