const models = require('../../models/index')
const Ganda = models.nilai_ganda
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
            const result = await Ganda.findAll({
                include: [
                    "jadwal",
                    "peserta",
                    // "juri"
                ],
                order: [
                    [{model: models.juri, as: "juri"}, "no", "asc"]
                    
                ],
            })
            return getResponse( req, res, result )
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
            const tunggal = await Ganda.findAll({
                where: id,
                include: [
                    // "jadwal",
                    // "peserta",
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
            const tunggal = await Ganda.findOne({
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
    addDewanganda: async (req,res) => {
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

                let cek = await Ganda.findOne(
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
                    await Ganda.create(data)
                    if(count === getJuri.length) { 
                        res.status(200).json({
                            status: "true",
                            message: "data nilai juri lengkap"
                        })
                     }
                }
            //input skor
            let skor = {
                id: uuidv4(),
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta
            }

            let cekSkor = await Skor.findOne({
                where:{                
                    id_jadwal: req.body.id_jadwal,
                    id_peserta: req.body.id_peserta
                }
            })
            if(cekSkor){
                console.log("data exist");
            } else{
                await Skor.create(skor)
            }

            } 

            //input skor
            let skor = {
                id: uuidv4(),
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta
            }

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
                let dataSkor = await Skor.create(skor)
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
    addDewanSolo: async (req,res) => {
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

                let cek = await Ganda.findOne(
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
                    await Ganda.create(data)
                    if(count === getJuri.length) { 
                        res.status(200).json({
                            status: "true",
                            message: "data nilai juri lengkap"
                        })
                     }
                }
            //input skor
            let skor = {
                id: uuidv4(),
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta
            }

            let cekSkor = await Skor.findOne({
                where:{                
                    id_jadwal: req.body.id_jadwal,
                    id_peserta: req.body.id_peserta
                }
            })
            if(cekSkor){
                console.log("data exist");
            } else{
                await Skor.create(skor)
            }

            } 

            //input skor
            let skor = {
                id: uuidv4(),
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta
            }

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
                let dataSkor = await Skor.create(skor)
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
                technique: req.body.teknik,
                firmness: req.body.kemantapan,
                soulfulness: req.body.serasi
            }
            let result = await Ganda.create(data)
            return addResponse( req, res, result )
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
            // update nilai
            let data = {
                id_juri: req.body.id_juri,
                nama_juri: req.body.nama_juri,
                technique: req.body.technique,
                firmness: req.body.firmness,
                soulfulness: req.body.soulfulness
            }
            let result = await Ganda.update(data, {where:id})

            // hitung total dan total skor
            let nilai = await Ganda.findOne({
                where:id,
                attrbutes:['technique','firmness','soulfulness']
            })
            let total = {
                total: (
                    nilai.technique+
                    nilai.firmness+
                    nilai.soulfulness
                    ),
                total_skor: (
                    9.10 +
                    (
                        nilai.technique+
                        nilai.firmness+
                        nilai.soulfulness
                    )
                )
            }
            // console.log(total.total_skor)
            await Ganda.update(total,{where:id})
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
                teknik: req.body.teknik,
                kemantapan: req.body.kemantapan,
                serasi: req.body.serasi
            }
            let result = await Ganda.update(data, {where:id})
            return editResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    deleteNilai: async (req,res) =>{
        try{
            let id = {id: req.params.id}
            let result = await Ganda.destroy({where:id})
            return deleteResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    }

}