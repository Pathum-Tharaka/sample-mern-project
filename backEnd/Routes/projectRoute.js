const express = require("express");
const router = express.Router();
//insert model
const User = require("../Model/projectModel");
//insert user controller
const projectController = require("../Controllers/projectControl");

router.get("/",projectController.getAllprojects);
router.post("/",projectController.addprojects);
router.get("/:id",projectController.getId);
router.put("/:id",projectController.updateProjects);
router.delete("/:id",projectController.deleteProjects);


module.exports = router;
