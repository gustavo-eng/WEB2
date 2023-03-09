/* 
05 - Escreva uma função que permita contar o número de vogais contidas em uma string
fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função retorna
o número 3 (há 3 vogais nessa palavra).

*/

function contarVogal(word) {
    let vetWord = word.toUpperCase().split('');
    let cont = 0;
    let cont2 = 0;
    vetWord.forEach((element) => {
        if (element == ('A' || 'E' || 'I' || 'O' || 'U')) {
            cont += 1;
        }

        if ((['A', 'E', 'I', 'O', 'U',]).includes(element)) {
            cont2 += 1;
        }
    })
    return cont;
}



