// PET ROUTES
let request = require('request')
var moodArr = []
var weatherArr = []
var weatherMoodArr = []
var selectedDate = ""


module.exports = (app) => {
    app.get('/moods-create', (req, res) => {  
     
        res.render('moods-create', {weatherMoodArr});
    });

    app.get('/', (req, res) => {
      res.render('moods-index', {weatherMoodArr});
    });

    app.post('/', (req, res) => {
      console.log(req.body.date)
      selectedDate = req.body.date

      res.redirect(`/moods-create`);
    });

    // CREATE PET
    app.post('/moods-create', (req, res) => {

      let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=34.0953&lon=118.1270&exclude={part}&appid=0ac789480808bd58c4f6f76ca2a66e11'

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
            }
          }

        }
      });

      weatherMoodArr.push(23432)
      //res.send()
      res.redirect(`/`);


    })
}