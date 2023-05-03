const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use("/books", require("./control/BookAPI"))
app.use("/disciplinas", require("./control/DisciplinaAPI"))

app.listen(3000, () => {
    console.log("Listenning...")
})




//https://www.luiztools.com.br/post/tutorial-de-crud-com-node-js-sequelize-e-mysql/