const express = require("express");
const router = express.Router();
const {
    allAdmin,
    addAdmin,
    login,
}= require("./admin.controller");

//--------------------------------
//route admin
//---------------------------------

//router
router.get("/", allAdmin);
router.post("/", addAdmin);
router.post("/login", login)

//export module
module.exports = router;