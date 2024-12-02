const Joi = require('joi');

const updateCartValidation = Joi.object({
    userId: Joi.string().required(),
    productId: Joi.string().required(),
    type: Joi.string().required().allow('add', 'remove'),
}).unknown(false)


module.exports = {
    updateCartValidation,
}
