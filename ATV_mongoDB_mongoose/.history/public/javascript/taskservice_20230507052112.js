let taskService = {
    lista: async () => {
        const response = await fetch('http://localhost:5555/sports') 
        return await response.json()
    }
}