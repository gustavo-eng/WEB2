const express = require('express')
const app = express() 

const port = 3333

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const mainRouter = require('./router/main')
const consultaRouter = require('./router/consulta')
app.use("/", mainRouter);

app.use("/consulta", consultaRouter);

app.listen(port, () => {
    console.log(`Server is running in ${port} port`)
})
 