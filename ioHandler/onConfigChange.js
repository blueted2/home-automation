const storage = require("../storage");

onConfigChange = socket => {
  socket.on("configChange", device => {
    console.log(device);
    storage
      .updateDevice(device.deviceId, device);
  });
};

module.exports = onConfigChange;