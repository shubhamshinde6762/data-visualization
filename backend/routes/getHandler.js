const router = require("express").Router();
const getFilterData = require("../controller/get/filterReqHandler");
const getCount = require("../controller/get/getCount");

router.get("/getData", getFilterData);
router.get("/getCount", getCount);

module.exports = router;
