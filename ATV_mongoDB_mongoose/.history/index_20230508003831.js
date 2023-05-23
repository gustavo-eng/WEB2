const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const port = 5555
const app = express()


var mustacheExpress = require("mustache-express");
var engine = mustacheExpress();
app.engine("mustache", engine);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
//app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./helpers/mongo'))

const sportRoute = require("./control/EsportAPI")
const indexPage =  require("./routes/indexPage")

app.use("/", indexPage)
app.use("/books", require("./control/BookAPI"))
app.use("/sports", sportRoute)

app.listen(port, () =>  console.log(`Listenning in ${port} port  ...`))

module.exports = app

