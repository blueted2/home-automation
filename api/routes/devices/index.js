const express = require("express");
const router = express.Router();
const get = require("./get");
const put = require("./put");
const post = require("./post");
const del = require("./delete");

router.use(get);
router.use(put);
router.use(post);
router.use(del);

module.exports = router;