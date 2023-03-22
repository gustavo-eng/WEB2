const Joi = require('joi')

const schema = Joi.object({
    uf: Joi.string().min(2).max(5).required(), 
    id: Joi.number().integer().min(0).required(),
    email: Joi.string().email(),
}) 

module.exports = schema


