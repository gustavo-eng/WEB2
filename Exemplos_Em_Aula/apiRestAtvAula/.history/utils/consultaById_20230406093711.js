function consultaById(data, id) {
    return data.find(el => el.id === id)
}


module.exports = consultaById ; 
