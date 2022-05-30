const Joi = require('joi');

const registerSchema = Joi.object({

    username: Joi.string(),
    password: Joi.string().min(6).required(),
    phone: Joi.number().min(8),
    email: Joi.string().email()

});
const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(6).required()
});
module.exports = {
    registerSchema,
    loginSchema
}