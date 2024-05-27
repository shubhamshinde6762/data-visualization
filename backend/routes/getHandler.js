const router = require("express").Router();
const getFilterData = require("../controller/get/filterReqHandler");
const getCount = require("../controller/get/getCount");
const getSet = require("../controller/get/getSet");

router.get("/getData", getFilterData);
router.get("/getCount", getCount);
router.get("/getSet", getSet);

module.exports = router;
