var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/UserRegistration', function(req, res, next) {
  res.render('UserRegistration', { title: 'Express' });
});
module.exports = router;
