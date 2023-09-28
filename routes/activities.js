var express = require('express');
var router = express.Router();
var promesas = require('../app/controllers/activities.js');

router.get('/today', promesas.Today);
router.get('/prev', promesas.Prev);
router.get('/next', promesas.Next);

router.get('/details', promesas.Details);
router.get('/urgent', promesas.Urgent);
router.get('/week', promesas.Week);
router.get('/activity/:id', promesas.Activity);

router.post('/save', promesas.Save);
module.exports = router
