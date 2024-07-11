const express = require("express");
const router = express.Router();
const { registerSupplier, loginSupplier, registerCustomer, loginCustomer } = require("../controllers/authController");

router.post("/registerSupplier", registerSupplier);
router.post("/registerCustomer", registerCustomer);
router.post("/loginSupplier", loginSupplier);
router.post("/loginCustomer", loginCustomer);

module.exports = router;
