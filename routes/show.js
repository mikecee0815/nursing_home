var express = require('express');
var router = express.Router();
var Resident = require('../models/resident');

/* GET /residents/:id. */
router.get('/:id', function(req, res, next) {
	
		// var id = req.params.id;
	
Resident.findById(req.params.id,function(err,data){
		
		if (err) {
			console.log(err);	
		}

		// res.render('show',{result:data});
		res.send('This will display a single resident');
		// res.json(data);
		// console.log(data);
	});
 
});

module.exports = router;
