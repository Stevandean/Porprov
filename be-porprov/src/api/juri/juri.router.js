const express = require("express");
const router = express.Router();
const {
    allJuri,
    addJuri,
    login
}= require("./juri.controller");

//router
router.get("/", allJuri);
router.post("/", addJuri);
router.post("/login", login);

//export module
module.exports = router;