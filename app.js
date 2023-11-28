var routes=require('./config/routes.js');
var config  = require('./config/environ');
var constant = require('./config/constants');
var path = require('path');

var express = require('express');
var app       = express();
var constants = require('constants');
var morgan       = require('morgan');
//var cookieParser = require('cookie-parser');
var session = require('express-session');
var serveIndex = require('serve-index');
var now = new Date();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev')); 
//app.use(cookieParser()); 

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

//view engine setup
app.use(express.static(path.join(__dirname, 'public')));	
app.set('views', path.join(__dirname, 'app/views'));	
app.set('view engine', 'ejs');
app.use('/css',serveIndex(__dirname + '/public/css'));	
app.use('/js',serveIndex(__dirname + '/public/js'));
app.use(routes);

app.listen(config.port,function(){console.log('Node on ' + config.port)});
exports = module.exports = app;
