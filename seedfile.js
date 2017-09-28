var mongoose = require('mongoose');
var Resident = require('./models/resident');
var async = require('async');
var Data = [
	
	{
		name: "james floyd",
		age: 46,
		gender:"male",
		imageUrl:'https://d30y9cdsu7xlg0.cloudfront.net/png/5863-200.png'

	},

	{
		name: "roy  steele",
		age: 33,
		gender:"male",
		imageUrl:'https://d30y9cdsu7xlg0.cloudfront.net/png/5863-200.png'
	},

	{
		name: "bob doe",
		age: 67,
		gender:"male",
		imageUrl:'https://d30y9cdsu7xlg0.cloudfront.net/png/5863-200.png'
	},
	
	{
		name: "kim lopez",
		age: 67,
		gender:"female",
		imageUrl:'https://d30y9cdsu7xlg0.cloudfront.net/png/5863-200.png'
	},

	{

		name: "rob wang",
		age: 34,
		gender: "male",
		imageUrl: 'https://d30y9cdsu7xlg0.cloudfront.net/png/5863-200.png'
	},

	{

		name: "pam rosa",
		age: 47,
		gender:"female",
		imageUrl:'https://d30y9cdsu7xlg0.cloudfront.net/png/5863-200.png'
	},

	{

		name: "bo foo",
		age: 43,
		gender:"male",
		imageUrl:'https://d30y9cdsu7xlg0.cloudfront.net/png/5863-200.png'
	}
];

// function seedDB(){

// 	// Remove all residents
// 	Resident.remove({},function(err){
	
// 	if (err) {
// 		console.log("Error ocurred");
// 	}
		
// 		console.log("Data removed");
// 	});
	
// 	//seed data
// 	Data.forEach(function(seed){
		
// 		Resident.create(seed,function(err,resident){
			
// 			if (err) {
// 				console.log(err);
// 			} 

// 				console.log('1 resident added');
// 				//console.log(Resident.count);

// 		});
// 	});
// };

db.residents.insert(

	{
		name: "sally ford",
		age: 31,
		gender: "female",
		imageUrl: 'https://d30y9cdsu7xlg0.cloudfront.net/png/5863-200.png'

	}
	)
	
		
		

module.exports =seedDB;