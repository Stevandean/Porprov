const Joi = require('joi');

const addTandingValidate = {
    body: {
        kelas: Joi.string().required(),
        gelanggang: Joi.string().required(),
        partai: Joi.string().required(),
        nm_merah: Joi.string().required(),
        kontingen_merah: Joi.string().required(),
        nm_biru: Joi.string().required(),
        kontingen_biru: Joi.string().required(),
    },
}
module.exports = {
    addTandingValidate
}