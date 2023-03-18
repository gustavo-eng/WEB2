
function inversorDeData(data) {
    let parametro = data.toString().split('').reverse().join('');
    return parametro;
}

function operacaoBasica(op = 'soma', x = 2, y = 2) {
    let resultado;
    switch(op) {
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

