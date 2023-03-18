
function inverteResultado(data = '123') {
    let parametro = data.toString().split('').reverse();
    let resultado = '' 
    parametro.word.forEach(element => {
        resultado += element
    })
    return resultado
}

module.exports inverteResultado;


