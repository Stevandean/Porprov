const models = require("../../models/index")
const Peserta = models.peserta_seni

const fs = require("fs");
const readline = require("readline");
const { parse } = require("csv-parse");

const {v4 : uuidv4} = require("uuid")
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../helpers");

module.exports = {
    getAllPeserta: async (req,res) =>{
        try{
            const peserta = await Peserta.findAll()
            return getResponse( req, res, peserta )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    
    getPesertabyId: async (req,res) =>{
        try{
            const peserta = await Peserta.findOne({
                where: {id: req.params.id}
            })
            return getResponse( req, res, peserta )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getAllTgr: async (req,res) =>{
        try{
            let kategori = {kategori: req.params.kategori}
            const tgr = await Peserta.findAll({
                where:kategori,
                attributes:{
                    exclude:['createAt','updateAt']
                },
                order:[
                    ['kelas', 'ASC'],
                    ['jk', 'ASC'],
                    ['nama1', 'ASC'],
                ]
            })
            return getResponse( req, res, tgr)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    importTunggal: async (req, res)=>{
        try{
            let file = "src/tmp/tgr.csv"
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
                        kategori: 'tunggal',
                        jk: tgr[1],
                        kelas: tgr[2],                    
                        nama1: tgr[4],
                        kontingen: tgr[5]
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

    importGanda: async (req, res)=>{
        try{
            let file = "src/tmp/tgr.csv"
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
                        kategori: 'ganda',
                        jk: tgr[1],
                        kelas: tgr[2],                    
                        nama1: tgr[4],
                        nama2: tgr[5],
                        kontingen: tgr[6]
                    }

                    const result = await Peserta.create(input)
                }
                fs.unlink(file, (err) => console.log(err))
                return addResponse( req, res )
                // data.forEach(element => {
                //     element.id = uuidv4(),
                //     element.tgl = current
                // }) 
            });

        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    importRegu: async (req, res)=>{
        try{
            let file = "src/tmp/tgr.csv"
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
                        kategori: 'regu',
                        jk: tgr[1],
                        kelas: tgr[2],                    
                        nama1: tgr[4],
                        nama2: tgr[5],
                        nama3: tgr[6],
                        kontingen: tgr[7]
                    }

                    const result = await Peserta.create(input)
                }
                fs.unlink(file, (err) => console.log(err))
                return addResponse( req, res )
                // data.forEach(element => {
                //     element.id = uuidv4(),
                //     element.tgl = current
                // }) 
            });

        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    importSolo: async (req, res)=>{
        try{
            let file = "src/tmp/tgr.csv"
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
                        kategori: 'solo_kreatif',
                        jk: tgr[1],
                        kelas: tgr[2],                    
                        nama1: tgr[4],
                        kontingen: tgr[5]
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

    addTunggal: async (req,res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                waktu: req.body.waktu,
                kategori: "tunggal",
                jk: req.body.jk,
                kelas: req.body.kelas,
                nama1: req.body.nama1,
                kontingen: req.body.kontingen
            }
            let result = await Peserta.create(data)
            return addResponse( req, res, result )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    addGanda: async (req,res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                waktu: req.body.waktu,
                kategori: "ganda",
                jk: req.body.jk,
                kelas: req.body.kelas,
                nama1: req.body.nama1,
                nama2: req.body.nama2,
                kontingen: req.body.kontingen
            }
            let result = await Peserta.create(data)
            return addResponse( req, res, result )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    addRegu: async (req,res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                waktu: req.body.waktu,
                kategori: "regu",
                jk: req.body.jk,
                kelas: req.body.kelas,
                nama1: req.body.nama1,
                nama2: req.body.nama2,
                nama3: req.body.nama3,
                kontingen: req.body.kontingen
            }
            let result = await Peserta.create(data)
            return addResponse( req, res, result )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    addSolo: async (req,res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                waktu: req.body.waktu,
                kategori: "solo_kreatif",
                jk: req.body.jk,
                kelas: req.body.kelas,
                nama1: req.body.nama1,
                kontingen: req.body.kontingen
            }
            let result = await Peserta.create(data)
            return addResponse( req, res, result )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    editPeserta: async (req,res)=>{
        try{
            let param = {id: req.params.id}
            let nama1 = req.body.nama1
            let nama2 = req.body.nama2
            let nama3 = req.body.nama3

            let data = {
                gelanggang: req.body.gelanggang,
                pool: req.body.pool,
                jk: req.body.jk,
                kelas: req.body.kelas,
                kontingen: req.body.kontingen,
                gugur: req.body.gugur
            }

            if(nama1 && !nama2 && !nama3){
                data.nama1 = req.body.nama1
            } else if(nama1 && nama2 && !nama3){
                data.nama1 = req.body.nama1
                data.nama2 = req.body.nama2
            } else if(nama1 && nama2 && nama3){
                data.nama1 = req.body.nama1
                data.nama2 = req.body.nama2
                data.nama3 = req.body.nama3
            }

            const result = await Peserta.update(data, {where: param})
            return editResponse(req, res, result)
        } catch (error) {
            return errorResponse(req, res, error.message)
        }
    },

    deletePeserta: async (req,res)=>{
        try{
            let param = {id: req.params.id}
            const result = await Peserta.destroy({where: param}) 
            return deleteResponse( req, res, result)
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },
}