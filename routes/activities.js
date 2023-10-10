var express = require('express');
var router = express.Router();
var promesas = require('../app/controllers/activities.js');

router.get('/actual', promesas.Actual);
router.get('/previous', promesas.Previous);
router.get('/next', promesas.Next);

router.get('/today', promesas.Today);
router.get('/pending', promesas.Pending);
router.get('/week', promesas.Week);

router.get('/activity/:id', promesas.Activity);
router.post('/save', promesas.Save);
module.exports = router
