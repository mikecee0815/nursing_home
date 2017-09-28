var mongoose = require('mongoose');
var Resident = require('./models/resident');
var async = require('async');
var seeder = require('mongoose-seed');

// Data array containing seed data - documents organized by Model 
var data = [
    {
        'model': 'Resident',
        'documents': [
            {
                	"name": "james floyd",
		"age": 46,
		"gender":"male",
		"imageUrl":"https://d30y9cdsu7xlg0.cloudfront.net/png/5863-200.png"
            },
            {
            	"name": "roy  steele",
		"age": 33,
		"gender":"male",
		"imageUrl":"https://d30y9cdsu7xlg0.cloudfront.net/png/5863-200.png"
            },
            {
                	"name": "bob doe",
		"age": 67,
		"gender":"male",
		"imageUrl":'https://d30y9cdsu7xlg0.cloudfront.net/png/5863-200.png'
            }
        ]
    }
];
 
// Connect to MongoDB via Mongoose 
seeder.connect('mongodb://localhost/residents', function() {
 
    // Load Mongoose models 
    seeder.loadModels([
        
        './models/resident.js'
        
    ]);
 
    // Clear specified collections 
    seeder.clearModels(['residents'], function() {
 
        // Callback to populate DB once collections have been cleared 
        seeder.populateModels(data, function() {
            //seeder.disconnect(); 
        });
 
    });
});
 

	
		
		

module.exports =seeder;