var mongoose = require('mongoose');
var Resident = require('./models/resident');
var async = require('async');
var Data = [
	
	{
		name: "james floyd",
		age: 46,
		gender:"male"
	},

	{
		name: "roy  steele",
		age: 33,
		gender:"male"
	},

	{
		name: "kim lopez",
		age: 67,
		gender:"male"
	},	
];

function seedDB(){

	// Remove all residents
	Resident.remove({},function(err){
	
	if (err) {
		console.log("Error ocurred");
	}
		
		console.log("Data removed");
	});
	
	//seed data
	Data.forEach(function(seed){
		
		Resident.create(seed,function(err,resident){
			
			if (err) {
				console.log(err);
			} 

				console.log('1 resident added');
				//console.log(Resident.count);

		});
	});
};
module.exports =seedDB;