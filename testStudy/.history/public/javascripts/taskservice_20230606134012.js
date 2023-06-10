let taskService = {
    lista: async function() {
        const response = await fetch('/api/tasks')
        return await response.json()
    },
    login: async function (user, senha) {
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

export default taskService;