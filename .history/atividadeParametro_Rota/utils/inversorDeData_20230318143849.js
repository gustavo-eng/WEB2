
function inversorDeData(data) {
    let parametro = data.toString().split('').reverse().join('');
    //let resultado = parametro 
    return parametro;
}


module.exports = {inversorDeData};

