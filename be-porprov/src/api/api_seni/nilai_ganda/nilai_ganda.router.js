const express = require("express");
const router = express.Router();
const {
    getAllNilai,
    getbyJadwal,
    getbyJuri,
    addNilai,
    editNilai,
    deleteNilai,
    editbyJuri,
    addDewanganda,
    addDewanSolo,
}  = require("./nilai_ganda.controller")

//router ganda
router.get("/ganda", getAllNilai)
router.get("/ganda/juri/:id_jadwal/:id_peserta/:id_juri", getbyJuri)
router.get("/ganda/jadwal/:id_jadwal/:id_peserta", getbyJadwal)
router.post("/ganda", addNilai),
router.post("/ganda/dewan", addDewanganda)
router.put("/ganda/:id", editNilai),
router.put("/ganda/juri/:id_jadwal/:id_peserta/:id_juri", editbyJuri),
router.delete("/ganda/:id", deleteNilai)

//router solo kreatif
router.get("/solo_kreatif", getAllNilai)
router.get("/solo_kreatif/juri/:id_jadwal/:id_peserta/:id_juri", getbyJuri)
router.get("/solo_kreatif/jadwal/:id_jadwal/:id_peserta", getbyJadwal)
router.post("/solo_kreatif", addNilai),
router.post("/solo_kreatif/dewan", addDewanSolo)
router.put("/solo_kreatif/:id", editNilai),
router.put("/solo_kreatif/juri/:id_jadwal/:id_peserta/:id_juri", editbyJuri),
router.delete("/solo_kreatif/:id", deleteNilai)


//export module
module.exports = router;