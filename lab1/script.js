<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-container {
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .login-container h2 {
            margin-bottom: 20px;
        }
        .login-container input {
            display: block;
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .login-container button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .login-container button:hover {
            background-color: #45a049;
        }
        .error-message {
            color: red;
            display: none;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
        <button onclick="login()">Login</button>
        <p id="error-message" class="error-message">Invalid username or password</p>
    </div>

    <script>
        // User credentials for demo purposes
        const validUsername = "admin";
        const validPassword = "password123";

        function login() {
            // Get input values
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            
            // Get error message element
            const errorMessage = document.getElementById("error-message");

            // Check credentials
            if (username === validUsername && password === validPassword) {
                alert("Login successful!");
                // Redirect to another page or do something else
                window.location.href = "success.html"; // Example redirect
            } else {
                errorMessage.style.display = "block";
            }
        }
    </script>
</body>
</html>
