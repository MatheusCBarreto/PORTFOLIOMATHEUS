const express = require('express');
const app = express();
const router = require('./src/routes/routes');

app.use(express.static('public'));

app.use('/', router);

app.listen(8080, () => {
  console.log('App funcionando!');
});
