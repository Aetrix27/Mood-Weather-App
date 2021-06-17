// ROUTES
let request = require('request')
require('dotenv').config()

var weatherMoodArr = []
var selectedDate = ""
var mood = ""
var dayWeather = ""


module.exports = (app) => {
    app.get('/moods-create', (req, res) => {  
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=34.0953&lon=118.1270&exclude={part}&appid=${process.env.API_KEY}`

        request(url, function (err, response, body) {
          if(err){
            console.log('error:', error);
          } else {
            var weather = JSON.parse(body)
            
            days = weather.daily
            for (i=0; i<days.length; i++){
              console.log(days[i]['weather'][0]['description'])
              var dateObject = new Date(days[i]["dt"]*1000)
              mnth=dateObject.toLocaleString("en-US", {month: "numeric"})
              dy=dateObject.toLocaleString("en-US", {day: "numeric"}) 
              yr=dateObject.toLocaleString("en-US", {year: "numeric"})
              console.log(mnth+"/"+dy+"/"+yr)
              var formattedDate=mnth+"/"+dy+"/"+yr
              if(selectedDate == formattedDate){
                console.log("THEY ARE THE SAME")
                dayWeather = days[i]['weather'][0]['description']
                res.render('moods-create', {dayWeather});
              }
            }

          }
        });
    });

    app.get('/', (req, res) => {
      res.render('moods-index', {weatherMoodArr});
    });

    app.post('/', (req, res) => {
      console.log(req.body.date)
      selectedDate = req.body.date

      res.redirect(`/moods-create`);
    });

    // CREATE mood
    app.post('/moods-create', (req, res) => {
      mood = req.body.moods
      weatherMoodArr.push([mood, dayWeather, selectedDate])

      //res.send()
      res.redirect(`/`);


    })
}