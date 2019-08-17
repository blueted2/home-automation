const express = require("express");
const router = express.Router();
const storage = require("../../../storage");

// Handle incoming GET request to /api/devices
router.get("/", (req, res, next) => {
  storage.getDevices().then(devices => {
    res.status(200).send(devices);
  });
});

// Handle incoming GET request to /api/devices/:deviceId
router.get("/:deviceId", (req, res, next) => {
  const { deviceId } = req.params;
  storage
    .getDevice(req.params.deviceId)
    .then(devices => {
      res.status(200).send(devices);
    })
    .catch((error) => {
      res.status(404).send(error.message);
    });
});

module.exports = router;
