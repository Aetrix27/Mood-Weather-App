// PET ROUTES
var weather = require('openweather-apis');
var weatherArr = []

module.exports = (app) => {

    // INDEX PET => index.js
    // NEW PET
    app.get('/moods-show', (req, res) => {
        
      weather.setLang('it');

      // set city by name
      weather.setCity('Los Angeles');

      // 'metric'  'internal'  'imperial'
      weather.setUnits('metric');

      // check http://openweathermap.org/appid#get for get the APPID
      weather.setAPPID('0ac789480808bd58c4f6f76ca2a66e11');
        
      // get the Temperature  
      weather.getTemperature(function(err, temp){
        console.log(temp);
      });
        res.render('moods-show');
    });

    app.get('/', (req, res) => {
      res.render('moods-show');
    });
  
    // CREATE PET
    app.post('/moods-show', (req, res) => {
      // get the Temperature  
      weather.getTemperature(function(err, temp){
        weatherArr.append(temp)
        console.log(weatherArr)
      });

    })
}