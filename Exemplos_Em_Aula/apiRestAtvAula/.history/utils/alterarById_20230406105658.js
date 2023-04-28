function alterarById(data, id) {
   let objJSON =  data.find(el => el.id === id)
   console.log('Objeto JSON dentro de alterarById --> ')
   console.log(objJSON)
   return objJSON
}


module.exports = alterarById ; 