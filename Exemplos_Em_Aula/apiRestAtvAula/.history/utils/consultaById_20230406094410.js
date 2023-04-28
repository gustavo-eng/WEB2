function consultaById(data, id) {
    console.log(`elemento encontrado dentro da funcao utils com o id ${id} passado por parametro `)
    console.log(ata.find(el => el.id === id))
    return data.find(el => el.id === id)
}


module.exports = consultaById ; 
