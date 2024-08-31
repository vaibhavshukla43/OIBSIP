// Function to register a new user
function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    // Check if user already exists
    if (localStorage.getItem(username)) {
        alert('Username already exists. Please try a different one.');
        return;
    }

    // Store the user credentials in local storage
    localStorage.setItem(username, password);
    alert('User registered successfully! You can now log in.');
}

// Function to login an existing user
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Retrieve the stored password for the username
    const storedPassword = localStorage.getItem(username);

    // Authenticate the user
    if (storedPassword === password) {
        alert('Login successful!');
        document.getElementById('secured-page').style.display = 'block';
        document.getElementById('register').style.display = 'none';
        document.getElementById('login').style.display = 'none';
    } else {
        alert('Invalid username or password.');
    }
}

// Function to logout the user
function logout() {
    document.getElementById('secured-page').style.display = 'none';
    document.getElementById('register').style.display = 'block';
    document.getElementById('login').style.display = 'block';
}
