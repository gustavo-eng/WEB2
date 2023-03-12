
// Forma corrigida (sem interface)
const retornarStrings = () => {
    let texto = ' '
    for (let i = 0; i < 10; i++) {
        //console.log(`Hello world ${i}`)
        texto += ` <p> Hello world ${i} </p> `
    }
    return texto
}


//teste
// script.js
function saudacao() {
    return 'Ola mundo'
    //alert("Olá, mundo!");
}
