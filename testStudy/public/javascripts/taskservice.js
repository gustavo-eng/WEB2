let taskService = {
    lista: async function() {
        const response = await fetch('/api/tasks')
        return await response.json()
    },
    novo: async function(nome,prioridade, token) {
        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json', 'Custom-Header': token},
            body: JSON.stringify({nome: nome, prioridade: prioridade})
        }
        const response = await fetch('/api/tasks', data)
        return await response.json()
    },
    login: async function (user, senha) {
        console.log("ENTROU EM TASKSERVICEEEEEE")
        const data = {
            method: 'POST',
            headers: {
            'Content-type': 'application/json',
            //'Custom-Header': localStorage.getItem('token')
        },
            body: JSON.stringify({usuario: user, senha: senha})
        }
        const response = await fetch('/', data)

        console.log('return await response --> ')
        console.log(response)
        return await response.json()
    }
}

export default taskService