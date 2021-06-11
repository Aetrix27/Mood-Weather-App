const express = require('express');
const exphbs  = require('express-handlebars');
var weather = require('openweather-apis');
const app = express();
const path = require("path");
port = 3000

app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main'
  }));
  
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


require('./routes/moods.js')(app);

// TODO: Add each controller here, after all middleware is initialized.

// Start Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = app;


