const express = require("express");
const router = express.Router();
//insert model
const User = require("../Model/userModel");
//insert user controller
const userController = require("../Controllers/userControl");

router.get("/",userController.getAllUsers);
router.post("/",userController.addUsers);
router.get("/:id",userController.getId);
router.put("/:id",userController.updateUser);
router.delete("/:id",userController.deleteUser);

module.exports = router;
