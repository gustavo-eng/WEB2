
function inversorDeData(data) {
    let parametro = data.toString().split('').reverse().join('');
    return parametro;
}


module.exports = {inversorDeData};

