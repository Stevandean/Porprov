const express = require("express");
const router = express.Router();
const {
    getAllNilai,
    getbyJadwal,
    getbyJuri,
    addNilai,
    editNilai,
    deleteNilai,
    addDewan,
    editbyJuri,
}  = require("./nilai_ganda.controller")

//router
router.get("/", getAllNilai)
router.get("/juri/:id_jadwal/:id_peserta/:id_juri", getbyJuri)
router.get("/jadwal/:id_jadwal/:id_peserta", getbyJadwal)
router.post("/dewan", addDewan)
router.post("/", addNilai),
router.put("/:id", editNilai),
router.put("/juri/:id_jadwal/:id_peserta/:id_juri", editbyJuri),
router.delete("/:id", deleteNilai)

//export module
module.exports = router;