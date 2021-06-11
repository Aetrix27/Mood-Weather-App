// PET ROUTES
module.exports = (app) => {

    // INDEX PET => index.js
    // NEW PET
    app.get('/pets/new', (req, res) => {
      res.render('pets-new');
    });
  
    // CREATE PET
    app.post('/pets', upload.single('avatar'), (req, res, next) => {
      var pet = new Pet(req.body);
      pet.save(function (err) {
        if (req.file) {
          // Upload the images
          client.upload(req.file.path, {}, function (err, versions, meta) {
            if (err) { return res.status(400).send({ err: err }) };
  
            // Pop off the -square and -standard and just use the one URL to grab the image
            versions.forEach(function (image) {
              var urlArray = image.url.split('-');
              urlArray.pop();
              var url = urlArray.join('-');
              pet.avatarUrl = url;
              pet.save();
            });
  
            res.send({ pet: pet });
          });
        } else {
          res.send({ pet: pet });
        }
      })
    })