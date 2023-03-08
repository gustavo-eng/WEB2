/* 
04 - Escreva uma função que mostre na tela um número fornecido pelo usuário, porém
invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número 578.

*/

const inversao = (num) => {
    let numerico = num.toString().split('');
    return numerico.reverse();
}


