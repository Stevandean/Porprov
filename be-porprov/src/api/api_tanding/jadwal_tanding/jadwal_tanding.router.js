const express = require("express");
const router = express.Router();

const Auth = require('../../../middleware/Auth')
const verifyRoles = require("../../../middleware/verifyRoles")

const { 
    getAll,
    getId,
    addTanding,
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
router.get("/gel/:gelanggang", Auth, getbyGelanggang)
router.get("/:id", getId);;
router.post("/", Auth, addTanding)
router.put("/:id", Auth, editTanding)
router.put("/keterangan/:id_jadwal", setKet)
router.put("/selesai/:id_jadwal", setSelesai)
router.delete("/:id", deleteTandingbyId)
router.delete("/delete/all", deleteAllTanding)

router.get("/get/timer/:id_jadwal/:babak", getTimer)
router.post("/timer/start", startTimer)
router.put("/timer/pause", pauseTimer)
router.put("/timer/stop", stopTimer)
router.get('/poin/:id', getPoin)

//export module
module.exports = router;