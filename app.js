var routes=require('./config/routes.js');
var config  = require('./config/environ');
var constant = require('./config/constants');
var path = require('path');

var express = require('express');
var app       = express();
var constants = require('constants');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var serveIndex = require('serve-index');
var nocache = require('nocache')
var now = new Date();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//set up our express application
app.use(morgan('dev')); 
// log every request to the console

app.use(cookieParser()); 
// read cookies (needed for auth)

//view engine setup
app.use(express.static(path.join(__dirname, 'public')));	
app.set('views', path.join(__dirname, 'app/views'));	
app.set('view engine', 'ejs');
app.use('/css',serveIndex(__dirname + '/public/css'));	
app.use('/js',serveIndex(__dirname + '/public/js'));
app.use(nocache());
app.use(routes);

app.listen(config.port,function(){console.log('Node on ' + config.port)});
//catch 404 and forward to error handler
/*
app.use
(function (req, res, next)
{
 res.status(404).render
  ('404'
   ,{title: "Sorry, page not found"
   , session: req.sessionbo}
  );
}
);

app.use
(function (req, res, next) 
{
 res.status(500).render
  ('500'
  , {title: "Sorry, Internal Server error"}
  );
});
*/
exports = module.exports = app;
