const storage = require("../storage");

statusChangeListener = (io) => {
  io.on("statusChange", (deviceChanges) => {
    console.log(deviceChanges);
  })
}

module.exports = statusChangeListener;