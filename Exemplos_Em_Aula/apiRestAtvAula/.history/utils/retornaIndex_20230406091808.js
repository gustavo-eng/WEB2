function retornaIndex(data) {
let vet = []
data.forEach(el => {
    vet.push(el.id)
})
    return Math.max(...vet) + 1
}


module.exports = retornaIndex ; 