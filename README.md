# Feature Policy

This module adds a `Feature-Policy` http header.

# install

```
$ npm i node-feature-policy
```

# usage

```
const express = require('express');
const featurePolicy = require('node-feature-policy');
const app = express();

app.use(featurePolicy({
  "lazyload": "'none'",
  "document-write": "'none'",
  "sync-xhr": "'none'",
  "legacy-image-formats": "'none'",
}));
app.use(express.static('public'));
app.listen(3000);
```
