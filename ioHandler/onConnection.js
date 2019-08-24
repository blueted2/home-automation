const storage = require("../storage");
const events = require("./validEvents");

onConnection = io => {
  io.on("connection", socket => {
    storage
      .getDevices()
      .then(devices => {
        socket.emit("initialize", devices);
        require("./onControllerConnection")(socket);
      })
      .catch(error => {
        console.log(error);
      });

    events.forEach(event => {
     socket.on(event, body => {
       console.log(`Got event ${event} with body ${JSON.stringify(body)}`);
       io.emit(event, body);
     });
    });
  });
};

module.exports = onConnection;
