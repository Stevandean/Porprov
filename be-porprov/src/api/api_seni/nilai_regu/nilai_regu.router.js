const express = require("express");
const router = express.Router();
const {
    getAllNilai,
    getbyJadwal,
    getbyJuri,
    addNilai,
    editSkorA,
    editbyJuri,
    editNilai,
    deleteNilai,
    addDewan
}  = require("./nilai_regu.controller")

//router
router.get("/", getAllNilai)
router.get("/juri/:id_jadwal/:id_peserta/:id_juri", getbyJuri)
router.get("/jadwal/:id_jadwal/:id_peserta", getbyJadwal)
router.post("/dewan", addDewan)
router.post("/", addNilai),
router.put("/:id", editNilai),
router.put("/juri/:id_jadwal/:id_peserta/:id_juri", editbyJuri),
router.put("/skor/:id_jadwal/:id_peserta/:id_juri", editSkorA),
router.delete("/:id", deleteNilai)

//export module
module.exports = router;