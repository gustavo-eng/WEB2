var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// ------
const passport = require('passport');
const session = require('express-session') // dados da sessao do usuario q ficou logado em um banco ou na memoria do servidor
require('./auth')(passport) // modulo de autenticacao
// este export uma funcao que espera um objeto passport. 
 
/* 
Agora tem que configurar o express com a sessoa e o passport 
*/



var indexRouter = require('./routes/index'); // n da pra renderizar esse pq, ainda n tem nada 
var usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

var app = express();

// view engine setup
var mustacheExpress = require("mustache-express"); //instanciou o mustache 
var engine = mustacheExpress(); 

app.engine("mustache", engine)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// precisamos garantir que n vai acessar nenhuma rota sem bater na questao da autenticacao primeiro 
// esta sessao vai ser salva em memoria, se quiser colocar no banco do server, precisa configurar a store! 
app.use(session({ 
  secret: '123', 
  resave: false, // se a cada requisicao eu tenho que salvar ou nao a SESSAO 
  saveUninitialized: false, // se eu devo ou nao, salvar sessoes anonimas 
  cookie: {maxAge: 2 * 60 * 1000} // duracao do cookie  
}))




app.use('/login', loginRouter);
app.use('/users', usersRouter);
//app.use('/', indexRouter);
app.use('/', loginRouter);

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
