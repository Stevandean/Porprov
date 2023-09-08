const schedule = require('node-schedule')
const { Op, where } = require("sequelize")

const models = require('../../../../models/index')
const Nilai = models.detail_jadwal_tanding
const Juri1 = models.log_poin_juri1
const Juri2 = models.log_poin_juri2
const Juri3 = models.log_poin_juri3
const Jatuhan = models.log_jatuhan
const poin_masuk = models.log_poin_masuk
const Poin = models.nilai_tanding
const Tanding = models.jadwal_tanding
const Juri = models.juri
const Binaan = models.log_binaan
const Teguran = models.log_teguran
const Peringatan = models.log_peringatan

const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../../../helpers");
const {v4 : uuidv4} = require("uuid")

module.exports ={
    addPeringatanBiru: async (req,res) => {
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })
    
            const getPeringatan = await Peringatan.findOne({
                where: {id_nilai_tanding: getNilai.id_nilai_biru},
                order:[["createdAt","DESC"]]
            })

            if (getPeringatan) {
                if(getPeringatan.poin === -5){
                    //set data peringatan
                    let data = {
                        id: uuidv4(),
                        id_nilai_tanding: getNilai.id_nilai_biru,
                        poin: -10
                    }
                    result = await Peringatan.create(data)

                    //update total hukum babak
                    const getPoin = await Poin.findOne({
                        where: {id: getNilai.id_nilai_biru}
                    })
                    let data_poin = {
                        total_hukum: (getPoin.total_hukum) + (-10),
                        total_poin: (getPoin.total_poin) + (-10)
                    }
                    await Poin.update(data_poin,{where:{id: getNilai.id_nilai_biru}})
                    .then(result => {
                        console.log("total hukum updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })

                    //update total poin pada tabel jadwal
                    const getJadwal = await Tanding.findOne({
                        where: {id: getNilai.id_jadwal}
                    })
                    let data_total = {
                        total_biru: (getJadwal.total_biru) + (-10)
                    }
                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    .then(result => {
                        console.log("total nilai updated");
                    })
                    .catch(error => {
                        console.log(error.message);

                    })
                    return addResponse( req, res, result )
                } else if (getPeringatan.poin === (-10)) {
                    let data_poin = {
                        dis: true
                    }

                    result = await Poin.update(data_poin,{where:{id: getNilai.id_nilai_biru}})

                    return editResponse( req, res, result )
                    // return res.json({
                    //     message: "peringatan sudah 2x"
                    // })
                }
            } else if(!getPeringatan){
                const peringatan1 = -5
                let data = {
                    id: uuidv4(),
                    id_nilai_tanding: getNilai.id_nilai_biru,
                    poin: peringatan1
                }
                result = await Peringatan.create(data)  
                
                //update total hukum babak
                const getPoin = await Poin.findOne({
                    where: {id: getNilai.id_nilai_biru}
                })
                let data_poin = {
                    total_hukum: (getPoin.total_hukum) + (peringatan1),
                    total_poin: (getPoin.total_poin) + (peringatan1)
                }
                await Poin.update(data_poin,{where:{id: getNilai.id_nilai_biru}})
                .then(result => {
                    console.log("total hukum updated");
                })
                .catch(error => {
                    console.log(error.message);
                })

                //update total poin pada tabel jadwal
                const getJadwal = await Tanding.findOne({
                    where: {id: getNilai.id_jadwal}
                })
                let data_total = {
                    total_biru: (getJadwal.total_biru) + (peringatan1)
                }
                await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                .then(result => {
                    console.log("total nilai updated");
                })
                .catch(error => {
                    console.log(error.message);

                })
                return addResponse( req, res, result )
            }
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    deletePeringatanBiru: async (req,res) => {
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })

            //cek peringatan
            const getPeringatan = await Peringatan.findOne({
                where: {id_nilai_tanding: getNilai.id_nilai_biru},
                order: [["createdAt","DESC"]]
            })
            let result = []
            if (getPeringatan) {
                if(getPeringatan.poin === -5){
                    result = await Peringatan.destroy({
                        where: {id: getPeringatan.id}
                    })
        
                    //update total hukum babak
                    const getPoin = await Poin.findOne({
                        where: {id: getNilai.id_nilai_biru}
                    })
                    let data_poin = {
                        total_hukum: (getPoin.total_hukum) + 5,
                        total_poin: (getPoin.total_poin) + 5
                    }
                    await Poin.update(data_poin,{where:{id: getNilai.id_nilai_biru}})
                    .then(result => {
                        console.log("total hukum updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
        
                    //update total poin pada tabel jadwal
                    const getJadwal = await Tanding.findOne({
                        where: {id: getNilai.id_jadwal}
                    })
                    let data_total = {
                        total_biru: (getJadwal.total_biru) + 5
                    }
                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    .then(result => {
                        console.log("total nilai updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })

                    return deleteResponse(req, res, result)
                }else if(getPeringatan.poin === -10){
                    result = await Peringatan.destroy({where: {id: getPeringatan.id}})
                    //update total hukum babak
                    const getPoin = await Poin.findOne({
                        where: {id: getNilai.id_nilai_biru}
                    })
                    let data_poin = {
                        total_hukum: (getPoin.total_hukum) + 10,
                        total_poin: (getPoin.total_poin) + 10
                    }
                    await Poin.update(data_poin,{where:{id: getNilai.id_nilai_biru}})
                    .then(result => {
                        console.log("total hukum updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
        
                    //update total poin pada tabel jadwal
                    const getJadwal = await Tanding.findOne({
                        where: {id: getNilai.id_jadwal}
                    })
                    let data_total = {
                        total_biru: (getJadwal.total_biru) + 10
                    }
                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    .then(result => {
                        console.log("total nilai updated");
                    })
                    .catch(error => {
                        console.log(error.message);
        
                    })
                    return deleteResponse(req, res, result)
                }
            } else if (!getPeringatan) {
                return res.json({
                    message: "peringatan belum ditambahkan"
                })
            }
            return editResponse(req, res, result)
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    }
}