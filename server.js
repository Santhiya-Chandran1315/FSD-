// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Serve static files (like index.html)
app.use(express.static('public'));

// Define a route to handle form submissions
app.post('/submit', (req, res) => {
    const name = req.body.name;
    res.send(`Hello, ${name}! Your form was submitted successfully.`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
