const express = require('express') ; 
const app = express();  

const port = 3333 ; 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const mainRouter     = require('./router/main') ; 
const consultaRouter = require('./router/consulta') ; 
const alterarRouter  = require('./router/alterar') ; 
const deletarRouter  = require('./router/deletar')  ; 


app.use("/", mainRouter);
app.use("/consulta", consultaRouter);
app.use("/alterar", alterarRouter);
app.use("/deletar", deletarRouter);

app.listen(port, () => {
    console.log(`Server is running in ${port} port`) ; 
})
 