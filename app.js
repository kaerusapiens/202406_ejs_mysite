const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//By default, Express looks for a views directory in the root of your project for your view templates.
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});