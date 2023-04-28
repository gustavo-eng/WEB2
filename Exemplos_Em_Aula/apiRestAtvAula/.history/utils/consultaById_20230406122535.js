function consultaById(data, id) {
    
    console.log(`elemento encontrado dentro da funcao utils com o id ${id} passado por parametro `)
    console.log(data.find(el => el.id === id))
     
    // if (data.splice(id, 0)) {
    //     return data.find(el => el.id === id)
    // } else {
    //     return ` Nao existe usuario com o id ${id}`
    // }
    let resultado =  data.find(el => el.id === id)

    return resultado ? resultado : 'Nao existe usuario com esse ID '
}


module.exports = consultaById ; 
