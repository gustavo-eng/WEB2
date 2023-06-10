const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
   nome: String,
   prioridade: String
})


const TaskSModel = mongoose.model("Task", TaskSchema)


module.exports = {
    list: async () => {
        const tasks = await TaskSModel.find({}).lean()
        return tasks
    },

    save: async (nome, prioridade) => {
        const task = new TaskSModel({
            nome: nome,
            prioridade: prioridade
        })

        await task.save()
        return task
    },

    update: async (id, nome, prioridade) => {
        let task = await TaskSModel.findByIdAndUpdate(id, {nome: nome, prioridade: prioridade})
            .then(updatedSport => {return updatedSport})
            .catch(err => {
                console.log('Erro ao alterar sport. ERRO: '+ err)
                return
            })

        return task
    },

    delete : async (id) => {
        return await TaskSModel.findByIdAndDelete(id)
    },

    getById: async () => {
        return await TaskSModel.findById(id).lean()
    }

}





// const kittySchema = new mongoose.Schema({
//     nome: String,
//     idade: {type: Number, min: 15, max: 30, default: 22}
// })