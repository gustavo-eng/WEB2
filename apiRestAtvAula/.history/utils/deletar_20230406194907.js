
const consultaById = require("./consultaById")

function deletar(dados,id) {
    console.log(' ----  dentro da funcao deletar --- obj antes de deletador ->')
    console.log(dados)
    console.log('---- Depois de ser  DELETADO')
    if(consultaById(dados, id) !== null) {
        //const data = dados.splice(id, 1) 
        const data = dados.splice(consultaById(dados, id).id, 1) 
        console.log('============= Item deletado dentro da funcao deletar() =============')
        console.log(data)
        return data
    } else {
        return null  
    }
}
    
module.exports = deletar ; 

