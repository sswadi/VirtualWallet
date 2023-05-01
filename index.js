const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const user = require('./models/user');

//setting up port and calling the express
const port = process.env.PORT || 8000;
const app = express();


//setting up view/ejs template
app.use(expressLayouts);
// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// static files
app.use(express.static('assets'));
app.use('/css', express.static(__dirname + 'assets/css'));
app.use('/js', express.static(__dirname + 'assets/js'));
app.use('/img', express.static(__dirname + 'assets/img'));

// use express router
// app.use('/', require('./routes'));







app.listen(port, ()=> console.log(`Listening to port ${port}`));