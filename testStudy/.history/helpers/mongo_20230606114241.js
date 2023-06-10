const mongoose = require("mongoose")

module.exports = (req, res, next) => {
    mongoose.connect("mongodb://127.0.0.1:27017/prova")
    .catch((err) => {
        console.log("Erro ao conectar no Banco ")
        console.log(err)
    })

    return next()
}