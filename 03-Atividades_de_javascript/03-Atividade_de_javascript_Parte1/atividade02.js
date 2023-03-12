
/* 
02 - Escreva uma função que receba 2 valores e uma operação básica: adição, subtração,
multiplicação e divisão e retorne o resultado da operação. Observação: Faça a validação para
prevenir a divisão por 0.
*/

const calculadora = (val1, val2, op) => {
    let saida;
    switch (op) {
        //basta colocar mais op e formulas nos cases 
        case "+":
            saida = val1 + val2
            break;
        case "-":
            saida = val1 - val2
            break;
        case "*":
            saida = val1 * val2
            break;
        default:
            console.log('Error');
            return null;
    }
    return saida;
}