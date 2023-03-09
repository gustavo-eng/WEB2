/* 
05 - Escreva uma função que permita contar o número de vogais contidas em uma string
fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função retorna
o número 3 (há 3 vogais nessa palavra).

*/

function contarVogal(word) {
    let vetWord = word.toUpperCase().split('');
    let cont = 0;
    vetWord.forEach((element) => {
        if ((['A', 'E', 'I', 'O', 'U',]).includes(element)) {
            cont += 1;
        }
    })
    return cont;
}

console.log(contarVogal('Gustavo'))


