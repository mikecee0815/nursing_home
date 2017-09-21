var express = require('express');
var router = express.Router();
var Resident = require('../models/resident');

/* GET /residents/:id. */
router.get('/:id', function(req, res, next) {
	
		var id = req.params.id;
	
Resident.findById(id,function(err,result){
		
		if (err) {
			console.log(err);	
		}

		res.render('show',{result:result});
		// res.send('This will display a single resident');
	});
 
});

module.exports = router;
