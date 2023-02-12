const express = require("express");
const router = express.Router();
const multer = require("multer")
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/tmp")
    },
    filename: (req, file, cb) => {
        cb(null, "tanding" + path.extname(file.originalname))
    }
});
let upload = multer({ storage: storage })
const { 
    getAll,
    getId,
    addTanding,
    importCsv,
    editTanding,
    deleteTandingbyId,
    deleteAllTanding,
    getbyGelanggang,
    setKet,
    setSelesai
 }= require("./jadwal_tanding.controller");

//router
router.get("/", getAll)
router.get("/gel/:gelanggang", getbyGelanggang)
router.get("/:id", getId);;
router.post("/", addTanding)
router.put("/:id", editTanding)
router.put("/keterangan/:id_jadwal", setKet)
router.put("/selesai/:id_jadwal", setSelesai)
router.delete("/:id", deleteTandingbyId)
router.delete("/delete/all", deleteAllTanding)
router.post("/import", upload.single('file'), importCsv)

//export module
module.exports = router;