function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageName).classList.add('active');
    
    // Update nav active state
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById('nav-' + pageName).classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add click handlers to calendar days
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.calendar-day.has-event').forEach(day => {
        day.addEventListener('click', () => {
            day.style.transform = 'scale(0.95)';
            setTimeout(() => {
                day.style.transform = '';
            }, 100);
        });
    });
});
