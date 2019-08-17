const express = require("express");
const router = express.Router();
const storage = require("../../../storage");

// Handle incoming PUT request to /api/devices
router.put("/", (req, res, next) => {
  const deviceId = req.body.deviceId;
  var oldDevice = req.body;
  
  storage
    .updateDevice(deviceId, oldDevice)
    .then(device => {
      res.status(200).send(device);
    })
    .catch(error => {
      res.status(400).send(error.message);
    });
});

router.put("/:deviceId", (req, res, next) => {
  if (req.body.deviceId) {
    if (req.params.deviceId !== req.body.deviceId) {
      res.status(400).send('Discrepency between URL and deviceId');
      return;
    }
  }

  const deviceId = req.params.deviceId;
  console.log(req.params);
  var oldDevice = req.body;

  storage
    .updateDevice(deviceId, oldDevice)
    .then(device => {
      res.status(200).send(device);
    })
    .catch(error => {
      res.status(400).send(error.message);
    });
});
module.exports = router;