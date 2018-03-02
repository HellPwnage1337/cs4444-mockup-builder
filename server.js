const express = require('express');
const morgan  = require('morgan');
const path    = require('path');

const PORT = process.env.PORT || 3000;

// route /mockups to static directory /output
var router = express.Router();
router.use(express.static(path.join(__dirname, '/output')));

// use middleware (including router)
var app = express();
app.use(morgan('dev'))
app.use('/mockups', router);

// redirect GET / to GET /mockups
app.get('/', (req, res) => res.redirect('/mockups'));

// listen on previously-defined PORT
app.listen(PORT, () => console.log('server listening on port', PORT));
