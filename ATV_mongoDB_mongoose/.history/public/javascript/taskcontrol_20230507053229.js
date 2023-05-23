import taskService from "./taskservice";

let atualizarTarefasa = async () => {
    let resp = await taskService.lista()

    if(resp.status) {
        let ul =  document.querySelector("#tarefas");
        ul.innerHTML = "";
        resp.forEach((item) => {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(item.nome + " "))
            li.appendChild(edit)
            li.appendChild(del)
            ul.appendChild(li)
        })
    }

}