const express = require('express');
const hbs = require('hbs');
const path = require('path');
const fs = require('fs');

const app = express();

hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now} : ${req.method} : ${req.url}`;
  console.log(log);
  fs.appendFileSync('./log', `${log}\n`);
  next();
});

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Homepage',
    welcomeMessage: 'Peter is heel lief. En mooi...',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
