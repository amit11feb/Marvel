var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs  = require('express-handlebars');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var propertyRouter = require('./routes/property');

var cors= require('cors');
var app = express();

app.use(cors({
  origin:['http://localhost:4401','http://127.0.0.1:4401'],
  credentials:true
}));

var mongoose =require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/marvel');

//passport
var passport = require('passport');
var session = require('express-session');
 app.use(session({
  name:'myname.sid',
  resave:false,
  saveUninitialized:false,
  secret:'secret',
  cookie:{
    maxAge:36000000,
    httpOnly:false,
    secure:false
  } 
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

 

 var hbs = exphbs.create({ /* config */ });
 app.set('views', path.join(__dirname, 'views'));

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// view engine setup
// app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/property', propertyRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
