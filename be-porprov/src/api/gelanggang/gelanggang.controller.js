const models = require("../../models/index");
const Gelanggang = models.gelanggang
const { getResponse, addResponse, errorResponse, editResponse, deleteResponse } = require("../../helpers")
const {v4 : uuidv4} = require('uuid')

module.exports = {
    getAll: async (req,res) => {
        try{
            const nama = await Gelanggang.findAll({
                order: [
                    ['gelanggang', 'ASC'],
                ],
            })
            return getResponse( req, res, nama )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    addGelanggang: async (req,res) => {
        try{
            const id = uuidv4()
            let data = {
                id: id,
                gelanggang: req.body.gelanggang,
            }
            const result = await Gelanggang.create(data)
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    editGelanggang: async (req,res) =>{
        try{
            let param = {id: req.params.id}
            let data = {
                gelanggang: req.body.gelanggang
            }
            const result = await Gelanggang.update(data, {where:param})
            return editResponse( req, res, result )
        }catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    deleteGelanggang: async (req,res) =>{
        try{
            let param = {id: req.params.id}
            const result = await Gelanggang.destroy({where:param})
            return deleteResponse ( req, res, result ) 
        }catch (error) {
            return errorResponse( req, res, error.message)
        }
    } 
}