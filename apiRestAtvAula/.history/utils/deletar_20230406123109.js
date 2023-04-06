
const consultaById = require("./consultaById")

function deletar(dados,id) {
    console.log(' ----  dentro da funcao deletar --- obj antes de deletador ->')
    console.log(dados)
    console.log('---- Depois de ser  DELETADO')
    const  data = [] 
    if(consultaById(dados, id)) {
        data = dados.splice(id, 1) 
    } else  {
        data = 'usuario nao existe'  
    }
    return data
}
    
module.exports = deletar ; 


// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]