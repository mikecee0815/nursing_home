
var mongoose = require('mongoose');

// 1: create  resident schema
var residentSchema = mongoose.Schema({
	name: String,
	age: Number,
	gender:String
});

// 2: Make a resident model and glue it to the schema
module.exports = mongoose.model("Resident", residentSchema );