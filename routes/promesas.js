
var express = require('express');
var router = express.Router();
var promesas = require
('../app/controllers/promesas.js');

// define the home page route
router.get('/:Id', promesas.Traer);
router.post('/', promesas.Guardar);
module.exports = router
