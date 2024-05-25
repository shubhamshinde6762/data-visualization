const express = require("express");
const router = express.Router();
const {create} = require("../controller/addData");

router.post("/add", create);

module.exports = router;