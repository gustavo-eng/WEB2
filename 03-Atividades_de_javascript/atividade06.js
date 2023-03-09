/* 
06 - Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em
uma string. Tanto o caractere quanto a string são recebidos por parâmetro.
*/


const contadorCaractere = (string, letra) => {
    let vetString = string.toUpperCase().split('');
    let contador = 0;
    vetString.forEach(element => {
        if (element == letra.toUpperCase()) {
            contador += 1;
        }
    });

    return contador;
}



