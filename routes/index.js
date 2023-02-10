const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const users = await User.find({});
  res.json({ users: users });
});

module.exports = router;
