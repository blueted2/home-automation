const express = require("express");
const morgan = require("morgan");
const app = express();
const server = require("http").createServer(app);
const storage = require("node-persist");
const ioHandler = require("./ioHandler");
const path = require("path");
const devicesRoute = require("./api/routes/devices/");

app.use(express.static(path.join(__dirname, "react-app", "build")));

server.listen(4000, null, () => {
  console.log("Listening on port 4000");
});

(async () => {
  await storage.init();
  ioHandler.startSocketServer(server);
})();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/devices", devicesRoute);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "react-app", "build", "index.html"));
});
