
var express = require('express');
var router = express.Router();
var home  = require('../app/controllers/site.js');

// define the home page route
router.get( '/', home.Default);
router.post( '/', home.Logon);
module.exports = router
