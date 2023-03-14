/* 
03 - Consuma uma das APIs REST disponível em https://apipheny.io/free-api/#apis-without-key
e gere produtos aleatórios com os dados obtidos. 
*/


const url = 'https://api.publicapis.org/entries';

function getRandomElements(items, count) {
    const shuffle = items.sort(() => 0.55 - Math.random());
    return shuffle.slice(0, count);  // Retorna os primeiros counts  itens 
}
console.log('Code Runner')

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // Obtem a lista de ate 15 itens aleatorios da API 
        const elementRandom = getRandomElements(data.entries, 15);

        //Gera um breve relatório json() sobre os dados obtidos  
        const report = elementRandom.map(item =>
        (
            {
                name: item.API,
                description: item.Description,
                category: item.Category
            }
        )
        )
        console.log('Report --> ')
        console.warn(report)
    }).catch((err) => console.log('Erro gerado -> ' + err)).finally(() => console.log('Finalizado. Finally'))