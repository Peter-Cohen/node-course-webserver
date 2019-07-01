const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Homepage',
    welcomeMessage: 'Peter is heel lief. En mooi...',
    currentYear: new Date().getFullYear(),
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear(),  
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));

