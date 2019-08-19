const express = require("express");
const router = express.Router();
const storage = require("../../../storage");

// Handle incoming PUT request to /api/devices
router.put("/", (req, res, next) => {
  handlePut(req, res);
});

router.put("/:deviceId", (req, res, next) => {
  if (req.body.deviceId) {
    if (req.params.deviceId !== req.body.deviceId) {
      res.status(400).send("Discrepency between URL and deviceId");
      return;
    }
  }
  handlePut(req, res);
});

handlePut = (req, res) => {
  const deviceId = req.body.deviceId;
  var newDevice = req.body;

  storage
    .updateDevice(deviceId, newDevice)
    .then(device => {
      res.status(200).send(device);
    })
    .catch(error => {
      res.status(400).send(error.message);
    });
};

module.exports = router;
