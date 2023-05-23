let taskService = {
    lista: async () => {
        const response = await fetch('http://localhost:5555/sports') 
        return await response.json()
    }
}

// fetch('http://localhost:5555/sports').then(j => j.json()).then(k => console.log(k))
// fetch('http://localhost:5555/sports').then(j => j.json()).then(k => console.log(k[1].nome))
export default taskService