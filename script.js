document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll logic
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);

            // If the link is not an external link (doesn't start with http), prevent the default behavior
            if (!this.href.startsWith('http')) {
                e.preventDefault();
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
