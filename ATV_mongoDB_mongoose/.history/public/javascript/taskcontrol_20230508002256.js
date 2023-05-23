// import taskService from "./taskservice";

function listarEsportes() {
    fetch('http://localhost:5555/sports')
      .then(response => response.json())
      .then(data => {
        const listaEsportes = document.getElementById('esportes');
        listaEsportes.innerHTML = '';
        data.forEach(esporte => {
          const li = document.createElement('li');
          li.appendChild(document.createTextNode(esporte.nome));
          li.appendChild(document.createTextNode(esporte.estilo));
          li.appendChild(document.createTextNode(esporte.coletivo));
          listaEsportes.appendChild(li);
        });
      })
      .catch(error => console.error(error));
}
function imprimir() {
  console.log('IMPRMIIIR pressed')
}

  window.addEventListener("load", async () => {
    listarEsportes() 
    const btn = document.getElementsByTagName('button')
    btn[0].addEventListener('click', () => {
        console.log('olsssssssssssssssssssss')
    })
  })
  