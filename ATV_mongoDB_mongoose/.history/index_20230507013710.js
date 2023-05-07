const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const port = 5555
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./helpers/mongo'))

app.use("/books", require("./control/BookAPI"))

app.listen(port, () => {
    console.log(`Listenning in ${port} port  ...`)
})