const express = require("express");
const router = express.Router();
const {
    getAll,
    addNama,
    editNama,
    deleteNama
} = require("./nama_controller")
const Auth = require('../../middleware/Auth')


router.get("/", getAll)
router.post("/", Auth, addNama)
router.put("/:id", editNama)
router.delete("/:id", deleteNama)

module.exports = router