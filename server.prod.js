var express = require('express');
var path = require('path');

express().use(express.static(path.join(__dirname, 'static')))
  .get('*', function (req, res) {
    res.sendFile('./index.html', {
      root: path.join(__dirname, './')
    });
  }).listen(3000, function (err) {
    if (err) { console.log(err) };
    console.log('Listening at localhost:3000');
  });
