const express = require("express");
const router = express.Router();
const {
    addPeringatanMerah, deletePeringatanMerah, getPeringatanMerah, getPeringatanBiru, addPeringatanBiru, deletePeringatanBiru, getAllPeringatan
}  = require("./peringatan.controller")

//router
router.get('/sudut/:sudut/:id_jadwal', getAllPeringatan)

router.get("/merah/:id_jadwal/:babak", getPeringatanMerah)
router.post("/merah/", addPeringatanMerah)
router.delete("/merah/", deletePeringatanMerah)

router.get("/biru/:id_jadwal/:babak", getPeringatanBiru)
router.post("/biru/", addPeringatanBiru)
router.delete("/biru/", deletePeringatanBiru)

//export module
module.exports = router;