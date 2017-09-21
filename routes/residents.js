var express = require('express');
var router = express.Router();

/* GET /residents listing. */
router.get('/', function(req, res, next) {
  res.render('residents');
  res.send('This will display all residents');
});

module.exports = router;
