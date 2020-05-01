var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('We have successfully deploy our first nodejs application, Soumya and Rocktim');
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
