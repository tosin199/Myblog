var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var categoriesRouter = require('./routes/categories');
var commentsRouter = require('./routes/comments');
var advertisementsRouter = require('./routes/advertisements');
var subscriptionsRouter = require('./routes/subscriptions');
var postsRouter = require('./routes/posts');
var likeUnlikeRouter = require('./routes/likeUnlike');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/categories', categoriesRouter);
app.use('/comments', commentsRouter);
app.use('/advertisements', advertisementsRouter);
app.use('/subscriptions', subscriptionsRouter);
app.use('/posts', postsRouter);
app.use('/likeUnlike', likeUnlikeRouter);
app.use('/users', usersRouter);

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
