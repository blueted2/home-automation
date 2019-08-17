const deviceSchema = require("./deviceSchema");

validateDevice = device => {
  const error = deviceSchema.validate(device).error;
  if (error) {
    return error.details[0];
  } else {
    return null;
  }
};

module.exports = validateDevice;
