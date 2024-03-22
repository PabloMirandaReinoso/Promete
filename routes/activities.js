var express = require('express');
var router = express.Router();
var promesas = require('../app/controllers/activities.js');

router.get('/actual', [promesas.Auth,promesas.Actual]);
router.get('/previous', [promesas.Auth,promesas.Previous]);
router.get('/next', [promesas.Auth,promesas.Next]);

router.get('/today', [promesas.Auth,promesas.Today]);
router.get('/pending', [promesas.Auth,promesas.Pending]);
router.get('/week', [promesas.Auth,promesas.Week]);

router.get('/activity/:id', [promesas.Auth,promesas.Activity]);
router.post('/save', [promesas.Auth,promesas.Save]);
router.post('/search', [promesas.Auth,promesas.Search]);

module.exports = router
