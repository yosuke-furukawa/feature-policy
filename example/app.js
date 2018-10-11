const express = require('express');
const featurePolicy = require('../index.js');
const app = express();

app.use(featurePolicy({
  "lazyload": "'none'",
  "document-write": "'none'",
  "sync-xhr": "'none'",
  "legacy-image-formats": "'none'",
}));
app.use(express.static('public'));
app.listen(3000);
