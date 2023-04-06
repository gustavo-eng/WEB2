const Joi = require('joi')

const Schema = Joi.object({
    nome: Joi.string().min(4).max(20).required(),
    curso: Joi.string().min(4).max(20).required(),

}).with("nome", "curso") //understand better 

module.exports = Schema;

