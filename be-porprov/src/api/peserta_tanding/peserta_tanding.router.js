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
router.get("/", getAll),
router.get("/:id", getbyId),
router.post("/", addPeserta),
router.post("/import", upload.single('file'), importTanding),
router.put("/:id", editPeserta),
router.delete("/:id", deletePeserta)

//export
module.exports = router