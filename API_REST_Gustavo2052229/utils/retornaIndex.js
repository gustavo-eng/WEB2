function retornaIndex(data) {
let vet = []
if(data[0]) { // essa funcao busca pelo maior index e soma +1 
    data.forEach(el => {
        vet.push(el.id)
    })
    return Math.max(...vet) + 1
    
} else {
    return 1 
}
}

module.exports = retornaIndex ; 


