let taskService = {
    lista: async function() {
        const response = await fetch('/api/tasks')
        return await response.json()
    },
}

export default taskService;