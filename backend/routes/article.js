'use strict'

var express = require('express');
var ArticleController = require('../controller/article')
var router = express.Router();

router.get('/test', ArticleController.test);

module.exports = router;