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

app.get('/', function (req, res) {
  res.sendFile('views/index.html', { root: __dirname});
});

// Gallery View Route
app.get('/art-gallery', function (req, res) {
  res.sendFile('views/art-gallery.html', { root: __dirname});
});

// The Number Guessing Game
var targetNumber = 10;

app.get('/pick-a-number', function (req, res) {
  var x = parseInt(req.query.number);
  if (x>targetNumber) {
    res.send("Too high!")
  }
  else if (x<targetNumber) {
    res.send("Too low!")
  }
  else res.send("Nailed it!")
})

app.post('/pick-a-number', function (req, res) {
  targetNumber = parseInt(req.body.number);
  res.send("updated!");
  //console.log(targetNumber);
})

// Gallery

var artworks = [
  {
    title:123,
    artist:123,
    description:123
  }
];

app.get('/artworks', function (req, res) {
  res.json(artworks);
});

app.post('/artworks', function artworkCreate(req, res) {
  var title = res.body.title;
  var artist = res.body.artist;
  var description = res.body.description;
  var newArtwork = { title:title, artist:artist, description:description };
  artworks.push(newArtwork);
  res.json(artworks);
});

// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
