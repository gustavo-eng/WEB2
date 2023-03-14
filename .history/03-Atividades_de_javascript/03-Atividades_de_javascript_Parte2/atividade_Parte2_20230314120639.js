/* 
03 - Consuma uma das APIs REST disponível em https://apipheny.io/free-api/#apis-without-key
e gere produtos aleatórios com os dados obtidos. 
*/


const url = "https://api.publicapis.org/entries";

function getRandomElements(items, count) {
    const shuffle = items.sort(() => 0.55 - Math.random());
    return shuffle.slice(0, count);  // Retorna os primeiros counts  itens 
}

fetch(url)
    .then((data) => data.json())
    .then((response) => {

    })