const storage = require("../storage");

onControllerConnection = socket => {
  socket.on("controllerConnection", deviceId => {
    console.log(`The controller for device of id ${deviceId} has connected.`);
    socket.broadcast.emit("controllerConnection", {
      deviceId: deviceId,
      connected: true
    });
    
    storage.updateDevice(deviceId, { connected: true });
    socket.on("disconnect", () => {
      console.log(`The controller for device of id ${deviceId} has disconnected.`);
      socket.broadcast.emit("controllerDisconnect", {
        deviceId: deviceId,
        connected: false
      });
      storage.updateDevice(deviceId, { connected: false });
    });
  });
};

module.exports = onControllerConnection;
