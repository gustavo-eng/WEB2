
function inversorDeData(data) {
    let parametro = data.toString().split('').reverse();
    let resultado = parametro.join('') 
    return resultado;
}

module.exports = {inversorDeData};

