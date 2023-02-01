const models = require("../../models/index");
const Tgr = models.jadwal_tgr
const Peserta = models.peserta_seni
const Skor = models.skor

const fs = require("fs");
const readline = require("readline");
const { parse } = require("csv-parse");
const {v4 : uuidv4} = require('uuid');
const sequelize = require('sequelize')
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../helpers");
const nilai_tunggal = require("../../models/nilai_tunggal");

module.exports = {
    getAllData: async (req,res) =>{
        try{
            const tgr = await Tgr.findAll({
                attributes:{
                    exclude:['createAt','updateAt']
                },
                order: [
                    // ['no_undian', 'ASC'],
                ],
            })
            return getResponse( req, res, tgr)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getAllTgr: async (req,res) =>{
        try{
            let kategori = {kategori: req.params.kategori}
            const tgr = await Tgr.findAll({
                where:kategori,
                attributes:{
                    exclude:['createAt','updateAt']
                },
                include:[
                    "biru",
                    "merah",
                    "pemenang",
                    "skor_merah",
                    "skor_biru"
                ],
                order: [
                    // ['no_undian', 'ASC'],
                ],
            })
            return getResponse( req, res, tgr)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getKelas: async (req,res) =>{
        try{
            let kategori = {kategori: req.params.kategori}
            const tgr = await Tgr.findAll({
                where:kategori,
                attributes: 
                [sequelize.fn('DISTINCT', sequelize.col('jk', 'kelas', 'babak')),'jk', 'kelas', 'babak'],
                order: [
                    ['kelas', 'ASC'],
                ],
            })
            return getResponse( req, res, tgr)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getByPoolKelas: async (req,res) =>{
        try{
            let body = {
                kategori: req.params.kategori,
                jk: req.params.jk,
                kelas: req.params.kelas
            }
            const tgr = await Tgr.findAll({
                where:body,
                attributes:{
                    exclude:['createAt','updateAt']
                },
                include:[
                    "biru",
                    "merah",
                    "pemenang"
                ],
                order: [
                    ['partai', 'ASC'],
                ],
            })
            return getResponse( req, res, tgr)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getbyKategori: async (req,res) =>{
        try{
            let body = {
                kategori: req.params.kategori,
                jk: req.params.jk,
                kelas: req.params.kelas,
                babak: req.params.babak
            }
            const tgr = await Tgr.findAll({
                where:body,
                attributes:{
                    exclude:['createAt','updateAt']
                },
                include:[
                    "biru",
                    "merah",
                    "pemenang",
                    "skor_merah",
                    "skor_biru"
                ],
                order: [
                    ['partai', 'ASC'],
                ],
            })
            return getResponse( req, res, tgr)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getTunggalId: async (req,res) =>{
        try{
            let param = {id: req.params.id}
            const tgr = await Tgr.findOne({
                where: param,
                attributes:{
                    exclude:['createdAt','updatedAt']
                },
                include : [
                    {
                        model: models.nilai_tunggal,
                        as: "nilai_tunggal",
                        include:["juri"]
                    }
                ]
            })
            return getResponse( req, res, tgr)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    addTgrTunggal: async (req,res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                partai: req.body.partai,
                id_biru: req.body.id_biru,
                id_merah: req.body.id_merah,
                kategori: "TUNGGAL",
                jk: req.body.jk,
                kelas: req.body.kelas,
                babak: req.body.babak
            }
            let result = await Tgr.create(data)
            let peserta = await Peserta.findOne({
                where: {id: result.id_merah}
            })
            let data2 = {
                jk: peserta.jk,
                kelas: peserta.kelas
            }
            let update = await Tgr.update(data2,{
                where: {id: id}
            })
            return addResponse( req, res, update )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    addTgrGanda: async (req,res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                partai: req.body.partai,
                id_biru: req.body.id_biru,
                id_merah: req.body.id_merah,
                kategori: "GANDA",
                jk: req.body.jk,
                kelas: req.body.kelas,
                babak: req.body.babak
            }
            let result = await Tgr.create(data)
            let peserta = await Peserta.findOne({
                where: {id: result.id_merah}
            })
            let data2 = {
                jk: peserta.jk,
                kelas: peserta.kelas
            }
            let update = await Tgr.update(data2,{
                where: {id: id}
            })
            return addResponse( req, res, update )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    addTgrRegu: async (req,res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                partai: req.body.partai,
                id_biru: req.body.id_biru,
                id_merah: req.body.id_merah,
                kategori: "REGU",
                jk: req.body.jk,
                kelas: req.body.kelas,
                babak: req.body.babak
            }
            let result = await Tgr.create(data)
            let peserta = await Peserta.findOne({
                where: {id: result.id_merah}
            })
            let data2 = {
                jk: peserta.jk,
                kelas: peserta.kelas
            }
            let update = await Tgr.update(data2,{
                where: {id: id}
            })
            return addResponse( req, res, update )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    addTgrSolo: async (req,res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                partai: req.body.partai,
                id_biru: req.body.id_biru,
                id_merah: req.body.id_merah,
                kategori: "solo_kreatif",
                jk: req.body.jk,
                kelas: req.body.kelas,
                babak: req.body.babak
            }
            let result = await Tgr.create(data)
            let peserta = await Peserta.findOne({
                where: {id: result.id_merah}
            })
            let data2 = {
                jk: peserta.jk,
                kelas: peserta.kelas
            }
            let update = await Tgr.update(data2,{
                where: {id: id}
            })
            return addResponse( req, res, update )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    setSelesai: async (req,res) => {
        try{
            let id = {
                id_jadwal: req.params.id_jadwal,
                id_peserta: req.params.id_peserta,
            }
            
            //set selesai peserta
            let data = {
                waktu: req.body.waktu,
                median: req.body.median,
                skor_akhir: req.body.skor_akhir,
                deviasi: req.body.deviasi,
                selesai: 1
            }
            const result = await Skor.update(data, {where:id})

            //cek apakah semua peserta telah selesai
            const peserta = await Tgr.findOne({
                where: {id: req.params.id_jadwal},
                include:[
                "skor_merah",
                "skor_biru"
                ],
            })
            let merah = peserta.skor_merah
            let biru = peserta.skor_biru

            if(merah && biru){

                let satu = merah.selesai
                let dua = biru.selesai
                
                let skorMerah = merah.deviasi
                let skorBiru = biru.deviasi

                console.log("biru " +skorBiru);
                console.log("merah " +skorMerah);

                if(satu === 1 && dua === 1){
                    if(skorMerah < skorBiru){
                        console.log("menang merah");
                        let selesai = {
                            id_pemenang: merah.id_peserta,
                            selesai: 1,
                            aktif: 0
                        }
                        await Tgr.update(selesai, {where: {id: req.params.id_jadwal}})
                    }else if(skorBiru < skorMerah){
                        console.log("menang biru");
                        let selesai = {
                            id_pemenang: biru.id_peserta,
                            selesai: 1,
                            aktif: 0
                        }
                        await Tgr.update(selesai, {where: {id: req.params.id_jadwal}})
                    }
                }

            }else{
                console.log("peserta lain belum selesai");
            }
            return editResponse(req, res, result)

        }catch(error) {
            return errorResponse( req, res, error.message )
        }
    },

    editTgr: async (req,res)=>{
        try{
            let param = {id: req.params.id}

            let data = {
                partai: req.body.partai,
                id_biru: req.body.id_biru,
                id_merah: req.body.id_merah,
                babak: req.body.babak,
                selesai: req.body.selesai,
                aktif: req.body.aktif
            }

            if(req.body.partai){
                let jadwal = await Tgr.findOne({
                    where: param
                })
                let partai = await Tgr.findOne({
                    where:{
                        partai: req.body.partai,
                        kategori: jadwal.kategori
                    },
                })
                console.log(partai);
                if(!partai){
                    const result = await Tgr.update(data, {where: param})
                    return editResponse(req, res, result)
                }else{
                    return res.status(409).json({
                        message: "Partai " + req.body.partai + " sudah ada" 
                    })
                }
            }
                
            const result = await Tgr.update(data, {where: param})
            return editResponse(req, res, result)
        } catch (error) {
            return errorResponse(req, res, error.message)
        }
    },

    deleteTgr: async (req,res)=>{
        try{
            let param = {id: req.params.id}
            let data = {
                id_skor_merah: null,
                id_skor_biru: null
            }
            await Tgr.update(data, {where: param})
            await Skor.destroy({where: {id_jadwal: req.params.id}})

            //hapus nilai setiap peserta sesuai jadwal
            await Tunggal.destroy({where: {id_jadwal: req.params.id}})
            await Ganda.destroy({where: {id_jadwal: req.params.id}})
            await Regu.destroy({where: {id_jadwal: req.params.id}})
            await Hukum.destroy({where: {id_jadwal: req.params.id}})
            
            const result = await Tgr.destroy({where: param}) 
            return deleteResponse( req, res, result)
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    deleteAllTgr: async (req,res)=>{
        try{
            const data = await Tgr.count()
            const result = await Tgr.destroy({truncate: { cascade: false }})
            return deleteResponse( req,res, data )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    }
}