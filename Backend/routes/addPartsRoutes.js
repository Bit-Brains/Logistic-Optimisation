const express = require("express")
const router = express.Router();
const { addParts, addSubParts } = require("../controllers/addItemsControllers");

router.post("/addParts", addParts);
router.post("/addSubParts", addSubParts);

module.exports = router;
