const express = require('express');
const router = express.Router();
const User = require("../models/users.model");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.post('/authenticate', function(req, res, next) {
  const { password, username} = req.body;
  User.findOne({username, password}, (err, user) => {
    if (err) {
      res.status(400).send({msg: "error"});
    } else{
      if (user) {
        res.status(201).send(user);
      } else {
        res.status(404).send(user);
      }
    }
  });
});

router.post('/register', function(req, res, next) {
  const { firstName, lastName, password, username} = req.body;

  User.create({firstName, lastName, password, username}, function (err, user) {
    if (err) return handleError(err);
    res.status(200).send(user);
  });
});

module.exports = router;
