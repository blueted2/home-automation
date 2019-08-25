emitConfigChange = device => {
  const io = require(".").io;
  io.emit("configChange", device);
};

module.exports = emitConfigChange;