const mongoose = require("mongoose")

// it`s like a middleware 

module.exports = (req, res, next) => {
    mongoose.connect("mongodb://127.0.0.1:27017/mongoose")
    .catch((err) => {
        console.log("Error ao conectar no banco...")
    })
    return next()    
}