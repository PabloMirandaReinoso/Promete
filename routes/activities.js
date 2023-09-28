
var express = require('express');
var router = express.Router();
var promesas = require('../app/controllers/activities.js');

// define the home page route
router.get('/today', promesas.Today);
router.get('/prev', promesas.Prev);
router.get('/next', promesas.Next);

router.get('/details', promesas.Details);
router.get('/urgent', promesas.Urgent);
router.get('/week', promesas.Week);

router.get('/activity', promesas.Activity);

router.get('/:Id', promesas.Traer);


router.post('/save', promesas.Save);
module.exports = router
