const storage = require("./storage");

var namespaces = [];

module.exports = io => {
  
  storage.getDevices().then(devices => {
    devices.forEach(device => {
      namespaces.push(io.of("/" + device.deviceId));
    });
    namespaces.forEach(namespace => {
      namespace.on("connection", socket => {
        console.log(`Socket has joined ${namespace.name}`);
      });
    });
  });
};
