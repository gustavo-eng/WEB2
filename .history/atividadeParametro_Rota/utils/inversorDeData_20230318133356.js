
function inverteResultado(data) {
    let parametro = data.toString().split('').reverse();
    let resultado = ''
    parametro.word.forEach(element => {
        resultado += element
    })
    return resultado
}

export default inverteResultado;
