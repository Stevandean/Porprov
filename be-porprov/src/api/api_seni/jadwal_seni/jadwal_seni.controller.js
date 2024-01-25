const models = require("../../../models/index");
const Seni = models.jadwal_seni
const Tunggal = models.nilai_tunggal
const Ganda = models.nilai_ganda
const Regu = models.nilai_regu
const Hukum = models.hukum_seni
const Peserta = models.peserta_seni
const Nilai = models.detail_nilai_seni
const Timer = models.timer_seni

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
} = require("../../../helpers");
const nilai_tunggal = require("../../../models/nilai_tunggal");

module.exports = {
    getAllData: async (req,res) =>{
        try{
            const tgr = await Seni.findAll({
                include:[
                    //join peserta biru
                    {
                        model: models.peserta_seni,
                        as: "biru",
                        attributes: ['id','nama1','nama2','nama3',
                            // 'kategori',
                            // 'golongan'
                        ]
                    },
                    //join peserta merah
                    {
                        model: models.peserta_seni,
                        as: "merah",
                        attributes: ['id','nama1','nama2','nama3',
                            // 'kategori',
                            // 'golongan'
                        ]
                    },
                    //join pemenang
                    {
                        model: models.peserta_seni,
                        as: "pemenang",
                        attributes: ['id','nama1','nama2','nama3',
                            // 'kategori',
                            // 'golongan'
                        ]
                    },
                    "nilai_merah",
                    "nilai_biru",
                    //join gelanggang
                    {
                        model: models.gelanggang,
                        as: "gelanggang",
                        attributes: ['gelanggang',]
                    }
                ],
                attributes: {
                    exclude: ["createdAt","updatedAt"]
                },
                order: [
                    [{model: models.gelanggang, as: "gelanggang"}, 'gelanggang', 'ASC'],
                    ['partai', 'ASC'],
                ],
            })
            return getResponse( req, res, tgr)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getAllSeni: async (req,res) =>{
        try{
            let kategori = {event_id: req.user.event_id,kategori: req.params.kategori}
            const tgr = await Seni.findAll({
                where:kategori,
                include:[
                    //join peserta biru
                    {
                        model: models.peserta_seni,
                        as: "biru",
                        attributes: ['id','nama1','nama2','nama3',
                            'kategori',
                            'golongan',
                            'kontingen',
                            'jk'
                        ]
                    },
                    //join peserta merah
                    {
                        model: models.peserta_seni,
                        as: "merah",
                        attributes: ['id','nama1','nama2','nama3',
                            'kategori',
                            'golongan',
                            'kontingen',
                            'jk'
                        ]
                    },
                    //join pemenang
                    {
                        model: models.peserta_seni,
                        as: "pemenang",
                        attributes: ['id','nama1','nama2','nama3',
                            'kategori',
                            'golongan',
                            'kontingen',
                            'jk'
                        ]
                    },
                    "nilai_merah",
                    "nilai_biru",
                    //join gelanggang
                    {
                        model: models.gelanggang,
                        as: "gelanggang",
                        attributes: ['gelanggang',]
                    }
                ],
                attributes: {
                    exclude: ["createdAt","updatedAt"]
                },
                order: [
                    [{model: models.gelanggang, as: "gelanggang"}, 'gelanggang', 'ASC'],
                    ['partai', 'ASC'],
                ],
            })
            return getResponse( req, res, tgr)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    
    getbyGelanggang: async (req,res)=>{
        try{
            let param = {event_id: req.user.event_id}
            const tanding = await Seni.findAll({
                where:param,
                attributes:{
                    exclude:['createdAt','updatedAt']
                },
                include:[
                    //join peserta biru
                    {
                        model: models.peserta_seni,
                        as: "biru",
                        attributes: ['id','nama1','nama2','nama3', 'kontingen',
                            'kategori',
                            'golongan',
                            'jk'
                        ]
                    },
                    //join peserta merah
                    {
                        model: models.peserta_seni,
                        as: "merah",
                        attributes: ['id','nama1','nama2','nama3', 'kontingen',
                            'kategori',
                            'golongan',
                            'jk'
                        ]
                    },
                    //join pemenang
                    {
                        model: models.peserta_seni,
                        as: "pemenang",
                        attributes: ['id','nama1','nama2','nama3', 'kontingen',
                            'kategori',
                            'golongan',
                            'jk'
                        ]
                    },
                    "nilai_merah",
                    "nilai_biru",
                    //join gelanggang
                    {
                        model: models.gelanggang,
                        where: {gelanggang: req.params.gelanggang},
                        as: "gelanggang",
                        attributes: ['gelanggang',]
                    }
                ],
                attributes: {
                    exclude: ["createdAt","updatedAt"]
                },
                order: [
                    [{model: models.gelanggang, as: "gelanggang"}, 'gelanggang', 'ASC'],
                    ['partai', 'ASC'],
                ],
            })
            return getResponse( req, res, tanding )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getKelas: async (req,res) =>{
        try{
            let kategori = {kategori: req.params.kategori}
            const tgr = await Seni.findAll({
                where:kategori,
                attributes: 
                [sequelize.fn('DISTINCT', sequelize.col('jk', 'kelas')),'jk', 'kelas'],
                order: [
                    ['kelas', 'ASC'],
                ],
            })
            return getResponse( req, res, tgr)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getKelasAktif: async (req,res) =>{
        try{
            let kategori = {
                kategori: req.params.kategori,
                aktif: 1
            }
            const tgr = await Seni.findAll({
                where:kategori,
                attributes: 
                [sequelize.fn('DISTINCT', sequelize.col('jk', 'kelas')),'jk', 'kelas'],
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
            const tgr = await Seni.findAll({
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

    getbyKategori: async (req,res) =>{
        try{
            let body = {
                kategori: req.params.kategori,
                jk: req.params.jk,
                kelas: req.params.kelas
            }
            const tgr = await Seni.findAll({
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

    getbyId: async (req,res) =>{
        try{
            let param = {id: req.params.id}
            const tgr = await Seni.findOne({
                where: param,
                attributes:{
                    exclude:['createdAt','updatedAt']
                },
                include : [
                    "biru",
                    "merah",
                    "pemenang",
                    "nilai_biru",
                    "nilai_merah"
                ]
            })
            return getResponse( req, res, tgr)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    addJadwalSeni: async (req,res)=>{
        try{
            let param = (req.params.kategori)
            let kategori = param.toUpperCase()
            let data = {
                gelanggang_id: req.body.gelanggang_id,
                partai: req.body.partai,
                id_peserta_biru: req.body.id_peserta_biru,
                id_peserta_merah: req.body.id_peserta_merah,
                kategori: kategori,
                jk: req.body.jk,
                golongan: req.body.golongan,
                babak: req.body.babak,
                event_id: req.user.event_id
            }
            let cekPartai = await Seni.findOne({
                where: {
                    partai: req.body.partai,
                    kategori: kategori,
                    gelanggang_id: req.body.gelanggang_id
                }
            })

            if(cekPartai){
                return res.status(400).json({
                    message: `partai ${req.body.partai} sudah ada`
                })
            } else {
                let result = await Seni.create(data)
                return addResponse( req, res, result )
            }
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    addSeniGanda: async (req,res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                gelanggang: req.body.gelanggang,
                partai: req.body.partai,
                id_biru: req.body.id_biru,
                id_merah: req.body.id_merah,
                kategori: "GANDA",
                jk: req.body.jk,
                kelas: req.body.kelas,
                babak: req.body.babak
            }
            let cekPartai = await Seni.findOne({
                where: {
                    partai: req.body.partai,
                    kategori: "GANDA",
                }
            })

            if(cekPartai){
                return res.json({
                    message: `partai ${req.body.partai} sudah ada`
                })
            } else {
                let result = await Seni.create(data)
                return addResponse( req, res, result )
            }
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    addSeniRegu: async (req,res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                gelanggang: req.body.gelanggang,
                partai: req.body.partai,
                id_biru: req.body.id_biru,
                id_merah: req.body.id_merah,
                kategori: "REGU",
                jk: req.body.jk,
                kelas: req.body.kelas,
                babak: req.body.babak
            }
            let cekPartai = await Seni.findOne({
                where: {
                    partai: req.body.partai,
                    kategori: "REGU",
                }
            })

            if(cekPartai){
                return res.json({
                    message: `partai ${req.body.partai} sudah ada`
                })
            } else {
                let result = await Seni.create(data)

                let peserta = await Peserta.findOne({
                    where: {id: result.id_merah}
                })
    
                let data2 = {
                    jk: peserta.jk,
                    kelas: peserta.kelas
                }
                let update = await Seni.update(data2,{
                    where: {id: id}
                })
                return addResponse( req, res, update )
            }
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    addSeniSolo: async (req,res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                gelanggang: req.body.gelanggang,
                partai: req.body.partai,
                id_biru: req.body.id_biru,
                id_merah: req.body.id_merah,
                kategori: "SOLO_KREATIF",
                jk: req.body.jk,
                kelas: req.body.kelas,
                babak: req.body.babak
            }
            let cekPartai = await Seni.findOne({
                where: {
                    partai: req.body.partai,
                    kategori: "SOLO_KREATIF",
                }
            })

            if(cekPartai){
                return res.json({
                    message: `partai ${req.body.partai} sudah ada`
                })
            } else {
                let result = await Seni.create(data)

                let peserta = await Peserta.findOne({
                    where: {id: result.id_merah}
                })
    
                let data2 = {
                    jk: peserta.jk,
                    kelas: peserta.kelas
                }
                let update = await Seni.update(data2,{
                    where: {id: id}
                })
                return addResponse( req, res, update )
            }
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    setSelesai: async (req,res) => {
        try{
            const id_jadwal= req.params.id_jadwal
            const id_peserta= req.params.id_peserta
            
            //cek apakah semua peserta telah selesai
            const peserta = await Seni.findOne({
                where: {id: req.params.id_jadwal},
                include:[
                "nilai_merah",
                "nilai_biru",
                ],
            })
            
            //set selesai peserta
            let data = {
                median: req.body.median,
                hukuman: req.body.hukuman,
                skor_akhir: req.body.skor_akhir,
                deviasi: req.body.deviasi,
                selesai: 1
            }
            
            let id_nilai
            if (id_peserta === peserta.id_peserta_biru) {
                id_nilai = peserta.id_nilai_biru
            } else if (id_peserta === peserta.id_peserta_merah){
                id_nilai = peserta.id_nilai_merah
            }
            const update_peserta = await Nilai.update(data, {where: {id: id_nilai}})

            const peserta_updated = await Seni.findOne({
                where: {id: req.params.id_jadwal},
                include:[
                "nilai_merah",
                "nilai_biru",
                ],
            })

            console.log(peserta_updated);

            let merah = peserta_updated.nilai_merah
            let biru = peserta_updated.nilai_biru

            let result= []

            if(merah.selesai == true && biru.selesai == true){
                
                let skorMerah = merah.skor_akhir
                let skorBiru = biru.skor_akhir
                let devMerah = merah.deviasi
                let devBiru = biru.deviasi

                console.log("biru " + devBiru);
                console.log("merah " + devMerah);

                if(skorMerah > skorBiru){
                    console.log("menang merah skor");
                    let selesai = {
                        id_pemenang: peserta.id_peserta_merah,
                        selesai: 1,
                        aktif: 0
                    }
                    result = await Seni.update(selesai, {where: {id: req.params.id_jadwal}})
                }else if(skorBiru > skorMerah){
                    console.log("menang biru skor");
                    let selesai = {
                        id_pemenang: peserta.id_peserta_biru,
                        selesai: 1,
                        aktif: 0
                    }
                    result = await Seni.update(selesai, {where: {id: req.params.id_jadwal}})
                }else if (skorBiru = skorMerah) {
                    if(devMerah < devBiru){
                        console.log("menang merah deviasi");
                        let selesai = {
                            id_pemenang: peserta.id_peserta_merah,
                            selesai: 1,
                            aktif: 0
                        }
                        result = await Seni.update(selesai, {where: {id: req.params.id_jadwal}})
                    } else if (devBiru < devMerah){
                        console.log("menang biru deviasi");
                        let selesai = {
                            id_pemenang: peserta.id_peserta_biru,
                            selesai: 1,
                            aktif: 0
                        }
                        result = await Seni.update(selesai, {where: {id: req.params.id_jadwal}})
                    } else {
                        return res.json({
                            status: false,
                            message: "Tidak dapat menyelesaikan pertandingan Karena Nilai sama"
                        })
                    }
                }
            } else {
                console.log("peserta lain belum selesai");
            }
            return editResponse(req, res, result)

        }catch(error) {
            return errorResponse( req, res, error.message )
        }
    },

    editSeni: async (req,res)=>{
        try{
            let param = {id: req.params.id}

            let data = {
                gelanggang_id: req.body.gelanggang_id,
                golongan: req.body.golongan,
                jk: req.body.jk,
                partai: req.body.partai,
                id_peserta_biru: req.body.id_peserta_biru,
                id_peserta_merah: req.body.id_peserta_merah,
                babak: req.body.babak,
                selesai: req.body.selesai,
                aktif: req.body.aktif,
                id_pemenang: req.body.id_pemenang
            }

            if(req.body.partai){
                let jadwal = await Seni.findOne({
                    where: param
                })
                let partai = await Seni.findOne({
                    where:{
                        partai: req.body.partai,
                        kategori: jadwal.kategori
                    },
                })
                console.log(partai);
                if(!partai || partai.partai == jadwal.partai){
                    const result = await Seni.update(data, {where: param})
                    return editResponse(req, res, result)
                }else{
                    return res.status(409).json({
                        message: "Partai " + req.body.partai + " sudah ada" 
                    })
                }
            }
                
            const result = await Seni.update(data, {where: param})
            return editResponse(req, res, result)
        } catch (error) {
            return errorResponse(req, res, error.message)
        }
    },

    deleteSeni: async (req,res)=>{
        try{
            let param = {id: req.params.id}

            let data = await Seni.findOne({where: param})

            await Seni.update(data, {where: param})
            await Nilai.destroy({where: {id: data.id_nilai_biru}})
            await Nilai.destroy({where: {id: data.id_nilai_merah}})


            //hapus nilai setiap peserta sesuai jadwal
            await Tunggal.destroy({where: {id_jadwal: req.params.id}})
            await Ganda.destroy({where: {id_jadwal: req.params.id}})
            await Regu.destroy({where: {id_jadwal: req.params.id}})
            await Hukum.destroy({where: {id_jadwal: req.params.id}})
            
            const result = await Seni.destroy({where: param}) 
            return deleteResponse( req, res, result)
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    deleteAllSeni: async (req,res)=>{
        try{
            const data = await Seni.count()
            const result = await Seni.destroy({truncate: { cascade: false }})
            return deleteResponse( req,res, data )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    getTimer: async (req,res) => {
        try {
            const result = await Timer.findOne({
                where: {
                    id_jadwal: req.params.id_jadwal,
                    id_peserta: req.params.id_peserta
                }
            })
            return getResponse ( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    startTimer: async (req,res) => {
        try {
            let data = {
                id: uuidv4(),
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta,
                running: true,
                start: new Date().toISOString()
            }

            let cek = await Timer.findOne({
                where: {
                    id_jadwal: req.body.id_jadwal,
                    id_peserta: req.body.id_peserta
                }
            })

            let result = []
            if(cek){
                console.log("Jadwal Peserta Telah Dimulai")
                return res.json({
                    message: "Jadwal Peserta telah dimulai"
                })
            } else {
                result = await Timer.create(data)
            }
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    timerSelesai: async (req,res) => {
        try{
            let id = {
                id_jadwal: req.body.id_jadwal,
                id_peserta: req.body.id_peserta
            }

            const id_jadwal = req.body.id_jadwal
            const id_peserta = req.body.id_peserta

            const getTimer = await Timer.findOne({where: id})


            if (getTimer.selesai === true) {
                return res.json({
                    message: "Pertandingan telah selesai"
                })
            } else {
                let data = {
                    running: false,
                    finish: new Date().toISOString(),
                    selesai: 1
                }
                let result = await Timer.update(data, {where: id})
    
                //cek apakah semua peserta telah selesai
                const peserta = await Seni.findOne({
                    where: {id: req.body.id_jadwal},
                    include:[
                    "nilai_merah",
                    "nilai_biru",
                    ],
                })


                let id_nilai
                if (id_peserta === peserta.id_peserta_biru) {
                    id_nilai = peserta.id_nilai_biru
                } else if (id_peserta === peserta.id_peserta_merah){
                    id_nilai = peserta.id_nilai_merah
                }

                let waktu = {
                    waktu: req.body.waktu
                }
                const update_peserta = await Nilai.update(waktu, {where:{id: id_nilai}})
                return editResponse( req, res, result )
            }
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    }
}