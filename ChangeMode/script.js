// script.js
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Check the current theme and change button text accordingly
    if (body.classList.contains('dark-theme')) {
        toggleButton.textContent = 'Dark Mode';
    } else {
        toggleButton.textContent = 'Light Mode';
    }
});
S