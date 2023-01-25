const express = require("express");
const router = express.Router();
const {
    getAllHukum,
    addHukum,
    editHukum,
    deleteHukum,
    getHukumbyjadwal
}  = require("./hukum_tgr.controller")

//router
router.get("/", getAllHukum)
router.get("/jadwal/:id_jadwal/:id_peserta", getHukumbyjadwal)
router.post("/", addHukum),
router.put("/:id_jadwal/:id_peserta", editHukum),
router.delete("/:id", deleteHukum)

//export module
module.exports = router;