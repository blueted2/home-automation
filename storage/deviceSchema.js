const Joi = require("joi");

const deviceSchema = Joi.object()
  .keys({
    deviceId: Joi.string()
      .min(3)
      .max(20)
      .regex(/^[^ ]+$/),

    name: Joi.string()
      .min(3)
      .max(20)
      .required(),
    status: Joi.required()
  })
  .unknown(true);

module.exports = deviceSchema;
