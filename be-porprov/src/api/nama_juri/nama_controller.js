const models = require("../../models/index");
const Nama = models.nama_juri
const { getResponse, addResponse, errorResponse, editResponse, deleteResponse } = require("../../helpers")
const {v4 : uuidv4} = require('uuid')

module.exports = {
    getAll: async (req,res) => {
        try{
            const nama = await Nama.findAll()
            return getResponse( req, res, nama )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    addNama: async (req,res) => {
        try{
            const id = uuidv4()
            let data = {
                id: id,
                nama: req.body.nama,
            }
            const result = await Nama.create(data)
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    editNama: async (req,res) =>{
        try{
            let param = {id: req.params.id}
            let data = {
                nama: req.body.nama
            }
            const result = await Nama.update(data, {where:param})
            return editResponse( req, res, result )
        }catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    deleteNama: async (req,res) =>{
        try{
            let param = {id: req.params.id}
            const result = await Nama.destroy({where:param})
            return deleteResponse ( req, res, result ) 
        }catch (error) {
            return errorResponse( req, res, error.message)
        }
    } 
}