const Joi = require('joi');

const createAndUpdateProductValidation = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    price: Joi.string(),
    image: Joi.string(),
    stock: Joi.number(),
}).unknown(false)

module.exports = {
    createAndUpdateProductValidation,
}
