var express  = require('express');
var router   = express.Router();
var home     = require('../routes/home');
var acti     = require('../routes/activities');

 router.use('/',home);
 router.use('/activities',acti);
 
module.exports = router

