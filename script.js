// script.js
// Add event listener to the button in the hero section
document.querySelector('#hero button').addEventListener('click', () => {
    // Add a fade-in effect to the projects section
    document.querySelector('#portfolio').style.opacity = 1;
    document.querySelector('#portfolio').style.transform = 'translateY(0)';
});

// Add event listener to the form submit button
document.querySelector('#contact button').addEventListener('click', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Get the input values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    // Validate the input values
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all the fields.');
    } else {
        // Send the form data to the server (replace with your own server-side code)
        console.log('Form submitted:', name, email, message);
    }
});

// Add a slide-in effect to the navigation menu
document.querySelector('header nav').addEventListener('mouseover', () => {
    document.querySelector('header nav').style.transform = 'translateX(0)';
});

document.querySelector('header nav').addEventListener('mouseout', () => {
    document.querySelector('header nav').style.transform = 'translateX(-100%)';
});