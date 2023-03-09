/* 
06 - Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em
uma string. Tanto o caractere quanto a string são recebidos por parâmetro.
*/


const contadorCaractere = (string, letra) => {
    let vetString = string.toUpperCase().split('');
    let contador = 0;
    vetString.forEach(element => {
        if (element == letra) {
            contador += 1;
        }
    });

    return contador;
}



// function contarVogal(word) {
//     let vetWord = word.toUpperCase().split('');
//     let cont = 0;
//     vetWord.forEach((element) => {
//         if ((['A', 'E', 'I', 'O', 'U',]).includes(element)) {
//             cont += 1;
//         }
//     })
//     return cont;
// }