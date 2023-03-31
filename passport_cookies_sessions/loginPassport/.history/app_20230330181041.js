var express = require('express');
var path = require('path');
const port = 5555
//Rotas
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');



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

app.use('/',indexRouter); // Linka com rotas 

app.listen(port, () => console.log(`Server is running in ${port} port`))


module.exports = app;