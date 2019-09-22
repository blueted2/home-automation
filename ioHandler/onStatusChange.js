const storage = require("../storage");
const emitStatusChange = require("./emitStatusChange");

onStatusChange = socket => {
  socket.on("statusChange", device => {
    storage.updateDevice({ deviceId: device.deviceId, status: device.status });
    emitStatusChange({
      deviceId: deviceId,
      status: newDevice.status
    });
  });
};

module.exports = onStatusChange;
