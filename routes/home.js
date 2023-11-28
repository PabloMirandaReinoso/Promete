
var express = require('express');
var router = express.Router();
var home  = require('../app/controllers/home.js');

// define the home page route
router.get( '/', home.Default);
module.exports = router
