var config  = require('./config/environ');
var express = require('express');

var app       = express();
//var multer    = require('multer');
var constants = require('constants');
var constant = require('./config/constants');

//var passport = require('passport');
//var flash = require('connect-flash');
var path = require('path');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
//var dateFormat = require('dateformat');

var serveIndex = require('serve-index');
var now = new Date();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
       {extended: true}));

//require('./config/passport')(passport);
// pass passport for configuration

//set up our express application
app.use(morgan('dev')); 
// log every request to the console

app.use(cookieParser()); 
// read cookies (needed for auth)

app.use(bodyParser()); 
// get information from html forms

//view engine setup
app.use(express.static(path.join
	(__dirname, 'public')));
	
app.set('views', path.join
	(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use('/css',serveIndex
	(__dirname + '/public/css'));
app.use('/js',serveIndex
	(__dirname + '/public/js'));

// set up ejs for templating

console.log(__dirname);

//app.use(session({
//    secret: 'I Love India...',
//    resave: true,
//    saveUninitialized: true
//}));

//app.use(passport.initialize());
//app.use(passport.session());

// persistent login sessions
//app.use(flash());

// use connect-flash for flash 
// messages stored in session

//
var nocache = require('nocache')
app.use(nocache());

// routes
var routes=require('./config/routes.js');
app.use(routes);
// load our routes

app.listen(config.port,function()
{console.log(config.port)});
console.log('Node on ' + config.port);

//catch 404 and forward to error handler
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
  ('404'
  , {title: "Sorry, page not found"}
  );
});
exports = module.exports = app;
