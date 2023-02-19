const express = require("express");
const router = express.Router();
const {
    allAdmin,
    addAdmin,
    login,
    dewanLogin,
    timerLogin,
    editUser
}= require("./admin.controller");

//--------------------------------
//route admin
//---------------------------------

//router
router.get("/user", allAdmin);
router.post("/admin", addAdmin);
router.put("/user/edit/:id", editUser);
router.post("/admin/login", login)
router.post("/dewan/login", dewanLogin)
router.post("/timer/login", timerLogin)


//export module
module.exports = router;