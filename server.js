// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
var targetNumber = 10;

app.get('/', function (req, res) {
  res.sendFile('views/index.html', { root: __dirname});
});

app.get('/pickanumber', function (req, res) {
  var x = req.query.number;
  if (x>targetNumber) {
    res.send("Too high!")
  }
  else if (x<targetNumber) {
    res.send("Too low!")
  }
  else res.send("Nailed it!")
})

// Gallery View Route


// The Number Guessing Game
// app.post('/pickanumber', function numbersCreate(req, res) {
//   var number= req.body.number;
//   // albums.push(newAlbum);
//   // res.json(albums)
// })

// Gallery


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
