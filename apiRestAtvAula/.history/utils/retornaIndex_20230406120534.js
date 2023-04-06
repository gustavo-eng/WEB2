function retornaIndex(data) {
let vet = []
if(data[0]) {
    data.forEach(el => {
        vet.push(el.id)
    })
    return Math.max(...vet) + 1
    
} else {
    return 1 
}
}

module.exports = retornaIndex ; 


