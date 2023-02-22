const models = require('../../models/index')
const Hukum = models.hukum_tgr
const {v4 : uuid4} = require("uuid")
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../helpers");

module.exports = {
    getAllHukum: async (req,res) =>{
        try{
            const result = await Hukum.findAll()
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    getHukumbyjadwal: async (req,res) =>{
        try{
            const id = {                
                id_jadwal: req.params.id_jadwal,
                id_peserta: req.params.id_peserta
            }
            const result = await Hukum.findOne({
                where:id,
                include: [
                    // "jadwal",
                    // "peserta"
                ],
            })
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    addHukum: async (req,res) => {
        try{
            const id = uuid4()
            let data = {
                id: id,
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta,
                hukum1: req.body.hukum1,
                hukum2: req.body.hukum2,
                hukum3: req.body.hukum3,
                hukum4: req.body.hukum4,
                hukum5: req.body.hukum5,
                hukum6: req.body.hukum6
            }
            let cek = await Hukum.findOne({
                where:{                
                    id_jadwal: req.body.id_jadwal,
                    id_peserta: req.body.id_peserta
                }
            })
            if(cek){
                res.status(400).json({
                    "message":"data exist"
                })
            } else{
                let result = await Hukum.create(data)
                return addResponse( req, res, result )   
            }
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    editHukum: async (req,res) =>{
        try{
            let id = {
                id_jadwal: req.params.id_jadwal,
                id_peserta: req.params.id_peserta
            }

            //set hukum
            let data = {
                hukum1: req.body.hukum1,
                hukum2: req.body.hukum2,
                hukum3: req.body.hukum3,
                hukum4: req.body.hukum4,
                hukum5: req.body.hukum5,
                hukum6: req.body.hukum6
            }
            let result = await Hukum.update(data, {where:id})

            //set total hukum
            let newHukum = await Hukum.findOne({where:id})

            let total = {
                total: (
                    newHukum.hukum1 + 
                    newHukum.hukum2 + 
                    newHukum.hukum3 + 
                    newHukum.hukum4 + 
                    newHukum.hukum5 + 
                    newHukum.hukum6
                    ) 
            }

            await Hukum.update(total, {where:id})

            return editResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    deleteHukum: async (req,res) =>{
        try{
            let id = {id: req.params.id}
            let result = await Hukum.destroy({where:id})
            return deleteResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    }

}