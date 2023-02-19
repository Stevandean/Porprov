const models = require('../models/index')
const Nilai = models.nilai_tanding
const {v4 : uuidv4} = require("uuid")
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../helpers");

const TambahBabak = async (req, res, idJadwal) => {
    //set id as uuid
    const id = uuidv4()

    const getJadwal = await Nilai.findOne({
        where: {id: idJadwal}
    })

    //set poin for red
    let merah = {
        id: uuidv4(),
        id_peserta: getJadwal.id_merah
    }
    const poin_merah = await Poin.create(merah)
    
    //set poin for red
    let biru = {
        id: uuidv4(),
        id_peserta: getJadwal.id_biru
    }
    const poin_biru = await Poin.create(biru)

    //create grades for schedule
    let nilai = {
        id: id,
        id_jadwal: id_jadwal,
        babak: "I",
        id_poin_merah: poin_merah.id,
        id_poin_biru: poin_biru.id
    }
    const result = await Nilai.create(nilai)
    return addResponse( req, res, result )
} 
module.exports = TambahBabak;
