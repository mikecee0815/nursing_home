var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var  seedDB = require('./seedfile');
//var seeder = require('resident-seedfile');

// 1: add database library
var mongoose = require('mongoose');

var Resident = require('./models/resident');
mongoose.connect ("mongodb://localhost/residents");


//seedDB();


//import all routes
//var index = require('./routes/index');
//var users = require('./routes/users');
// var residents = require('./routes/residents');
//var show = require('./routes/show');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 2: connect to the database



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3002,function(){
// 	console.log(' server ready...');
});

//use these routes...
//app.use('/', index);
//app.use('/users', users);
// app.use('/residents', residents);
//app.use('residents/:id', show);

//  ROUTES
app.get('/', function(req, res) {
	Resident.find({},function(err,residents,next) {
		if (err) {
			console.log(err);	
		}
		// res.send("success");
		// res.json(residents);
		res.render('index',{results:residents});
	});
});

app.get('/residents/:id', function(req, res) {
	Resident.findById(req.params.id,function(err,resident,next) {	
		if (err) {
			console.log(err);	
		}

		// res.send("success");
		// res.json(resident);
		res.render('show',{resident:resident});
	});
});

// NEW  displays the form to add a new resident
app.get('/new', function(req,res){
	res.render('new');
	// res.send('test!!!');
});

// EDIT  displays the form to edit residents data
app.get('/residents/:id/edit', function(req,res){

		//res.render('edit');
		res.send('edit test!!!');	
	
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
