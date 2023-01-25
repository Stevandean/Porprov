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
    deleteAllTanding
 }= require("./jadwal_tanding.controller");

//router
router.get("/", getAll)
router.get("/:id", getId);;
router.post("/", addTanding)
router.put("/:id", editTanding)
router.delete("/:id", deleteTandingbyId)
router.delete("/delete/all", deleteAllTanding)
router.post("/import", upload.single('file'), importCsv)

//export module
module.exports = router;