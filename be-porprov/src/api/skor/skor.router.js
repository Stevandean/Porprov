const express = require("express")
const router = express.Router()
const {
    getbyJadwalandPeserta,
    addSkor,
    editSkor,
    deleteSkor,
    getAll
} = require("./skor.controller")

router.get("/", getAll)
router.get("/jadwal/:id_jadwal/:id_peserta", getbyJadwalandPeserta)
router.post("/", addSkor)
router.put("/:id", editSkor)
router.delete("/:id", deleteSkor)

module.exports = router
