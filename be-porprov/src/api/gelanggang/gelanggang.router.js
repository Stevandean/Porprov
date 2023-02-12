const express = require("express");
const router = express.Router();
const {
    getAll,
    addGelanggang,
    editGelanggang,
    deleteGelanggang
} = require("./gelanggang.controller")

router.get("/", getAll)
router.post("/", addGelanggang)
router.put("/:id", editGelanggang)
router.delete("/:id", deleteGelanggang)

module.exports = router