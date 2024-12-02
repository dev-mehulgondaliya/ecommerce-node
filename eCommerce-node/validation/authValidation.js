const Joi = require('joi');

const signupValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
}).unknown(false)

const loginValidation = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
}).unknown(false)

module.exports = {
    signupValidation,
    loginValidation
}
