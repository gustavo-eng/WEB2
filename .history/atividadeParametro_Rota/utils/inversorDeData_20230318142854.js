
function inversorDeData(data) {
    let parametro = data.toString().split('').reverse();
    let resultado = parametro.join('') 
    return resultado;
}

function ola(){
    return 'ola mundo'
}

module.exports = {inversorDeData, ola};

