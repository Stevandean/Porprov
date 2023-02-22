const models = require('../../models/index')
const Tunggal = models.nilai_tunggal
const Juri = models.juri
const Hukum = models.hukum_tgr
const Skor = models.skor
const Tgr = models.jadwal_tgr
const {v4 : uuidv4} = require("uuid")
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../helpers");

module.exports = {
    getAllNilai: async (req,res) =>{
        try{
            const tunggal = await Tunggal.findAll()
            return getResponse( req, res, tunggal)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    getbyId: async (req,res) =>{
        try{
            const id = {id: req.params.id} 
            const tunggal = await Tunggal.findAll({
                where: {id: req.params.id},
                include: [
                    "jadwal",
                    "juri"
                ]

            })
            return getResponse( req, res, tunggal)
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
            const tunggal = await Tunggal.findAll({
                where: id,
                include: [
                    "jadwal",
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
            const tunggal = await Tunggal.findOne({
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
            //input hukuman
            const id = uuidv4()
            let dataHukum = {
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
                console.log("data exist");
            } else{
                await Hukum.create(dataHukum)
            }
            
            //input nilai
            let getJuri = await Juri.findAll()
            let count = 0
            
            for (let i = 0; i < getJuri.length; i++) {
                let juri = getJuri[i]
                let idJuri = juri.id
                count++
                
                let data = {
                    id: uuidv4(),
                    id_jadwal: req.body.id_jadwal,
                    id_peserta: req.body.id_peserta,
                    id_juri: idJuri,
                }

                let cek = await Tunggal.findOne(
                    {
                        where:{
                        id_juri: idJuri, 
                        id_jadwal: req.body.id_jadwal,
                        id_peserta: req.body.id_peserta
                        }
                    }
                )

                if(cek){
                    console.log("juri sudah menginput nilai "+ i)
                    if(count === getJuri.length) { 
                        res.status(200).json({
                            status: "true",
                            message: "data nilai juri lengkap"
                        })
                     }
                } else{
                    await Tunggal.create(data)
                    if(count === getJuri.length) { 
                        res.status(200).json({
                            status: "true",
                            message: "data nilai juri lengkap"
                        })
                     }
                }
            } 

            //input skor
            let skor = {
                id: uuidv4(),
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta
            }

            let dataSkor = ""

            let cekSkor = await Skor.findOne({
                where:{                
                    id_jadwal: req.body.id_jadwal,
                    id_peserta: req.body.id_peserta
                }
            })

            let jadwal = await Tgr.findOne({
                where: {
                    id: req.body.id_jadwal
                }
            })
            if(cekSkor){
                console.log("data exist");
                let id = cekSkor.id
                if(jadwal.id_merah === req.body.id_peserta){
                    console.log("merah");
                    let skor = {
                        id_skor_merah: id
                    }
                    await Tgr.update(skor, {where: {id: req.body.id_jadwal}})
                }
                else if(jadwal.id_biru === req.body.id_peserta){
                    console.log("biru");
                    let skor = {
                        id_skor_biru: id
                    }
                    await Tgr.update(skor, {where: {id: req.body.id_jadwal}})
                }
            } else{
                dataSkor = await Skor.create(skor)
                let id = dataSkor.id
                if(jadwal.id_merah === req.body.id_peserta){
                    console.log("merah");
                    let skor = {
                        id_skor_merah: id
                    }
                    await Tgr.update(skor, {where: {id: req.body.id_jadwal}})
                }
                else if(jadwal.id_biru === req.body.id_peserta){
                    console.log("biru");
                    let skor = {
                        id_skor_biru: id
                    }
                    await Tgr.update(skor, {where: {id: req.body.id_jadwal}})
                }
            }
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
            }
            let cek = await Tunggal.findOne(
                {
                    where:{
                    id_juri: req.body.id_juri, 
                    id_jadwal: req.body.id_jadwal,
                    id_peserta: req.body.id_peserta
                    }
                }
            )
            if(cek){
                console.log("juri sudah menginput nilai")
                res.status(200).json({
                    message: "juri sudah menginput nilai"
                })
            } else{
                let result = await Tunggal.create(data)
                return addResponse( req, res, result )   
            }
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    editNilai: async (req,res) =>{
        try{
            let id = {id: req.params.id}
            let getNilai = await Tunggal.findOne({
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
                jurus13: req.body.jurus13,
                jurus14: req.body.jurus14,
                skor_a: 
                nilai.skor_a + (-0.01),
                skor_b: req.body.skor_b,
                nama_juri: req.body.nama_juri
            }
            let result = await Tunggal.update(data, {where:id})


            console.log(nilai.skor_a);

            return editResponse( req, res, result )
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
            let getNilai = await Tunggal.findOne({
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
                jurus13: req.body.jurus13,
                jurus14: req.body.jurus14,
                skor_a: 
                nilai.skor_a + (-0.01),
                total_skor:  (nilai.skor_a + (-0.01)) + nilai.skor_b
            }
            let result = await Tunggal.update(data, {where:id})
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
            let getNilai = await Tunggal.findOne({
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
                jurus13: req.body.jurus13,
                jurus14: req.body.jurus14,
                skor_b: req.body.skor_b,
            }
            if(req.body.skor_b){
                data.total_skor= (nilai.skor_a) + req.body.skor_b
            }
            let result = await Tunggal.update(data, {where:id})
            //update skor akhir dan deviasi pada table skor
            // let skor = {
            //     skor_akhir : 0,
            //     deviasi : 0,
            // }
            // await Skor.update(skor,  )

            return editResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    deleteNilai: async (req,res) =>{
        try{
            let id = {id: req.params.id}
            let result = await Tunggal.destroy({where:id})
            return deleteResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    }

}