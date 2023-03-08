
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