const express = require('express')
const router = express.Router()
const {
    getVerif, 
    getVerifJatuhan,
    addVerifHukuman,
    addVerifJatuhan,
    verifJuriBiru,
    verifJuriMerah,
    verifJuriTidakSah
} = require ("./verif_tanding.controller")

router.get("/:id_jadwal", getVerif)
router.post("/jatuhan", addVerifJatuhan)
router.post("/hukuman", addVerifHukuman)
router.put("/jatuhan/juri/biru", verifJuriBiru)
router.put("/jatuhan/juri/merah", verifJuriMerah)
router.put("/jatuhan/juri/kuning", verifJuriTidakSah)



module.exports = router