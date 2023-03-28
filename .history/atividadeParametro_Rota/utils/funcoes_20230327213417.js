
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

const listaWord = ['gustavo', 'alexandre', 'Dias', 'ipsumm', 'teste', 'desenvolvedor', 'web2', 'correr']
  function generateRandomText(length, isWords) {
    let text = '';
    let count = 0;
    const max = isWords ? length : length / 5; // assume 5 characters per word
    while (count < max) { 
      const randomIndex = Math.floor(Math.random() * listaWord.length);
      const word = listaWord[randomIndex];
      text += word + ' ';
      count++;
    }
    console.log(' \n  Quebra de linha \n  ')
    console.log('Dentro de generateRandomText --> '+ text)
    return isWords ? text.trim() : text.trim().substring(0, length);
    // .trim() -> corta os espacos das extremidades. 
    // .substring() -> faz o fatiamento de strings. 
  }



module.exports = {inversorDeData, operacaoBasica, generateRandomText};

