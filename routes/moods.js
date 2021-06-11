// PET ROUTES
let request = require('request')
var weatherArr = []


module.exports = (app) => {

    // INDEX PET => index.js
    // NEW PET
    app.get('/moods-create', (req, res) => {
        
     
        res.render('moods-create');
    });

    app.get('/', (req, res) => {
      res.render('moods-index');
    });
  
    // CREATE PET
    app.post('/moods-create', (req, res) => {

      let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=34.0953&lon=118.1270&exclude={part}&appid=0ac789480808bd58c4f6f76ca2a66e11'

      request(url, function (err, response, body) {
        if(err){
          console.log('error:', error);
        } else {
          let weather = JSON.parse(body)
          
          days = weather.daily
          for (i=0; i<days.length; i++){
            console.log(days[i]["dt"])
            console.log(days[i]['weather'][0]['description'])
            const dateObject = new Date(days[i]["dt"])
            const humanDateFormat = dateObject.toLocaleString() 
            console.log(dateObject.toLocaleString("en-US", {timeZoneName: "short"}))
          }
        }
      });
  
      res.redirect(`/`);


    })
}