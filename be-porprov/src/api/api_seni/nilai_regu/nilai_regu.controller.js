const models = require('../../../models/index')
const Regu = models.nilai_regu
const Juri = models.juri
const Hukum = models.hukum_seni
const Skor = models.detail_nilai_seni
const Tgr = models.jadwal_seni
const {v4 : uuidv4} = require("uuid")
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../../helpers");

module.exports = {
    getAllNilai: async (req,res) =>{
        try{
            const result = await Regu.findAll()
            return getResponse( req, res, result)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    getbyJadwal: async (req,res) =>{
        try{
            const id = {                
                id_jadwal: req.params.id_jadwal,
                id_peserta: req.params.id_peserta
            }
            const tunggal = await Regu.findAll({
                where: id,
                include: [
                    "jadwal",
                    "peserta",
                    "juri"
                ],
                order: [
                    [{model: models.juri, as: "juri"}, "no", "asc"]
                    
                ],

            })
            return getResponse( req, res, tunggal)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    getbyJuri: async (req,res) =>{
        try{
            let id = {
                id_jadwal: req.params.id_jadwal,
                id_peserta: req.params.id_peserta,
                id_juri: req.params.id_juri
            }
            const tunggal = await Regu.findOne({
                where: id,
                include: [
                    "jadwal",
                    "peserta",
                    "juri"
                ],
                order: [
                    [{model: models.juri, as: "juri"}, "no", "asc"]
                    
                ],

            })
            return getResponse( req, res, tunggal)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    addDewan: async (req,res) => {
        try{
            let dataHukum = {
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta,
            }
            
            //cek apakah hukum sudah ada
            let cek = await Hukum.findOne({
                where:{                
                    id_jadwal: req.body.id_jadwal,
                    id_peserta: req.body.id_peserta
                }
            })
            
            if(cek){
                console.log("data hukum exist");
            } else{
                await Hukum.create(dataHukum)
            }

            //input nilai juri
            let getJuri = await Juri.findAll()
            let count = 0
            
            for (let i = 0; i < getJuri.length; i++) {
                console.log('cek nilai juri '+ i);
                let juri = getJuri[i]
                let idJuri = juri.id
                count++
                
                let data = {
                    id: uuidv4(),
                    id_jadwal: req.body.id_jadwal,
                    id_peserta: req.body.id_peserta,
                    id_juri: idJuri,
                }

                let cekNilai = await Regu.findOne(
                    {
                        where:{
                        id_juri: idJuri, 
                        id_jadwal: req.body.id_jadwal,
                        id_peserta: req.body.id_peserta
                        }
                    }
                )

                if(cekNilai){
                    console.log("juri sudah menginput nilai "+ i)
                    if(count === getJuri.length) { 
                        // res.status(200).json({
                        //     status: "true",
                        //     message: "data nilai juri lengkap"
                        // })
                        console.log("data nilai juri lengkap");
                    }
                } else{
                    await Regu.create(data)
                    if(count === getJuri.length) { 
                        // res.status(200).json({
                        //     status: "true",
                        //     message: "data nilai juri lengkap"
                        // })
                        console.log("data nilai juri lengkap");
                    }
                }
            } 

            //input detail nilai
            //get jadwal
            let jadwal = await Tgr.findOne({
                where: {
                    id: req.body.id_jadwal,
                },
                attributes:['id', 'id_nilai_biru', 'id_nilai_merah']
            })

            //cek nilai biru
            if(jadwal.id_nilai_biru === null){
                await Skor.create()
                .then(async res => {
                    let data = {
                        id_nilai_biru: res.id
                    }
                    await Tgr.update(data,{
                        where: {id: jadwal.id}
                    })
                })
            } else {
                console.log("nilai biru exist");
            }

            //cek nilai merah
            if(jadwal.id_nilai_merah === null){
                await Skor.create()
                .then(async res => {
                    let data = {
                        id_nilai_merah: res.id
                    }
                    await Tgr.update(data,{
                        where: {id: jadwal.id}
                    })
                })
            } else {
                console.log("nilai merah exist");
            }

            return res.status(200).json({
                status: "true",
                message: "data nilai juri lengkap"
            })
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    addNilai: async (req,res) => {
        try{
            const id = uuidv4()
            let data = {
                id: id,
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta,
                id_juri: req.body.id_juri,
                nama_juri: req.body.nama_juri,
                jurus1: req.body.jurus1,
                jurus2: req.body.jurus2,
                jurus3: req.body.jurus3,
                jurus4: req.body.jurus4,
                jurus5: req.body.jurus5,
                jurus6: req.body.jurus6,
                jurus7: req.body.jurus7,
                jurus8: req.body.jurus8,
                jurus9: req.body.jurus9,
                jurus10: req.body.jurus10,
                jurus11: req.body.jurus11,
                jurus12: req.body.jurus12,
                jurus13: req.body.jurus13,
                jurus14: req.body.jurus14,
                kemantapan: req.body.kemantapan
            }
            let result = await Regu.create(data)
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    editSkorA: async (req,res) =>{
        try{
            let id = {
                id_jadwal: req.params.id_jadwal,
                id_peserta: req.params.id_peserta,
                id_juri: req.params.id_juri
            }

            //update nilai
            let getNilai = await Regu.findOne({
                where:id
            })

            let nilai = getNilai
            let data = {
                id_juri: req.body.id_juri,
                jurus1: req.body.jurus1,
                jurus2: req.body.jurus2,
                jurus3: req.body.jurus3,
                jurus4: req.body.jurus4,
                jurus5: req.body.jurus5,
                jurus6: req.body.jurus6,
                jurus7: req.body.jurus7,
                jurus8: req.body.jurus8,
                jurus9: req.body.jurus9,
                jurus10: req.body.jurus10,
                jurus11: req.body.jurus11,
                jurus12: req.body.jurus12,
                skor_a: 
                nilai.skor_a + (-0.01),
                total_skor:  (nilai.skor_a + (-0.01)) + nilai.skor_b
            }
            let result = await Regu.update(data, {where:id})
            return editResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    editbyJuri: async (req,res) =>{
        try{
            let id = {
                id_jadwal: req.params.id_jadwal,
                id_peserta: req.params.id_peserta,
                id_juri: req.params.id_juri
            }

            //update nilai
            let getNilai = await Regu.findOne({
                where:id
            })

            let nilai = getNilai
            let data = {
                id_juri: req.body.id_juri,
                nama_juri: req.body.nama_juri,
                jurus1: req.body.jurus1,
                jurus2: req.body.jurus2,
                jurus3: req.body.jurus3,
                jurus4: req.body.jurus4,
                jurus5: req.body.jurus5,
                jurus6: req.body.jurus6,
                jurus7: req.body.jurus7,
                jurus8: req.body.jurus8,
                jurus9: req.body.jurus9,
                jurus10: req.body.jurus10,
                jurus11: req.body.jurus11,
                jurus12: req.body.jurus12,
                skor_b: req.body.skor_b,
            }
            if(req.body.skor_b){
                data.total_skor = (nilai.skor_a) + req.body.skor_b
            }
            let result = await Regu.update(data, {where:id})
            return editResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    editNilai: async (req,res) =>{
        try{
            let id = {id: req.params.id}
            let data = {
                id_juri: req.body.id_juri,
                jurus1: req.body.jurus1,
                jurus2: req.body.jurus2,
                jurus3: req.body.jurus3,
                jurus4: req.body.jurus4,
                jurus5: req.body.jurus5,
                jurus6: req.body.jurus6,
                jurus7: req.body.jurus7,
                jurus8: req.body.jurus8,
                jurus9: req.body.jurus9,
                jurus10: req.body.jurus10,
                jurus11: req.body.jurus11,
                jurus12: req.body.jurus12,
                jurus13: req.body.jurus13,
                jurus14: req.body.jurus14,
                kemantapan: req.body.kemantapan
            }
            let result = await Regu.update(data, {where:id})
            return editResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    deleteNilai: async (req,res) =>{
        try{
            let id = {id: req.params.id}
            let result = await Regu.destroy({where:id})
            return deleteResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    }

}