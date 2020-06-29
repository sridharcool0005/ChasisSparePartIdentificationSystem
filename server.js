require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const authentication = require('./routes/authentication.router');
const spareParts = require('./routes/index.router');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
const path=require('path');
app.use(passport.initialize());
app.use('/spareParts', spareParts);
app.use('/auth', authentication);
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/dist/index.html'))
  });
// start server
app.listen(process.env.PORT || 5000, () => console.log(`Server started`));