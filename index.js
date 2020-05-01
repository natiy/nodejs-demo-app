var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('We have successfully deploy our first nodejs application, Soumya and Rocktim you are the star and hope for the best');
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
