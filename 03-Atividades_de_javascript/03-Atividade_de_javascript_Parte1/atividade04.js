/* 
04 - Escreva uma função javascript que mostre na tela um número fornecido pelo usuário, porém
invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número 578.

*/


const inversao = (num) => {
    let numerico = num.toString().split('').reverse();
    let numero_em_caracter = ' '
    numerico.forEach(element => {
        numero_em_caracter += element
    })
    return parseInt(numero_em_caracter);
}