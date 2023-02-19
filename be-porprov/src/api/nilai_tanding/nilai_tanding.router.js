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
    getJuribyBabak,
    getNilaibyJuri,
    getBabakbyJadwal,
    getNilaiLayar,
    getJuribySudutbyBabak,
    getPoinMasukbysudut,
    getPoin,
    getLogs1
} = require('./nilai_tanding.controller')

const {
    deletePoinBiru,
    addJatuhanBiru,
    deleteJatuhanBiru,
    addBinaanBiru,
    deleteBinaanBiru,
    addTeguranBiru,
    deleteTeguranBiru,
    addPeringatanBiru,
    deletePeringatanBiru,
    addJuriPukulanBiru,
    addJuriTendanganBiru
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
    deletePeringatanMerah,
    addPukulanJuriMerah,
    addJuriTendanganMerah
} = require('./api_poin_merah/poin_merah.controller')
 
//router
router.get('/', getAllNilai),
router.get('/:id', getbyIdNilai)
router.get('/babakbyjadwal/:id_jadwal', getBabakbyJadwal),


router.get('/jadwal/:id_jadwal', getbyIdJadwal),    

router.get('/juri/:id_jadwal/:no_juri', getNilaibyJuri),

router.get('/juri/babak/:id_jadwal/:babak/:no_juri', getJuribyBabak)
router.get('/poinmasuk/:sudut/:id_jadwal/:babak', getPoinMasukbysudut)

router.get('/juri/:sudut/:id_jadwal/:babak/:no_juri', getJuribySudutbyBabak)


router.get("/getpoin/poin/juri", getLogs1)
router.get('/layar/:id_jadwal', getNilaiLayar),
router.get('/babak/', getPoinbyBabak),
router.post('/babak1', addBabak1)
router.post('/babak2', addBabak2)
router.post('/babak3', addBabak3)

//router biru
router.post('/biru/juri/pukulan', addJuriPukulanBiru)
router.post('/biru/juri/tendangan', addJuriTendanganBiru)
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
router.post('/merah/juri/pukulan', addPukulanJuriMerah)
router.post('/merah/juri/tendangan', addJuriTendanganMerah)
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