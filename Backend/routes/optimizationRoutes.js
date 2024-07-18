const express = require("express");
const router = express.Router();
const { optiDistAndCost } = require("../controllers/optimizationController.js");
const { verifyToken } = require("../Middlewares/jwtVerify.js");

router.post("/optimizedDistanceAndCost", verifyToken, optiDistAndCost);

module.exports = router;
