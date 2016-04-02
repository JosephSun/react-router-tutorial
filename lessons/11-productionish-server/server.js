import express from 'express';
import path from 'path';
import compression from 'compresson';

const app = express();

app.use(express.static(__dirname));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
