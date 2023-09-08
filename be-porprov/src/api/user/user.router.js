const express = require("express");
const router = express.Router();
const Auth = require('../../middleware/Auth')
const verifyRoles = require("../../middleware/verifyRoles")

const {
    allUser,
    allUserAdmin,
    addUser,
    addUserAdmin,
    login,
    dewanLogin,
    timerLogin,
    editUser,
    getUserbyId,
    deleteUser
}= require("./user.controller");

//--------------------------------
//route superadmin
//--------------------------------
router.get("/su/user", Auth, verifyRoles("superadmin"), allUser);
router.post("/su/user", Auth, verifyRoles("superadmin"), addUser);
router.put("/su/user/edit/:id", Auth, verifyRoles("superadmin"), editUser);
//--------------------------------


//--------------------------------
//route admin
//--------------------------------
router.get("/admin/user", Auth, verifyRoles("admin"), allUserAdmin);
router.post("/admin/user", Auth, verifyRoles("admin"), addUserAdmin);
router.put("/admin/user/:id", Auth, verifyRoles("admin"), editUser)
router.delete("/admin/:id", Auth, verifyRoles("superadmin","admin"), deleteUser)
//--------------------------------



//--------------------------------
//route all Authentication user
//--------------------------------
router.get("/user/:id", Auth, getUserbyId)
//--------------------------------


//--------------------------------
//route public user
//--------------------------------
router.post("/admin/login", login)
router.post("/dewan/login", dewanLogin)
router.post("/timer/login", timerLogin)
//--------------------------------


//export module
module.exports = router;