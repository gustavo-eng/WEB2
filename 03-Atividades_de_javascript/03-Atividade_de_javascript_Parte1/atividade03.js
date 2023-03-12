/* 
03 - Escreva uma função que retorne um vetor contendo o resultado da tabuada de um número
recebido por parâmetro. Cada resultado na respectiva posição do índice.


*/

const multVet = (valor) => {
    let vetor = []
    for (let i = 0; i < 10; i++) {
        vetor.push(valor * (i + 1));
    }
    return vetor;
}