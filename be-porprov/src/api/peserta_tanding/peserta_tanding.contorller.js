//setting models
const models = require("../../models/index")
const Peserta = models.peserta_tanding

const fs = require("fs");
const readline = require("readline");
const { parse } = require("csv-parse");

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
            const result = await Peserta.findAll({
                order:[
                    ['golongan', 'ASC'],
                    ['kelas', 'ASC'],
                    ['jk', 'ASC'],
                    ['nama', 'ASC']
                ]
            })
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
    },

    importTanding: async (req, res)=>{
        try{
            let file = "src/tmp/tanding.csv"
            const stream = fs.createReadStream(file);
            const reader = readline.createInterface({ input: stream });

            let data = [];

            stream
            .pipe(parse({ delimiter: ",", from_line: 1 }))
            .on("data", function (row) {
            // 👇 split a row string into an array
            // then push into the data array
            data.push(row)

            });

            reader.on("close", async () => {
                // 👇 reached the end of file
                console.log(data)
                for (var i=0; i < data.length; i++){
                    let tgr = data[i]

                    let input = {
                        id: uuidv4(),
                        jk: tgr[0],
                        golongan: tgr[1],
                        kelas: tgr[2],                    
                        nama: tgr[3],
                        kontingen: tgr[4]
                    }

                    const result = await Peserta.create(input)
                }
                fs.unlink(file, (err) => console.log(err))
                return addResponse( req, res )
            });

        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },
}
