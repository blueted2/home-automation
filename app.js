const express = require("express");
const morgan = require("morgan");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const storage = require("node-persist");
(async () => {
  await storage.init();
  require("./sockets");
})();

const devicesRoute = require("./api/routes/devices/");

server.listen(5000, null, () => {
  console.log("Listening on port 5000");
});

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/devices", devicesRoute);

app.get("", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", socket => {
  console.log(socket.id);
});
