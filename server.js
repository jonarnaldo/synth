const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');    // pull information from HTML POST (express4)
const port = 8080;

// configuration //
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(express.static('./client'))


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

// start app //
app.listen(port);
console.log("App listening on port " + port);
