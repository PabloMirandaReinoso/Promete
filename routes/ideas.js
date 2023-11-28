var express = require('express');
var router = express.Router();
var promesas = require('../app/controllers/ideas.js');

router.get('/Active', promesas.Active);

router.get('/Idea/:id', promesas.Idea);
router.post('/Save', promesas.Save);
module.exports = router
