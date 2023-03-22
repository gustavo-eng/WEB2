const Joi = require('joi')

const schema = Joi.object({
    uf: Joi.string().min(2).max(5).required(), 
    id: Joi.number().integer().min(0).required(),
    email: Joi.string().email(),
}) 

module.exports = function(req, res,next) {
    const {error, value} = schema.validate(req.query);
    if(!error) {
        req.query = value
        next();
    }
}


