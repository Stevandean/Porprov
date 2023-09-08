const express = require("express");
const router = express.Router();
const Auth = require('../../../middleware/Auth')

const { 
    getAllSeni,
    addSeniTunggal,
    addSeniGanda,
    addSeniRegu,
    editSeni,
    setSelesai,
    deleteSeni,
    deleteAllSeni,
    getByPoolKelas,
    getKelas,
    getbyKategori,
    addSeniSolo,
    getKelasAktif,
    getAllData,
    startTimer,
    getTimer,
    timerSelesai,
    getbyId,
    getbyGelanggang,
    addJadwalSeni,

}= require("./jadwal_seni.controller");

//router
router.get("/", Auth, getAllData);
router.get("/:kategori", Auth, getAllSeni);
router.get("/gel/:gelanggang", Auth, getbyGelanggang)

router.post("/:kategori", Auth, addJadwalSeni)
// router.post("/ganda", addSeniGanda)
// router.post("/regu", addSeniRegu)
// router.post("/solo_kreatif", addSeniSolo)


router.get("/id/:id", getbyId);
router.get("/tunggal/:id", getbyId);
router.get("/ganda/:id", getbyId);
router.get("/regu/:id", getbyId);
router.get("/solo_kreatif/:id", getbyId);

router.get("/get/kelas/:kategori", getKelas);
router.get("/get/kelas/aktif/:kategori", getKelasAktif);
// router.get("/bykelas/:kategori/:jk/:kelas", getByPoolKelas);
router.get("/bykelas/:kategori/:jk/:kelas", getbyKategori);
router.get("/bykelas/:kategori", getByPoolKelas);
router.get("/bykelas/:kategori", getByPoolKelas);

router.put("/:id", editSeni)
router.put("/selesai/:id_jadwal/:id_peserta", setSelesai)
router.delete("/:id", deleteSeni)
router.delete("/delete/all", deleteAllSeni)

router.get("/get/timer/:id_jadwal/:id_peserta", getTimer)
router.post("/timer/start", startTimer)
router.put("/timer/selesai", timerSelesai)

//export module
module.exports = router;