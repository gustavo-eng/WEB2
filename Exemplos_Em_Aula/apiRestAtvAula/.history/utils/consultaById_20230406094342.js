function consultaById(data, id) {
    console.log('elemento encontrado dentro da funcao utils --> ')
    console.log(ata.find(el => el.id === id))
    return data.find(el => el.id === id)
}


module.exports = consultaById ; 
