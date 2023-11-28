var express  = require('express');
var router   = express.Router();
var home     = require('../routes/home.js');
var acti     = require('../routes/activities.js');
var ideas     = require('../routes/ideas.js');

 router.use('/',home);
 router.use('/activities',acti);
 router.use('/ideas',ideas);
 
module.exports = router

