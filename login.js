// login.js
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple username and password check
    const validUsername = 'user123';
    const validPassword = 'password123';

    // Error message element
    const errorMessage = document.getElementById('error-message');

    if (username === validUsername && password === validPassword) {
        // Simulate successful login (you can redirect or show a message here)
        alert('Login successful!');
    } else {
        // Show error message if credentials are incorrect
        errorMessage.textContent = 'Incorrect username or password. Please try again.';
        errorMessage.style.display = 'block';
    }
});
