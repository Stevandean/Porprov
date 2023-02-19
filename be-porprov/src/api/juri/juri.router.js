const express = require("express");
const router = express.Router();
const {
    allJuri,
    addJuri,
    login,
    loginTanding,
    editJuri
}= require("./juri.controller");

//router
router.get("/", allJuri);
router.post("/", addJuri);
router.put("/edit/:id", editJuri)
router.post("/login", login);
router.post("/tanding/login", loginTanding);

//export module
module.exports = router;