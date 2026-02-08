// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update nav active states
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    const navElement = document.getElementById('nav-' + pageId);
    if (navElement) navElement.classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    return false;
}