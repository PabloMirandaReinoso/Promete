var express  = require('express');
var router   = express.Router();
var home     = require('../routes/home');
var prom     = require('../routes/promesas');

 router.use('/',home);
 router.use('/prom',prom);
 
module.exports = router

