const models = require("../../../models/index")
const Skor = models.detail_nilai_seni
const {v4: uuidv4} = require("uuid")
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../../helpers");

module.exports = {
    getAll: async (req,res) =>{
        try{
            const skor = await Skor.findAll({
                // include:[
                //     "jadwal",
                //     "peserta"
                // ]
            })
            return getResponse( req, res, skor)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    getById: async (req,res) =>{
        try{
            let param = {
                id: req.params.id,
            }
            const skor = await Skor.findOne({
                where: param
            })
            return getResponse( req, res, skor)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    getbyJadwalandPeserta: async (req,res) =>{
        try{
            let param = {
                id_jadwal: req.params.id_jadwal,
                id_peserta: req.params.id_peserta
            }
            const skor = await Skor.findOne({
                where:param,
                include:[
                    "jadwal",
                    "peserta"
                ]
            })
            return getResponse( req, res, skor)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    addSkor: async (req, res) => {
        try{
            const id = uuidv4()
            let data = {
                id: id,
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta,
                babak: req.body.babak,
                skor_akhir: req.body.skor_akhir,
                deviasi: req.body.deviasi,
            }
            let result = await Skor.create(data)
            return addResponse( req, res, result )
        }catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    editSkor: async (req, res) => {
        try{
            let id = {id: req.params.id}
            let data = {
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta,
                babak: req.body.babak,
                skor_akhir: req.body.skor_akhir,
                deviasi: req.body.deviasi,
            }
            let result = await Skor.update(data, {where:id})
            return editResponse( req, res, result )
        }catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    deleteSkor: async (req, res) => {
        try{
            let param = {id: req.params.id}
            const result = await Tgr.destroy({where: param}) 
            return deleteResponse( req, res, result)
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    }
}