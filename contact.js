// Get the form element
const form = document.querySelector('form');

// Add event listener to form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object with form data
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Optionally, you can reset the form after submission
    form.reset();
    // Provide a confirmation message to the user
    alert('Your message has been sent!');


});
