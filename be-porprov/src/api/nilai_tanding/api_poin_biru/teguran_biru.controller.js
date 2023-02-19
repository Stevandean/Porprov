const schedule = require('node-schedule')
const { Op, where } = require("sequelize")

const models = require('../../../models/index')
const Nilai = models.nilai_tanding
const Juri1 = models.log_poin_juri1
const Juri2 = models.log_poin_juri2
const Juri3 = models.log_poin_juri3
const Jatuhan = models.log_jatuhan
const poin_masuk = models.log_poin_masuk
const Poin = models.poin
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
} = require("../../../helpers");
const {v4 : uuidv4} = require("uuid")

module.exports = {
    addTeguranBiru: async (req,res) =>{
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })
    
            const getTeguran = await Teguran.findOne({
                where: {id_poin: getNilai.id_poin_biru},
                order:[["createdAt", "DESC"]]
            })

            if (getTeguran) {
                if(getTeguran.poin === (-1)){
                    //set data binaan
                    let data = {
                        id: uuidv4(),
                        id_poin: getNilai.id_poin_biru,
                        poin: -2
                    }
                    result = await Teguran.create(data)

                    //update total hukum babak
                    const getPoin = await Poin.findOne({
                        where: {id: getNilai.id_poin_biru}
                    })
                    let data_poin = {
                        total_hukum: (getPoin.total_hukum) + (-2),
                        total_poin: (getPoin.total_poin) + (-2)
                    }
                    await Poin.update(data_poin,{where:{id: getNilai.id_poin_biru}})
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
                        total_biru: (getJadwal.total_biru) + (-2)
                    }
                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    .then(result => {
                        console.log("total nilai updated");
                    })
                    .catch(error => {
                        console.log(error.message);

                    })
                    return addResponse( req, res, result )

                } else if (getTeguran.poin === (-2)) {
                    return res.json({
                        message: "teguran sudah 2x"
                    })
                }
            } else if (!getTeguran){
                let data = {
                    id: uuidv4(),
                    id_poin: getNilai.id_poin_biru,
                    poin: -1
                }
                result = await Teguran.create(data)  
                
                //update total hukum babak
                const getPoin = await Poin.findOne({
                    where: {id: getNilai.id_poin_biru}
                })
                let data_poin = {
                    total_hukum: (getPoin.total_hukum) + (-1),
                    total_poin: (getPoin.total_poin) + (-1)
                }
                await Poin.update(data_poin,{where:{id: getNilai.id_poin_biru}})
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
                    total_biru: (getJadwal.total_biru) + (-1)
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

    deleteTeguranBiru: async (req,res) => {
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })
    
            //cek nilai teguran
            const getTeguran = await Teguran.findOne({
                where: {id_poin: getNilai.id_poin_biru},
                order: [["createdAt","DESC"]]
    
            })
    
            if (getTeguran) {
                if (getTeguran.poin === (-1)) {
                    //update total hukum babak
                    const getPoin = await Poin.findOne({
                        where: {id: getNilai.id_poin_biru},
                        order: [["createdAt","DESC"]]
                    })
                    let data_poin = {
                        total_hukum: (getPoin.total_hukum) + 1,
                        total_poin: (getPoin.total_poin) + 1
                    }
                    await Poin.update(data_poin,{where:{id: getNilai.id_poin_biru}})
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
                        total_biru: (getJadwal.total_biru) + 1
                    }
                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    .then(result => {
                        console.log("total nilai updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
                    result = await Teguran.destroy({
                        where: {id: getTeguran.id}
                    })
                        
                } else if (getTeguran.poin === (-2)) {
                    //update total hukum babak
                    const getPoin = await Poin.findOne({
                        where: {id: getNilai.id_poin_biru},
                        order: [["createdAt","DESC"]]
                    })
                    let data_poin = {
                        total_hukum: (getPoin.total_hukum) + 2,
                        total_poin: (getPoin.total_poin) + 2
                    }
                    await Poin.update(data_poin,{where:{id: getNilai.id_poin_biru}})
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
                        total_biru: (getJadwal.total_biru) + 2
                    }
                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    .then(result => {
                        console.log("total nilai updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })

                    result = await Teguran.destroy({where: {id: getTeguran.id}})
    
                    // //cek peringatan
                    // const getPeringatan = await Peringatan.findOne({
                    //     where: {id_poin: getNilai.id_poin_biru},
                    //     order: [["createdAt","DESC"]]
                    // })
                    // if (getPeringatan) {
                    //     if(getPeringatan.poin === -5){
                    //         result = await Peringatan.destroy({
                    //             where: {id: getPeringatan.id}
                    //         })
    
                    //         //update total hukum babak
                    //         const getPoin = await Poin.findOne({
                    //             where: {id: getNilai.id_poin_biru}
                    //         })
                    //         let data_poin = {
                    //             total_hukum: (getPoin.total_hukum) + 5,
                    //             total_poin: (getPoin.total_poin) + 5
                    //         }
                    //         await Poin.update(data_poin,{where:{id: getNilai.id_poin_biru}})
                    //         .then(result => {
                    //             console.log("total hukum updated");
                    //         })
                    //         .catch(error => {
                    //             console.log(error.message);
                    //         })
    
                    //         //update total poin pada tabel jadwal
                    //         const getJadwal = await Tanding.findOne({
                    //             where: {id: getNilai.id_jadwal}
                    //         })
                    //         let data_total = {
                    //             total_biru: (getJadwal.total_biru) + 5
                    //         }
                    //         await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    //         .then(result => {
                    //             console.log("total nilai updated");
                    //         })
                    //         .catch(error => {
                    //             console.log(error.message);
                    //         })
                    //     }else if(getPeringatan === -10){
                    //         let data = {
                    //             poin: -5
                    //         }
                    //         result = await Peringatan.update(data,{where: {id_poin: getNilai.id_poin_biru}})
                    //         //update total hukum babak
                    //         const getPoin = await Poin.findOne({
                    //             where: {id: getNilai.id_poin_biru}
                    //         })
                    //         let data_poin = {
                    //             total_hukum: (getPoin.total_hukum) + 5,
                    //             total_poin: (getPoin.total_poin) + 5
                    //         }
                    //         await Poin.update(data_poin,{where:{id: getNilai.id_poin_biru}})
                    //         .then(result => {
                    //             console.log("total hukum updated");
                    //         })
                    //         .catch(error => {
                    //             console.log(error.message);
                    //         })
    
                    //         //update total poin pada tabel jadwal
                    //         const getJadwal = await Tanding.findOne({
                    //             where: {id: getNilai.id_jadwal}
                    //         })
                    //         let data_total = {
                    //             total_biru: (getJadwal.total_biru) + 5
                    //         }
                    //         await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    //         .then(result => {
                    //             console.log("total nilai updated");
                    //         })
                    //         .catch(error => {
                    //             console.log(error.message);
    
                    //         })
                    //     }
                    // }
                }
            } else if (!getTeguran) {
                return res.json({
                    message: "teguran belum ditambahkan"
                })
            }
            return editResponse(req,res,result)
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    }
}