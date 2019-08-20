const storage = require("../storage");

onControllerConnection = socket => {
  socket.on("controllerConnection", (deviceId) => {
    console.log(`The controller for device of id ${deviceId} has connected.`)
    storage.updateDevice(deviceId, {"connected": true});
    socket.on("disconnect", () => {
      console.log(`The controller for device of id ${deviceId} has disconnected.`)
      storage.updateDevice(deviceId, {"connected": false});
    })
  });
};

module.exports = onControllerConnection;
