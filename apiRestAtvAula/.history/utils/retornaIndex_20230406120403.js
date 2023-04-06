function retornaIndex(data) {
let vet = []
if(data.id) {
    data.forEach(el => {
        vet.push(el.id)
    })
    return Math.max(...vet) + 1
    
} else {
    return 1 
}
}

module.exports = retornaIndex ; 


