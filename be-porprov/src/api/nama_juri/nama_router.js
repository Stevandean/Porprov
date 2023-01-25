const express = require("express");
const router = express.Router();
const {
    getAll,
    addNama,
    editNama,
    deleteNama
} = require("./nama_controller")

router.get("/", getAll)
router.post("/", addNama)
router.put("/:id", editNama)
router.delete("/:id", deleteNama)

module.exports = router