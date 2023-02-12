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
    addJatuhanBiru,
    deleteJatuhanBiru
} = require("./jatuhan_biru.cotroller")
const { addBinaanBiru, deleteBinaanBiru } = require("./binaan.controller")
const { addTeguranBiru, deleteTeguranBiru } = require("./teguran_biru.controller")
const { addPeringatanBiru, deletePeringatanBiru } = require("./peringatan_biru.controller")

const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../../helpers");
const {v4 : uuidv4} = require("uuid")


module.exports = {
    addJuriBiru: async (req,res) =>{
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })

            const getJuri = await Juri.findOne({
                where: {id: req.body.id_juri}
            })
            
            const juri = getJuri.no
            
            //set data for poin juri 
            let data = {
                id: uuidv4(),
                id_poin: getNilai.id_poin_biru,
                id_juri: getJuri.id,
                poin: req.body.poin
            }
            let result = []
            if(juri === 1){
                result = await Juri1.create(data)
            } else if(juri === 2){
                result = await Juri2.create(data)
            } else if(juri === 3){
                result = await Juri3.create(data)
            }

            schedule.cancelJob('cek')
            schedule.scheduleJob('cek', '*/4 * * * * *', async (req,res) => {
                console.log("checking log 2 & 3")

                //get poin dari juri lain
                let startDate = new Date(result.createdAt)
                let end = new Date(result.createdAt)
                let setdetik = startDate.setSeconds((startDate.getSeconds()) - 4)
                let start = new Date(setdetik)
                
                if(juri === 1){
                    //get poin dari juri2
                    const juri2 = await Juri2.findOne({
                        where:{
                            createdAt: {[Op.between]: [start, end]}
                        }
                    })

                    //get poin dari juri3
                    const juri3 = await Juri3.findOne({
                        where:{
                            createdAt: {[Op.between]: [start, end]}
                        }
                    })

                    //cek apakah ada juri lain yang menginput poin yang sama
                    if (juri2 || juri3) {
                        let data_poin = {
                            id: uuidv4(),
                            id_poin: getNilai.id_poin_biru,
                            poin: result.poin 
                        }
                        //jika ada poin masuk
                        let masuk = await poin_masuk.create(data_poin)
                        if (masuk) {
                            console.log("poin masuk "+ result.poin);

                            //update total poin pada tabel nilai
                            const getPoin = await Poin.findOne({
                                where: {id: getNilai.id_poin_biru}
                            })
                            let data_poin = {
                                poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                total_poin: (getPoin.total_poin) + (result.poin)
                            }
                            await Poin.update(data_poin, {where:{id: getNilai.id_poin_biru}})
                            .then(result => {
                                console.log("total poin updated");
                            })
                            .catch(error => {
                                console.log(error.message);

                            })

                            //update total poin pada tabel jadwal
                            const getJadwal = await Tanding.findOne({
                                where: {id: getNilai.id_jadwal}
                            })
                            let data_total = {
                                total_biru: (getJadwal.total_biru) + (result.poin)
                            }
                            await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                            .then(result => {
                                console.log("total nilai updated");
                            })
                            .catch(error => {
                                console.log(error.message);

                            })

                            if (juri2) {
                                let data = {
                                    masuk: true
                                }
                                await Juri2.update(data, {where:{id: juri2.id}})
                            }

                            if (juri3) {
                                let data = {
                                    masuk: true
                                }
                                await Juri3.update(data, {where:{id: juri3.id}})
                            }
                        } 
                    }
                } else if(juri === 2){
                    //get poin dari juri1
                    const juri1 = await Juri1.findOne({
                        where:{
                            createdAt: {[Op.between]: [start, end]}
                        }
                    })

                    //get poin dari juri3
                    const juri3 = await Juri3.findOne({
                        where:{
                            createdAt: {[Op.between]: [start, end]}
                        }
                    })
                    
                    //cek apakah ada juri lain yang menginput poin yang sama
                    if (juri1 || juri3) {
                        let data_poin = {
                            id: uuidv4(),
                            id_poin: getNilai.id_poin_biru,
                            poin: result.poin 
                        }
                        //jika ada poin masuk
                        let masuk = await poin_masuk.create(data_poin)
                        if (masuk) {
                            console.log("poin masuk "+ result.poin);

                            //update total poin pada tabel nilai
                            const getPoin = await Poin.findOne({
                                where: {id: getNilai.id_poin_biru}
                            })
                            let data_poin = {
                                poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                total_poin: (getPoin.total_poin) + (result.poin)
                            }
                            await Poin.update(data_poin, {where:{id: getNilai.id_poin_biru}})
                            .then(result => {
                                console.log("total poin updated");
                            })
                            .catch(error => {
                                console.log(error.message);

                            })

                            //update total poin pada tabel jadwal
                            const getJadwal = await Tanding.findOne({
                                where: {id: getNilai.id_jadwal}
                            })
                            let data_total = {
                                total_biru: (getJadwal.total_biru) + (result.poin)
                            }
                            await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                            .then(result => {
                                console.log("total nilai updated");
                            })
                            .catch(error => {
                                console.log(error.message);
                            })

                            if (juri1) {
                                let data = {
                                    masuk: true
                                }
                                await Juri1.update(data, {where:{id: juri1.id}})
                            }

                            if (juri3) {
                                let data = {
                                    masuk: true
                                }
                                await Juri3.update(data, {where:{id: juri3.id}})
                            }
                        } 
                    }
                } else if(juri === 3){
                    //get poin dari juri2
                    const juri1 = await Juri1.findOne({
                        where:{
                            createdAt: {[Op.between]: [start, end]}
                        }
                    })

                    //get poin dari juri3
                    const juri2 = await Juri2.findOne({
                        where:{
                            createdAt: {[Op.between]: [start, end]}
                        }
                    })
                    
                    //cek apakah ada juri lain yang menginput poin yang sama
                    if (juri1 || juri2) {
                        let data_poin = {
                            id: uuidv4(),
                            id_poin: getNilai.id_poin_biru,
                            poin: result.poin 
                        }
                        //jika ada poin masuk
                        let masuk = await poin_masuk.create(data_poin)
                        if (masuk) {
                            console.log("poin masuk "+ result.poin);

                            //update total poin pada tabel nilai
                            const getPoin = await Poin.findOne({
                                where: {id: getNilai.id_poin_biru}
                            })
                            let data_poin = {
                                poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                total_poin: (getPoin.total_poin) + (result.poin)
                            }
                            await Poin.update(data_poin, {where:{id: getNilai.id_poin_biru}})
                            .then(result => {
                                console.log("total poin updated");
                            })
                            .catch(error => {
                                console.log(error.message);

                            })

                            //update total poin pada tabel jadwal
                            const getJadwal = await Tanding.findOne({
                                where: {id: getNilai.id_jadwal}
                            })
                            let data_total = {
                                total_biru: (getJadwal.total_biru) + (result.poin)
                            }
                            await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                            .then(result => {
                                console.log("total nilai updated");
                            })
                            .catch(error => {
                                console.log(error.message);

                            })

                            if (juri1) {
                                let data = {
                                    masuk: true
                                }
                                await Juri1.update(data, {where:{id: juri1.id}})
                            }
                            if (juri2) {
                                let data = {
                                    masuk: true
                                }
                                await Juri2.update(data, {where:{id: juri2.id}})
                            }
                        } 
                    }
                }
                schedule.cancelJob('cek')
            })
            return addResponse( req, res, result)
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    },

    deletePoinBiru: async (req,res) => {
        try {
            schedule.cancelJob('cek')
            const id_juri = {id: req.params.id_juri}
            const getJuri = await Juri.findOne({where:id_juri})
            const juri = getJuri.no

            let result = []

            if(getJuri){
                if (juri === 1) {
                    const getLog1 = await Juri1.findOne({
                        where: {id_juri: req.params.id_juri},
                        order:[
                            ["createdAt","DESC"]
                        ]
                    })
                    if (getLog1.masuk === "true") {
                        console.log("Tidak bisa hapus poin, Poin yang dipilih telah masuk");
                        return res.json({
                            message: "Tidak bisa hapus poin, Poin yang dipilih telah masuk"
                        })
                    }
                    //delete last input poin
                    result = await Juri1.destroy({where:{id:getLog1.id}}) 
                } else if (juri === 2) {
                    const getLog2 = await Juri2.findOne({
                        where: {id_juri: req.params.id_juri},
                        order:[
                            ["createdAt","DESC"]
                        ]
                    })
                    if (getLog2.masuk === "true") {
                        console.log("Tidak bisa hapus poin, Poin yang dipilih telah masuk");
                        return res.json({
                            message: "Tidak bisa hapus poin, Poin yang dipilih telah masuk"
                        })
                    }
                    //delete last input poin
                    result = await Juri2.destroy({where:{id:getLog2.id}}) 
                } else if (juri === 3) {
                    const getLog3 = await Juri3.findOne({
                        where: {id_juri: req.params.id_juri},
                        order:[
                            ["createdAt","DESC"]
                        ]
                    })
                    if (getLog3.masuk === "true") {
                        console.log("Tidak bisa hapus poin, Poin yang dipilih telah masuk");
                        return res.json({
                            message: "Tidak bisa hapus poin, Poin yang dipilih telah masuk"
                        })
                    }
                    //delete last input poin
                    result = await Juri3.destroy({where:{id:getLog3.id}})
                }
            } else if (!getJuri) {
                return res.json({
                    message: "Juri tidak ditemukan"
                })
            }

            return deleteResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    addJatuhanBiru,
    deleteJatuhanBiru,

    addBinaanBiru,
    deleteBinaanBiru,

    addTeguranBiru,
    deleteTeguranBiru,
    
    addPeringatanBiru,
    deletePeringatanBiru
}