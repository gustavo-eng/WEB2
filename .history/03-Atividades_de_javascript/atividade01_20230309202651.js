let output = '';
const div01 = document.querySelector('.atividade01');
for (let i = 0; i < 5; i++) {
    console.log(i)
    output += `<p>Hello World ${i + 1}</p>`
}
div01.innerHTML = output
// Forma corrigida (sem interface)
export const retornarStrings = () => {
    let texto = ' '
    for (let i = 0; i < 10; i++) {
        //console.log(`Hello world ${i}`)
        texto += ` <p> Hello world ${i} </p> `
    }
    return texto
}