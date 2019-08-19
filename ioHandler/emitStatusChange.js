emitStatusChange = device => {
  const io = require("../ioHandler").io;
  io.emit("statusChange", { deviceId: device.deviceId, status: device.status });
};

module.exports = emitStatusChange;