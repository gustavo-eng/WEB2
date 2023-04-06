const Joi = require('joi')

module.exports = {
    nome: Joi.string().min(4).max(20).required(),
    curso: Joi.string().min(4).max(20).required(),
}

