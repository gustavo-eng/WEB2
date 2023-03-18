
function inversorDeData(data) {
    let parametro = data.toString().split('').reverse().join('');
    return parametro;
}

function operacaoBasica(op, x, y) {
    let resultado;
    switch(op.toLowercase()) {
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
} 

module.exports = {inversorDeData, operacaoBasica};

