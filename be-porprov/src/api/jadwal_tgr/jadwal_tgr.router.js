const express = require("express");
const router = express.Router();
const multer = require("multer")
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/tmp")
    },
    filename: (req, file, cb) => {
        cb(null, "tgr" + path.extname(file.originalname))
    }
});
let upload = multer({ storage: storage })
const { 
    getAllTgr,
    addTgrTunggal,
    addTgrGanda,
    addTgrRegu,
    editTgr,
    setSelesai,
    deleteTgr,
    deleteAllTgr,
    getByPoolKelas,
    getKelas,
    getbyKategori,
    addTgrSolo,
    getKelasAktif,
    getAllData,
    startTimer,
    getTimer,
    timerSelesai,
    getbyId,
    getbyGelanggang,

}= require("./jadwal_tgr.controller");

//router
router.get("/", getAllData);
router.get("/:kategori", getAllTgr);
router.get("/gel/:gelanggang", getbyGelanggang)
router.get("/:id", getbyId);
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
router.post("/tunggal", addTgrTunggal)
router.post("/Ganda", addTgrGanda)
router.post("/Regu", addTgrRegu)
router.post("/solo_kreatif", addTgrSolo)
router.put("/:id", editTgr)
router.put("/selesai/:id_jadwal/:id_peserta", setSelesai)
router.delete("/:id", deleteTgr)
router.delete("/delete/all", deleteAllTgr)

router.get("/get/timer/:id_jadwal/:id_peserta", getTimer)
router.post("/timer/start", startTimer)
router.put("/timer/selesai", timerSelesai)

//export module
module.exports = router;