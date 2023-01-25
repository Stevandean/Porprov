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
    getTunggalId,
    getbyKategori,

}= require("./jadwal_tgr.controller");

//router
router.get("/:kategori", getAllTgr);
router.get("/tunggal/:id", getTunggalId);
router.get("/get/kelas/:kategori", getKelas);
router.get("/bykelas/:kategori/:jk/:kelas", getByPoolKelas);
router.get("/bykelas/:kategori/:jk/:kelas/:babak", getbyKategori);
router.get("/bykelas/:kategori", getByPoolKelas);
router.get("/bykelas/:kategori", getByPoolKelas);
router.post("/tunggal", addTgrTunggal)
router.post("/Ganda", addTgrGanda)
router.post("/Regu", addTgrRegu)
router.put("/:id", editTgr)
router.put("/selesai/:id_jadwal/:id_peserta", setSelesai)
router.delete("/:id", deleteTgr)
router.delete("/delete/all", deleteAllTgr)

//export module
module.exports = router;