import express from 'express';
import path from 'path';
import compression from 'compresson';

const app = express();

app.use(express.static(__dirname));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


const PORT = process.env.port || 8080;

app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});
