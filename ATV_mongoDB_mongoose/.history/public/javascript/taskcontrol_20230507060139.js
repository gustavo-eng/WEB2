// import taskService from "./taskservice";

let  listarEsportes = () => {
    fetch('http://localhost:5555/sports')
      .then(response => response.json())
      .then(data => {
        
            const listaEsportes = document.getElementById('esportes');
            listaEsportes.innerHTML = '';
            data.forEach(esporte => {
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(esporte.nome));
                // li.appendChild(document.createTextNode(esporte.estilo));
                // li.appendChild(document.createTextNode(esporte.coletivo));
                listaEsportes.appendChild(li);
            });
      })
      .catch(error => console.error(error));
}

window.addEventListener("unload", async () => {
    listarEsportes()

    const form = getElementById('formulario')

    form.addEventListener('submit', async function(e)  { 
        console.log('clicouuu')
        e.preventDefault();
        listarEsportes();
    })

})

// let atualizarTarefas = async () => {
//     let resp = await taskService.lista()

//     if(resp.status) {
//         let ul =  document.querySelector("#tarefas");
//         ul.innerHTML = "";
//         resp.forEach((item) => {
//             let li = document.createElement("li")
//             li.appendChild(document.createTextNode(item.nome + " "))
//             ul.appendChild(li)
//         })
//     }

// }

// window.addEventListener("load", async () => {
//     atualizarTarefas()
// })