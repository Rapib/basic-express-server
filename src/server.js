'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger');
const validaor = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');


app.use(cors());

const data = { name: "" };


app.use(logger);



app.get('/person', validaor, (request, response, next) => {
  data.name=request.query.name;
  response.status(200).json(data);
});

app.use('*', error404);
app.use(error500);




module.exports = {
  app,
  start: (port) => app.listen(port, () => {
    console.log(`${port} is listening`);
  }),
};

