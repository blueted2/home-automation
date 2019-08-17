const Joi = require("joi");

const deviceSchema = Joi.object().keys({
  deviceId: Joi.string()
    .min(3)
    .max(20).regex(/^[^ ]+$/)
    .required(),

  config: Joi.object()
    .keys({
      name: Joi.string()
        .min(3)
        .max(20)
        .required()
    })
    .unknown(true)
    .required(),
  status: Joi.required()
});

module.exports = deviceSchema;