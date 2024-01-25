const models = require("../../../models/index.js")
const Tanding = models.jadwal_tanding
const Timer = models.timer_tanding
const logPause = models.log_pause_tanding
const fs = require("fs");
const readline = require("readline");
const { parse } = require("csv-parse");
const {v4 : uuidv4} = require('uuid')
const { 
    getResponse, 
    addResponse, 
    editResponse, 
    deleteResponse, 
    errorResponse 
} = require("../../../helpers");

module.exports = {
    getAll: async (req,res)=>{
        try{
            const tanding = await Tanding.findAll({
                attributes:{
                    exclude:['createdAt','updatedAt']
                },
                include:[
                    "biru",
                    "merah",
                    "pemenang",
                    "gelanggang"
                ],
                order:[
                    [{model: models.gelanggang, as: "gelanggang"}, 'gelanggang', 'ASC'],
                    ['partai', 'ASC']
                ]
            })
            return getResponse( req, res, tanding )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    getId: async (req,res)=>{
        try{
            let param = {id: req.params.id}
            const tanding = await Tanding.findOne({
                where:param,
                attributes:{
                    exclude:['createdAt','updatedAt']
                },
                include:[
                    {
                        model: models.peserta_tanding,
                        as:"biru",
                        attributes: ['id','nama', 'kontingen']
                    },
                    {
                        model: models.peserta_tanding,
                        as:"merah",
                        attributes: ['id','nama', 'kontingen']
                    },
                    {
                        model: models.peserta_tanding,
                        as:"pemenang",
                        attributes: ['id','nama', 'kontingen']
                    },
                ],
            })
            return getResponse( req, res, tanding )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getbyGelanggang: async (req,res)=>{
        try{
            let param 
            if (req.user.event_id != null) {
                param = {
                    event_id: req.user.event_id
                }
            }

            if (req.user.event_id != null) {
                param = {
                    event_id: req.user.event_id
                }
            }

            const tanding = await Tanding.findAll({
                where:param,
                attributes:{
                    exclude:['createdAt','updatedAt']
                },
                include:[
                    {
                        model: models.peserta_tanding,
                        as:"biru",
                        attributes: ['id','nama', 'kontingen']
                    },
                    {
                        model: models.peserta_tanding,
                        as:"merah",
                        attributes: ['id','nama', 'kontingen']
                    },
                    {
                        model: models.peserta_tanding,
                        as:"pemenang",
                        attributes: ['id','nama', 'kontingen']
                    },
                    {
                        model: models.gelanggang,
                        where: {gelanggang: req.params.gelanggang},
                        as: "gelanggang",
                        attributes: ['gelanggang',]
                    }
                ],
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

    addTanding: async (req, res)=>{
        try{
            const id = uuidv4()
            let data = {
                id: id,
                golongan: req.body.golongan,
                jk: req.body.jk,
                kelas: req.body.kelas,
                babak: req.body.babak,
                gelanggang_id: req.body.gelanggang_id,
                partai: req.body.partai,
                id_peserta_merah: req.body.id_peserta_merah,
                id_peserta_biru: req.body.id_peserta_biru,
                id_nilai_merah: req.body.id_nilai_merah,
                id_nilai_biru: req.body.id_nilai_biru,
                id_pemenang: req.body.id_pemenang,
                event_id: req.user.event_id
            }
            const result = await Tanding.create(data)
            return addResponse( req, res, result)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    editTanding: async (req,res)=>{
        try{
            let param = {id: req.params.id}
            let data = {
                golongan: req.body.golongan,
                jk: req.body.jk,
                kelas: req.body.kelas,
                babak: req.body.babak,
                gelanggang_id: req.body.gelanggang_id,
                partai: req.body.partai,
                id_peserta_merah: req.body.id_peserta_merah,
                id_peserta_biru: req.body.id_peserta_biru,
                id_pemenang: req.body.id_pemenang,
            }
            const result = await Tanding.update(data, {where: param})
            return editResponse(req, res, result)
        } catch (error) {
            return errorResponse(req, res, error.message)
        }
    },
    deleteTandingbyId: async (req,res)=>{
        try{
            let param = {id: req.params.id}
            const result = await Tanding.destroy({where: param})
            return deleteResponse( req,res, result)
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },
    deleteAllTanding: async (req,res)=>{
        try{
            const data = await Tanding.count()
            const result = await Tanding.destroy({truncate: true})
            return deleteResponse( req,res, data )
        } catch (error){
            return errorResponse( req, res, error.message )
        }
    },

    setKet: async (req,res) =>{
        try {
            let id = {id: req.params.id_jadwal}
            let data = {
                keterangan: req.body.keterangan,
                id_pemenang: req.body.id_pemenang,
                selesai: 1
            }
            let result = await Tanding.update(data, {where: id})
            return editResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    setSelesai: async (req,res) =>{
        try {
            let id = {id: req.params.id_jadwal}

            const getJadwal = await Tanding.findOne({
                where: id
            })

            let merah = getJadwal.total_merah
            let biru = getJadwal.total_biru

            let data = {
                selesai: true
            }


            if (merah > biru) {
                data.id_pemenang = getJadwal.id_merah                
            } else if (biru > merah) {
                data.id_pemenang = getJadwal.id_biru                
            } else if (biru === merah){
                return res.json({
                    message: "Tidak dapat selesai. Total poin merah dan biru sama"
                })
            }
            let result = await Tanding.update(data, {where: id})
            return editResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getTimer: async (req,res) => {
        try {
            const result = await Timer.findOne({
                where: {
                    id_jadwal: req.params.id_jadwal,
                    babak: req.params.babak
                },
                attributes: {
                    exclude:["createdAt", "updatedAt"]
                },
                include:[
                    'log_pause'
                ]
            })
            return getResponse ( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    startTimer: async (req,res) => {
        try {
            let param = {
                id_jadwal: req.body.id_jadwal,
                babak: req.body.babak
            } 
            let cek = await Timer.findOne({
                where: {
                    id_jadwal: req.body.id_jadwal,
                    babak: req.body.babak
                },                
                attributes: {
                    exclude:["createdAt", "updatedAt"]
                },
                include: [
                    "log_pause"
                ],
                order:[
                    [{model:models.log_pause_tanding, as:"log_pause"},'createdAt','DESC']
                ]
            })
            
            if(cek){
                let getPause = await logPause.findOne({
                    where: {id_timer_tanding: cek.id},
                    order:[['createdAt', 'DESC']]
                })
                
                let data_pause = {
                    finish: new Date().toISOString(),
                    total: new Date().getTime() - new Date(getPause.start).getTime()
                }
                const update_log = await logPause.update(data_pause, {where:{id: getPause.id}})

                let getTimer = await Timer.findOne({
                    where: {
                        id_jadwal: req.body.id_jadwal,
                        babak: req.body.babak
                    },                
                    attributes: {
                        exclude:["createdAt", "updatedAt"]
                    },
                    include: [
                        "log_pause"
                    ]
                })

                let totalLog = getTimer.log_pause
                let arrayLog = []
                let sumTotal = 0
                for (let i=0; i< totalLog.length; i++) {
                    let log = totalLog [i]
                    arrayLog.push (log.total)
                    sumTotal += arrayLog [i]
                }
                //2023-02-16T18:25:39.000Z
                // const waktuStart = getTimer.start
                // waktuStart.setMilliseconds(waktuStart.getMilliseconds() + sumTotal)
                // console.log(waktuStart.toLocaleTimeString());
                // console.log(new Date().toLocaleTimeString());

                let data = {
                    running: true,
                    total_pause: (sumTotal)
                }

                const result = await Timer.update(data, {where:param})
                return editResponse( req, res, result )
            } else {
                let data = {
                    id: uuidv4(),
                    id_jadwal: req.body.id_jadwal,
                    babak: req.body.babak,
                    running: true,
                    start: new Date().toISOString(),
                }
    
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
            }
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    pauseTimer: async (req,res) => {
        try {
            let param = {
                id_jadwal: req.body.id_jadwal,
                babak: req.body.babak
            }

            const getTimer = await Timer.findOne({
                where: {
                    id_jadwal: req.body.id_jadwal,
                    babak: req.body.babak
                }
            })

            let log_pause = {
                id: uuidv4(),
                id_timer_tanding: getTimer.id,
                start: new Date().toISOString(),
            }
            let log = await logPause.create(log_pause)

            let data = {
                running: false,
                saved_time: req.body.time
            }
            let result = await Timer.update(data, {where: param})
            return editResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    stopTimer: async (req,res) => {
        try {
            let param = {
                id_jadwal: req.body.id_jadwal,
                babak: req.body.babak
            }

            const getTimer = await Timer.findOne({
                where: {
                    id_jadwal: req.body.id_jadwal,
                    babak: req.body.babak
                }
            })
            const getPause = await logPause.findOne({
                where: {id_timer_tanding: getTimer.id},
                order:[['createdAt', 'DESC']]
            })

            if (getTimer.selesai === false) {
                if(getPause){
                    if(getPause.finish !== null){
                        let data_pause = {
                            finish: new Date().toISOString(),
                            total: new Date().getTime() - new Date(getPause.start).getTime()
                        }
                        const update_log = await logPause.update(data_pause, {where:{id: getPause.id}})
            
                        // const waktuStart = getTimer.start
                        // waktuStart.setMilliseconds(waktuStart.getMilliseconds() + sumTotal)

                        let data = {
                            running: false,
                            finish: new Date().toISOString(),
                            selesai: true,
                            saved_time: req.body.time
                        }
                        let result = await Timer.update(data, {where: param})
                        return editResponse( req, res, result )
                    }else if(getPause.finish === null){
                        return res.json({
                            message: "waktu masih pause"
                        })
                    }         
                }else {
                    let data = {
                        running: false,
                        finish: new Date().toISOString(),
                        saved_time: req.body.time,
                        selesai: true,
                    }
                    let result = await Timer.update(data, {where: param})
                    return editResponse( req, res, result )
                }
            } else if (getTimer.selesai === true){
                return res.json({
                    message: "waktu telah selesai"
                })
            }
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getPoin: async (req,res) => {
        try {
            let param = {id: req.params.id}
            const tanding = await Tanding.findOne({
                where:param,
                attributes:['total_merah','total_biru']
            })
            return getResponse( req, res, tanding )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    }
}