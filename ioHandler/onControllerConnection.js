const storage = require("../storage");

onControllerConnection = socket => {
  socket.on("controllerConnection", deviceId => {
    console.log(`The controller for device of id ${deviceId} has connected.`);
    socket.broadcast.emit("controllerConnection", {
      deviceId: deviceId,
      connected: true
    });

    require("./onStatusChange")(socket); // Only controllers can edit the stored status of a device
    
    storage.updateDevice(deviceId, { connected: true }).catch(error=>{console.log(error);})
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
