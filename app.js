const express = require('express');
const app = express();
const path = require('path');

// Set up the EJS templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
