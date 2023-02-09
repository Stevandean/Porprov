const express = require('express');
const router = express.Router();
const {
    getAll,
    getbyId,
    addPeserta,
    editPeserta,
    deletePeserta,
} = require("./peserta_tanding.contorller")

//router
router.get("/", getAll),
router.get("/:id", getbyId),
router.post("/", addPeserta),
router.put("/:id", editPeserta),
router.delete("/:id", deletePeserta)

//export
module.exports = router