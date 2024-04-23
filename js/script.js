

window.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.nav');
        if (window.scrollY > 0) { // Check if user has scrolled down
            navbar.classList.add('navbar-white-bg'); // Apply class to fade background to white
        } 
        else {
            
            navbar.classList.remove('navbar-white-bg'); // Remove class if user scrolls back to top
        }
    });
})