var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Dirk Simple app for the Building Applications Lab!\n');
});

app.listen(8080, function () {
  console.log('Dirk Simple app for the Building Applications Lab!');
});

