const express = require("express")
const router = express.Router()

const { addInventory } = require("../controllers/inventoryController.js");

router.post("/addInventory", addInventory);

module.exports = router;
