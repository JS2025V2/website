// login.js

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Dummy condition for invalid login (replace with actual validation)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username !== 'admin' || password !== 'password') {
        // Show error message if invalid login
        document.getElementById('error-message').style.display = 'block';
    } else {
        // Redirect or perform login logic
        window.location.href = 'dashboard.html'; // Replace with actual redirect
    }
});
