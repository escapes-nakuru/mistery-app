const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('hola');
  res.render('index', { title: 'Nakuru team' });
});

module.exports = router;
