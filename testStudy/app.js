var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/tasks');
var loginRouter = require('./routes/login');

var app = express();

var mustacheExpress = require("mustache-express");
var engine = mustacheExpress();
app.engine("mustache", engine);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

//app.use(logger('dev'));

// require('./public/javascripts')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./helpers/mongo'))
// app.use(express.static("./public/javascripts"));
app.use('/', loginRouter);
app.use('/task', indexRouter);
app.use('/api/tasks', apiRouter);

//public\javascripts
//C:\Users\diasg\Desktop\UTFPR\web2\testStudy\public\javascripts
// catch 404 and forward to error handler
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
