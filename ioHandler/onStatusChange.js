const storage = require("../storage");
const emitStatusChange = require("./emitStatusChange");

onStatusChange = socket => {
  socket.on("statusChange", device => {
    storage.updateDevice(device.deviceId, { status: device.status });
  });
};

module.exports = onStatusChange;
