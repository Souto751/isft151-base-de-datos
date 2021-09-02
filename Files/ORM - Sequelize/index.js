const express = require('express');
const app = express();
const port = 3000;
require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./routes');


app.use('/orm', routes);

// Inizializo la app
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});