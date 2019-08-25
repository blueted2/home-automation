const storage = require("../storage");
const events = require("./validEvents");

onConnection = io => {
  io.on("connection", socket => {
    console.log(socket.id);
    storage
      .getDevices()
      .then(devices => {
        socket.emit("initialize", devices); //Send all the device statuses to the socket
        socket.emit("deviceTypes", require("../storage/deviceTypes")); //Send the valid device types to sockets
        require("./onControllerConnection")(socket); //Listen for a controller to announce its connection
      })
      .catch(error => {
        console.log(error);
      });

    events.forEach(event => {
      socket.on(event, body => {
        //console.log(`Got event ${event} with body ${JSON.stringify(body)}`);
        io.emit(event, body);
      });
    });
  });
};

module.exports = onConnection;
