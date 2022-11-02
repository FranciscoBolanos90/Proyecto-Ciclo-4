const express = require("express");
const router = express.Router();
const viajesController = require("../controllers/viajes.controller");

router.post("/", viajesController.create)
router.get("/", viajesController.find)
router.get("/:id", viajesController.findOne)
router.put("/:id", viajesController.update)
router.delete("/:id", viajesController.remove)


module.exports = router