const express = require("express");
const router = express.Router();
const { 
    getAllPeserta,
    getPesertabyId,
    getAllTgr,
    importTunggal,
    importGanda,
    addTunggal,
    addGanda,
    addRegu,
    addSolo,
    editPeserta,
    deletePeserta,
    importRegu,
    importSolo,
} = require("./peserta.controller")

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


//router
router.get("/", getAllPeserta)
router.get("/id/:id", getPesertabyId)
router.get("/:kategori", getAllTgr)

router.post("/import/tunggal", upload.single('file'), importTunggal)
router.post("/import/ganda", upload.single('file'), importGanda)
router.post("/import/Regu", upload.single('file'), importRegu)
router.post("/import/Regu", upload.single('file'), importSolo)

router.post("/tunggal", addTunggal)
router.post("/ganda", addGanda)
router.post("/regu", addRegu)
router.post("/solo_kreatif", addSolo)

router.put("/:id", editPeserta)
router.delete("/:id", deletePeserta)

//export
module.exports = router