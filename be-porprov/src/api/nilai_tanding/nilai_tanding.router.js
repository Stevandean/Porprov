const express = require('express');
const router = express.Router();
const {
    getAllNilai, 
    getbyIdJadwal,
    getbyIdNilai,
    addBabak1,
    addBabak2,
    addBabak3,
    getPoinbyBabak,
} = require('./nilai_tanding.controller')

const {
    addJuriBiru,
    deletePoinBiru,
    addJatuhanBiru,
    deleteJatuhanBiru,
    addBinaanBiru,
    deleteBinaanBiru,
    addTeguranBiru,
    deleteTeguranBiru,
    addPeringatanBiru,
    deletePeringatanBiru
} = require('./api_poin_biru/poin_biru.controller')

const {
    addJuriMerah,
    deletePoinMerah,
    addJatuhanMerah,
    deleteJatuhanMerah,
    addBinaanMerah,
    deleteBinaanMerah,
    addTeguranMerah,
    deleteTeguranMerah,
    addPeringatanMerah,
    deletePeringatanMerah
} = require('./api_poin_merah/poin_merah.controller')
 
//router
router.get('/', getAllNilai),
router.get('/:id', getbyIdNilai)
router.get('/jadwal/:id_jadwal', getbyIdJadwal),
router.get('/babak/', getPoinbyBabak),
router.post('/babak1', addBabak1)
router.post('/babak2', addBabak2)
router.post('/babak3', addBabak3)

//router biru
router.post('/biru/juri', addJuriBiru)
router.delete('/biru/juri/:id_juri', deletePoinBiru)
router.post('/biru/jatuhan', addJatuhanBiru)
router.delete('/biru/jatuhan', deleteJatuhanBiru)
router.post('/biru/binaan', addBinaanBiru)
router.delete('/biru/binaan', deleteBinaanBiru)
router.post('/biru/teguran', addTeguranBiru)
router.delete('/biru/teguran', deleteTeguranBiru)
router.post('/biru/peringatan', addPeringatanBiru)
router.delete('/biru/peringatan', deletePeringatanBiru)


//router merah
router.post('/merah/juri', addJuriMerah)
router.delete('/merah/juri/:id_juri', deletePoinMerah)
router.post('/merah/jatuhan', addJatuhanMerah)
router.delete('/merah/jatuhan', deleteJatuhanMerah)
router.post('/merah/binaan', addBinaanMerah)
router.delete('/merah/binaan', deleteBinaanMerah)
router.post('/merah/teguran', addTeguranMerah)
router.delete('/merah/teguran', deleteTeguranMerah)
router.post('/merah/peringatan', addPeringatanMerah)
router.delete('/merah/peringatan', deletePeringatanMerah)


module.exports = router;