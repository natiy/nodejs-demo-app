var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('<h1>We have successfully deploy our first nodejs application using jenkins! and docker</h1>');
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
