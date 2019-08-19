const storage = require("../storage");
const emitStatusChange = require("./emitStatusChange");

statusChangeListener = socket => {
  console.log("Listening to status changes");
  socket.on("statusChange", device => {
    storage.updateDevice(device.deviceId, { status: device.status });
    
  });
};

module.exports = statusChangeListener;
