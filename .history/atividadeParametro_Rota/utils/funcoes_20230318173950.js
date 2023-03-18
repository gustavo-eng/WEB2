
function inversorDeData(data) {
    let parametro = data.toString().split('').reverse().join('');
    return parametro;
}

function operacaoBasica(op = 'soma', x = 0, y = 0) {
    let resultado;
    let operacao = op.toLowerCase()
    switch(operacao) {
        case 'soma':
            resultado = Number(x) + Number(y);
            break; 
        case 'subtracao':
            resultado = Number(x) - Number(y);
            break;
        case 'multiplicacao':
            resultado = Number(x) * Number(y);
            break;
        case 'divisao': 
            resultado = Number(x) / Number(y);
            break;
        default:
            resultado = 404
            
    }

    return resultado
} 

module.exports = {inversorDeData, operacaoBasica};

