const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParser.json());

const search = require('./routes/api/search');
app.use('/api/search', search);

module.exports = app;