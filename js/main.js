document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for in-page navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
                history.replaceState(null, '', targetId);
            }
        });
    });

    // Keep the footer year current
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
});
