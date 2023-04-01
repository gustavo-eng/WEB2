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

function authenticationMiddleware(req, res, next) {
  if(req.isAuthenticated()) {
    return next(); // next() eh a proxima funcao na pilha de middlewares no express
  } else {
    res.redirect('/login')
  }
}


//app.use(authenticationMiddleware); NAO PODE FAZER  ISSO, PQ SE NAO TODAS AS ROTAS DA APLICACAO SERIAM SEGURAS E PRIVADAS 
// mas NAO PODE SER TODAS PQ O LOGIN PRECISA SER PUBLICO 

var logoutRouter = require('./routes/logout');
var salvanomeRouter = require('./routes/salvanome');
var intranetRouter = require('./routes/intranet');
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
  secret: '123456789', 
  resave: false, // se a cada requisicao eu tenho que salvar ou nao a SESSAO 
  saveUninitialized: false, // se eu devo ou nao, salvar sessoes anonimas 
  cookie: {maxAge: 3 * 60 * 1000} // duracao do cookie . (2 min) 
}));

// secret  vai ser  usado para algumas criptografias internas e quanto tempo de vida o cookie vai ter (e consequentemente a sessão).

app.use(passport.initialize());
app.use(passport.session());



const loginControl = require('./controllers/loginCookie');


// alterar 31/03/2023
app.use('/login',loginControl ,loginRouter);
app.use('/users',authenticationMiddleware , usersRouter);
app.use('/intranet', authenticationMiddleware, intranetRouter);
app.use('/salvanome', authenticationMiddleware, salvanomeRouter);
app.use('/logout', logoutRouter);

app.use('/', loginRouter); // alterar esse 
 
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
