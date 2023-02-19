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
    setSelesai,
    getTimer,
    startTimer,
    pauseTimer,
    stopTimer,
    getPoin
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

router.get("/get/timer/:id_jadwal/:babak", getTimer)
router.post("/timer/start", startTimer)
router.put("/timer/pause", pauseTimer)
router.put("/timer/stop", stopTimer)
router.get('/poin/:id', getPoin)

//export module
module.exports = router;