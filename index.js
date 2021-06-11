const express = require('express');
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main'
  }));
  
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'handlebars');

