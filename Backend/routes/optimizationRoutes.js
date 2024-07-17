const express = require("express");
const router = express.Router();
const { optiDistAndCost } = require("../controllers/optimizationController.js");

router.post("/optimizedDistanceAndCost", optiDistAndCost);

module.exports = router;
