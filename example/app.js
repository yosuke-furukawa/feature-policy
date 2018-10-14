const express = require('express');
const featurePolicy = require('../index.js');
const app = express();

app.use(featurePolicy({
  // localhost:3000/syncxhr.html
  "sync-xhr": "'none'",
  // localhost:3000/document-write.html
  "document-write": "'none'",
  // localhost:3000/vertical-scroll.html
  "vertical-scroll": "'none'",
  "legacy-image-formats": "'none'",
}));
app.use(express.static('public'));
app.listen(3000);
