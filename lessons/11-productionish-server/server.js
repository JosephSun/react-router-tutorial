const express = require('express')
const path = require('path')
var compression = require('compression')

var app = express()
// must be first!
app.use(compression())

app.use(express.static(__dirname, 'public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const PORT = process.env.port || 8080;

app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});
