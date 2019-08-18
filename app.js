const express = require("express");
const morgan = require("morgan");
const app = express();
const server = require("http").createServer(app);
const storage = require("node-persist");
const ioHandler = require("./ioHandler");

const devicesRoute = require("./api/routes/devices/");
storage.init();

server.listen(5000, null, () => {
  console.log("Listening on port 5000");
});

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/devices", devicesRoute);
app.get("", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

ioHandler.startSocketServer(server);
ioHandler.addNamepaceListener({ deviceId: "light_1" });
