const express = require("express");
const router = express.Router();
const { registerSupplier, loginSupplier, registerCustomer, loginCustomer } = require("../controllers/authController");
const {registerValidation ,loginValidation} = require("../Middlewares/loginformValidation.js");


router.post("/registerSupplier",registerValidation, registerSupplier);
router.post("/registerCustomer",registerValidation ,registerCustomer);
router.post("/loginSupplier",loginValidation, loginSupplier);
router.post("/loginCustomer",loginValidation, loginCustomer);

module.exports = router;
