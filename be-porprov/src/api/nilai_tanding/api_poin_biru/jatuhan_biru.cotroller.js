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
    addJatuhanBiru: async (req,res) => {
        try {
            const getNilai = await Nilai.findOne({
                where:{id_jadwal : req.body.id_jadwal, babak: req.body.babak}
            })

            //set data for poin jatuhan 
            let data = {
                id: uuidv4(),
                id_poin: getNilai.id_poin_biru,
                poin: 3
            }
            let result = await Jatuhan.create(data)

            //update total poin pada tabel nilai
            const getPoin = await Poin.findOne({
                where: {id: getNilai.id_poin_biru}
            })
            let data_poin = {
                jatuhan: (getPoin.jatuhan) + (result.poin),
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

            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    deleteJatuhanBiru: async (req,res) => {
        try {
            const getNilai = await Nilai.findOne({
                where:{id_jadwal : req.body.id_jadwal, babak: req.body.babak}
            })

            const getJatuhan = await Jatuhan.findOne({
                where: {id_poin: getNilai.id_poin_biru}
            })
            
            if (getJatuhan) {
                let result = await Jatuhan.destroy({where: {id: getJatuhan.id}})
                //update total poin pada tabel nilai
                const getPoin = await Poin.findOne({
                    where: {id: getNilai.id_poin_biru}
                })
                let data_poin = {
                    jatuhan: (getPoin.jatuhan) - 3,
                    total_poin: (getPoin.total_poin) - 3
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
                    total_biru: (getJadwal.total_biru) - 3
                }
                await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                .then(result => {
                    console.log("total nilai updated");
                })
                .catch(error => {
                    console.log(error.message);
    
                })
    
                return addResponse( req, res, result )
            } else if(!getJatuhan){
                return res.json({
                    message: "data jatuhan kosong"
                })
            }
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
}