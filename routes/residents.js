var express = require('express');
var router = express.Router();
var Resident = require('../models/resident');

/* GET /residents listing. */
router.get('/', function(req, res, next) {

	Resident.find({},function(err,result){
		if (err) {
			console.log(err);	
		}
		res.render('residents',{results:result});
	});
 
  //res.send('This will display all residents');
});

module.exports = router;
