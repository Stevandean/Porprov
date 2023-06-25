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
} = require("./peserta_seni.controller")

const Auth = require('../../../middleware/Auth')
const verifyRoles = require("../../../middleware/verifyRoles")

//config storage for multer
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


//--------------------------------
//route admin
//--------------------------------
router.get("/", Auth, verifyRoles("superadmin"), getAllPeserta)

//route for import
router.post("/import/tunggal", Auth, verifyRoles("admin"), upload.single('file'), importTunggal)
router.post("/import/ganda", Auth, verifyRoles("admin"), upload.single('file'), importGanda)
router.post("/import/regu", Auth, verifyRoles("admin"), upload.single('file'), importRegu)
router.post("/import/solo", Auth, verifyRoles("admin"), upload.single('file'), importSolo)

//route for add
router.post("/tunggal", Auth, verifyRoles("admin"), addTunggal)
router.post("/ganda", Auth, verifyRoles("admin"), addGanda)
router.post("/regu", Auth, verifyRoles("admin"), addRegu)
router.post("/solo_kreatif", Auth, verifyRoles("admin"), addSolo)

router.put("/:id", Auth, verifyRoles("admin"), editPeserta)
router.delete("/:id", Auth, verifyRoles("admin"), deletePeserta)

//--------------------------------
//route public
//--------------------------------
router.get("/id/:id", Auth, getPesertabyId)
router.get("/:kategori", Auth, getAllTgr)


//export
module.exports = router