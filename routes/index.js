var express = require('express');
var router = express.Router();
var Resident = require('../models/resident');

/* GET home page. */
router.get('/', function(req, res, next) {

	Resident.find({},function(err,results){
		if (err) {
			console.log(err);	
		}
		res.render('index',{results:results});
	});
 
  //res.send('This will display all residents');
});

module.exports = router;