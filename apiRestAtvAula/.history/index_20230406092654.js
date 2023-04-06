const express = require('express')
const app = express() 

const port = 3333

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const mainRouter = require('./router/main')

app.use("/", mainRouter)ç


app.listen(port, () => {
    console.log(`Server is running in ${port} port`)
})
