var express = require('express');
var path = require('path');
const passport = require('passport')
const session  = require('express-session')
require('./auth')(passport);

const port = 3333
//Rotas
var indexRouter = require('./routes/index');

var app = express();

var mustacheExpress = require("mustache-express"); //instanciou o mustache 
var engine = mustacheExpress(); 

app.engine("mustache", engine); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache'); 
//Midlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Config dos arquivos estaticos da pasta public 
app.use(express.static(path.join(__dirname, 'public')))



app.use(session({
    secret: '123',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge : 2 * 60 * 1000 }

    //store armazena no servidor 

}))


app.use(passport.initialize());
app.use(passport.session())

app.use('/',indexRouter); // Linka com rotas 

app.listen(port, () => console.log(`Server is running in ${port} port`))


module.exports = app;