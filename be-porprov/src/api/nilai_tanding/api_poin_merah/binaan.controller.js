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
    addBinaanMerah: async (req,res) => {
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })
    
            const getBinaan = await Binaan.findOne({
                where: {id_poin: getNilai.id_poin_merah}
            })
    
            let result = []
            if(getBinaan){
                if(getBinaan.poin === "1x"){
                    //set data binaan
                    let data = {
                        poin: "2x"
                    }
                    result = await Binaan.update(data, {where: {id_poin: getNilai.id_poin_merah}})
                } else if (getBinaan.poin === "2x") {
                    return res.json({
                        message: "binaan sudah 2x"
                    })
                }
            } else if (!getBinaan) {
                let data = {
                    id: uuidv4(),
                    id_poin: getNilai.id_poin_merah,
                    poin: "1x"
                }
                result = await Binaan.create(data)        
                    
            }
            return addResponse( req, res, result )   
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    deleteBinaanMerah: async (req,res) => {
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })
    
            const getBinaan = await Binaan.findOne({
                where: {id_poin: getNilai.id_poin_merah}
            })
    
            let result = []
            if (getBinaan) {
                if (getBinaan.poin === "1x") {
                    result = await Binaan.destroy({
                        where: {id: getBinaan.id}
                    })       
                } else if (getBinaan.poin === "2x") {
                    let data = {
                        poin: "1x"
                    }
                    result = await Binaan.update(data, {where: {id_poin: getNilai.id_poin_merah}})
                    return editResponse(req,res,result)
                }
            } else {
                return res.json({
                    message: "data binaan tidak ditemukan"
                })
            }
            
            return deleteResponse( req, res, result)
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    }
}