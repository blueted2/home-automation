const Joi = require("joi");
const deviceTypes = require("./deviceTypes");

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
    status: Joi.required(),
    type: Joi.valid(deviceTypes).required()
  })
  .unknown(true);

module.exports = deviceSchema;
