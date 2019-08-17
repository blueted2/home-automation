const express = require("express");
const router = express.Router();
const storage = require("../../../storage");

// Handle incoming POST request to /api/devices
router.post("/", (req, res, next) => {
  var device = req.body;
  storage
    .addDevice(device)
    .then(device => {
      res.status(201).send(device);
    })
    .catch(error => {
      res.status(400).send(error.message);
    });
});

// Handle incoming POST request to /api/devices/:deviceId
router.post("/:deviceId", (req, res, next) => {
  if (req.body.deviceId) {
    if (req.params.deviceId !== req.body.deviceId) {
      res.status(400).send('Discrepency between URL and deviceId');
      return;
    }
  }

  const deviceId = req.params.deviceId;
  var device = req.body;
  device.deviceId = deviceId;
  const error = storage.validateDevice(device);

  if (error) {
    res.status(400).send(error.message);
  } else {
    res.status(201).send(device);
  }
});

module.exports = router;