//setting models
const models = require("../../models/index")
const Peserta = models.peserta_tanding

//import helpers
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../helpers");

//import uuid
const {v4 : uuidv4} = require("uuid")

module.exports = {
    getAll: async (req,res) =>{
        try{
            const result = await Peserta.findAll()
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getbyId: async (req, res) =>{
        try{
            const result = await Peserta.findOne({
                where:{id: req.params.id}
            })
            return getResponse( req, res, result )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    addPeserta: async (req,res) =>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                golongan: req.body.golongan,
                jk: req.body.jk,
                kelas: req.body.kelas,
                nama: req.body.nama,
                kontingen: req.body.kontingen,
                kota: req.body.kota,
                umur: req.body.umur,
                tinggi_badan: req.body.tinggi_badan,
                berat_badan: req.body.berat_badan
            }
            let result = await Peserta.create(data)
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    editPeserta: async (req,res) => {
        try{
            let param = {id: req.params.id}
            let data = {
                golongan: req.body.golongan,
                jk: req.body.jk,
                kelas: req.body.kelas,
                nama: req.body.nama,
                kontingen: req.body.kontingen,
                kota: req.body.kota,
                umur: req.body.umur,
                tinggi_badan: req.body.tinggi_badan,
                berat_badan: req.body.berat_badan
            }
            let result = await Peserta.update(data, {where: param})
            return editResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    deletePeserta: async (req,res) => {
        try{
            let param = {id: req.params.id}
            const result = await Peserta.destroy({where: param})
            return deleteResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    }
}
