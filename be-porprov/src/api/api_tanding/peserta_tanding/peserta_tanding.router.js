const express = require('express');
const router = express.Router();
const {
    getAll,
    getbyId,
    addPeserta,
    editPeserta,
    deletePeserta,
    importTanding
} = require("./peserta_tanding.contorller")

const Auth = require('../../../middleware/Auth')
const verifyRoles = require("../../../middleware/verifyRoles")

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

//router
router.get("/", Auth, getAll),
router.get("/:id", getbyId),
router.post("/", Auth, addPeserta),
router.post("/import", Auth, upload.single('file'), importTanding),
router.put("/:id", Auth, editPeserta),
router.delete("/:id", Auth, deletePeserta)

//export
module.exports = router