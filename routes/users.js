var express = require('express');
var router = express.Router();
var async = require('async');
var Resident = require('../models/resident');
/* GET users listing. */
router.get('/:id', function(req, res, next) {

  
	Resident.findById(req.params.id , function(err,resident) {
		
		if (err) {
			console.log(err);	
		}

		// res.json(resident);
		res.render('show',{result:resident});
	});

});

module.exports = router;
