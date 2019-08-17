const express = require("express");
const router = express.Router();
const storage = require("../../../storage");

// Handle incoming DELETE request to /api/devices
router.delete("/", (req, res, next) => {
  res.stauts(400).send("Device id must be included in URL");
});

// Handle incoming DELETE request to /api/devices
router.delete("/:deviceId", (req, res, next) => {
  const {
    deviceId
  } = req.params;
  removeDevice(deviceId)
    .then(device => {
      res.status(200).send(device);
    })
    .catch(error => {
      res.status(404).send(error.message);
    });
});

module.exports = router;