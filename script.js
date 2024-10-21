let users = JSON.parse(localStorage.getItem('users')) || []; 

// Login
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", username);

        // Initialize vote history for the new user if not present
        let userVotesList = JSON.parse(localStorage.getItem("userVotes")) || {};
        if (!userVotesList[username]) {
            userVotesList[username] = []; 
            localStorage.setItem("userVotes", JSON.stringify(userVotesList));
        }

        alert("Login successful! Welcome, " + username);
        window.location.href = "dashboard.html"; 
    } else {
        alert("Invalid username or password!");
    }
});

// Registration
document.getElementById("registerForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const newUser = { username: username, password: password };
    users.push(newUser); 
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful! You can now log in.");
    window.location.href = "index.html";
});
