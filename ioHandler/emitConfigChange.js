emitConfigChange = device => {
  const io = require(".").io;
  delete device.status;
  io.emit("configChange", device);
};

module.exports = emitConfigChange;