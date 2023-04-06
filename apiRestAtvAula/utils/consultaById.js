function consultaById(data, id) {
    
    console.log(`elemento encontrado dentro da funcao utils com o id ${id} passado por parametro `)
    console.log(data.find(el => el.id === id))

    let resultado =  data.find(el => el.id === id)

    return resultado ? resultado : null
}

module.exports = consultaById ; 
