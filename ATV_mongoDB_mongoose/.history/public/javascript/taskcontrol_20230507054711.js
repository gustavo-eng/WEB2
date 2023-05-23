import taskService from "./taskservice";

let atualizarTarefas = async () => {
    let resp = await taskService.lista()

    if(resp.status) {
        let ul =  document.querySelector("#tarefas");
        ul.innerHTML = "";
        resp.forEach((item) => {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(item.nome + " "))
            ul.appendChild(li)
        })
    }

}

// window.addEventListener("load", async () => {
//     atualizarTarefas()
// })