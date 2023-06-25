const schedule = require('node-schedule')
const { Op } = require("sequelize");

const models = require('../../../../models/index')
const Detail = models.detail_jadwal_tanding
const Nilai = models.nilai_tanding
const logJuri = models.log_poin_juri 

const poin_masuk = models.log_poin_masuk
const Poin = models.poin
const Tanding = models.jadwal_tanding
const Juri = models.juri

const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../../../helpers");
const {v4 : uuidv4} = require("uuid")


module.exports = {
    //get berdasarkan juri, sudut, dan babak 
    getJuribySudutbyBabak: async (req,res) =>{
        try {
            const noJuri = req.params.juri
            const sudut = req.params.sudut

            //cek juri
            if(noJuri > 3 || noJuri < 1){
                return res.json({
                    message: "juri "+noJuri+" bukan juri tanding" 
                })
            }

            let logNomorJuri
            //cek nomor juri
            if (noJuri == 1) {
                logNomorJuri = "log_juri1"
            } else if (noJuri == 2) {
                logNomorJuri = "log_juri2"
            } else if (noJuri == 3) {
                logNomorJuri = "log_juri3"
            }

            let nilai_sudut
            if (sudut == "merah") {
                nilai_sudut = "nilai_merah"
            } else if (sudut == "biru") {
                nilai_sudut = "nilai_biru"
            }

            //get semua poin berdasarkan juri dan babak
            const getPoin = await Detail.findOne({
                where: {
                    id_jadwal : req.body.id_jadwal,
                    babak: req.body.babak
                },
                attributes: ['id', 'id_jadwal', 'babak'],
                include: [
                    {
                        model: models.nilai_tanding,
                        as: nilai_sudut,
                        attributes: ['id'],
                        include:[
                            //show log juri 
                            {
                                model: models.log_poin_juri,
                                as: "log_juri",
                                where: {juri: noJuri},
                                attributes:["poin", "masuk", "createdAt"],
                            },
                        ]
                    },  
                ],
                order: [
                    [
                        {model: models.nilai_tanding, as: nilai_sudut},
                        {model: models.log_poin_juri, as: "log_juri"},
                        'createdAt', 'Asc'
                    ]
                ]
            })

            let result = getPoin

            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    //tambah poin juri berdasarkan sudut
    addPoinJuri: async (req, res) => {
        try {
            const tipe = req.params.tipe
            const noJuri = req.params.juri
            const sudut = req.params.sudut

            //cek juri
            if(noJuri > 3 || noJuri < 1){
                return res.json({
                    message: "juri "+noJuri+" bukan juri tanding" 
                })
            }

            const getDetail = await Detail.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak},
                attributes: ['id','id_jadwal', 'babak','id_nilai_biru','id_nilai_merah']
            })

            //set waktu 3 detik
            let start = new Date()
            let endDate = new Date()
            let setdetik = endDate.setMilliseconds((endDate.getMilliseconds()) + 3300)
            let end = new Date(setdetik)

            let input_poin
            //cek input serangan
            if (tipe == 'pukulan') {
                input_poin = 1
            } else if (tipe == 'tendangan'){
                input_poin = 2
            }

            //set data input juri 
            let data = {
                juri: noJuri,
                sudut: sudut,
                poin: input_poin,
                cek_start: start,
                cek_end: end
            }
            if(sudut == "biru"){
                data.id_nilai_tanding = getDetail.id_nilai_biru
            } else if (sudut == 'merah'){
                data.id_nilai_tanding = getDetail.id_nilai_merah
            }
            let result = []

            const Input = await logJuri.create(data)
            console.log("juri "+noJuri+" input nilai");
             
            //cek apakah ada poin juri yang masuk dalam 3 detik terakhir
            const cekJuri = await logJuri.findOne({
                where:{
                    id_nilai_tanding: Input.id_nilai_tanding,
                    juri: {
                        [Op.not]: [noJuri] 
                    },
                    poin: input_poin,
                    sudut: Input.sudut,
                },
                order:[['createdAt', 'DESC']]
            })

            if((Input?.cek_start >= cekJuri?.cek_start) && (Input?.cek_start <= cekJuri?.cek_end)){
                //jika sudah ada berhenti
                console.log("sudah ada poin juri lain dalam 3 detik terakhir");
            } else {
                console.log("belum ada poin juri lain dalam 3 detik terakhir");
                //jika belum ada lakukan pengecekan dalam 3 kedepan
                setTimeout( async() => {
                    //cek apakah ada inputan juri dalam 3 detik teakhir
                    const cekInputJuri = await logJuri.findAll({
                        where:{
                            id_nilai_tanding: Input.id_nilai_tanding,
                            juri: {
                                [Op.not]: [noJuri] 
                            },
                            poin: input_poin,
                            sudut: Input.sudut,
                            cek_start: {
                                [Op.between]: [Input.cek_start, Input.cek_end]
                            }
                        },
                        order:[['createdAt', 'DESC']]
                    })

                    console.log(cekInputJuri.length != 0);
                    if (cekInputJuri.length != 0) {
                        //jika ada update poin pertandingan
                        console.log("poin sah");
                        let data_poin_masuk = {
                            id_nilai_tanding: Input.id_nilai_tanding,
                            poin: Input.poin
                        }
                        await poin_masuk.create(data_poin_masuk)
                        .then( async res => {
                            //update total poin perbabak
                            const getNilai = await Nilai.findOne({
                                where: {id: res.id_nilai_tanding}
                            })
                            let data_nilai_tanding = {
                                poin_masuk: (getNilai.poin_masuk) + (res.poin),
                                total_poin: (getNilai.total_poin) + (res.poin)
                            }
                            await Nilai.update(data_nilai_tanding, {where:{id: getNilai.id}})
                            .then(res => {
                                console.log("total poin babak updated");
                            })
                            .catch(error => {
                                console.log(error.message);
                            })

                            const getJadwal = await Tanding.findOne({
                                where: {id: getDetail.id_jadwal}
                            })

                            let data_total_poin = {}
                            
                            if (sudut == "merah") {
                                data_total_poin.total_merah= (getJadwal.total_merah)+(res.poin)
                            } else if (sudut == "biru") {
                                data_total_poin.total_biru= (getJadwal.total_biru)+(res.poin)
                            }

                            await Tanding.update(data_total_poin, {where:{id: getJadwal.id}})
                            .then(res => {
                                console.log("total poin jadwal updated");
                            })
                            .catch(error => {
                                console.log(error.message);
                            })

                            let status_poin = {
                                masuk: true
                            }
                            
                            //update input juri menjadi sah
                            await logJuri.update(status_poin,{where: {id: Input.id}})
                            .then(res => {
                                console.log("poin juri "+Input.juri+" sah");
                            })
                            .catch(error => {
                                console.log(error.message);
                            })

                            for (let i = 0; i < cekInputJuri.length; i++) {
                                const element = cekInputJuri[i];
                                await logJuri.update(status_poin,{where: {id: element.id}})
                                .then(res => {
                                    console.log("poin juri "+element.juri+" sah");
                                })
                                .catch(error => {
                                    console.log(error.message);
                                })
                            }


                        })
                        .catch(error => {
                            res.json({
                                message: error.message
                            })
                        })
                    } else {
                        console.log("poin tidak sah");
                    }
                },3300)
            }
            return addResponse( req, res, Input )
        } catch (error) {
            return errorResponse( req, res, error.message)       
        }
    },

    //hapus poin juri berdasarkan sudut
    deletePoinJuri: async (req,res) => {
        try {
            schedule.cancelJob('cek')
            // const tipe = req.params.tipe
            const noJuri = req.params.juri
            const sudut = req.params.sudut

            //cek juri
            if(noJuri > 3 || noJuri < 1){
                return res.json({
                    message: "juri "+noJuri+" bukan juri tanding" 
                })
            }

            //get babak poin yang akan dihapus
            const getDetail = await Detail.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak},
                attributes: ['id','id_jadwal', 'babak','id_nilai_biru', 'id_nilai_merah']
            })

            let nilai_sudut 
            //cek sudut poin yang akan dihapus
            if(sudut == "biru"){
                nilai_sudut = getDetail.id_nilai_biru
            } else if (sudut == 'merah'){
                nilai_sudut = getDetail.id_nilai_merah
            }

            let input_poin
            //cek input serangan
            // if (tipe == 'pukulan') {
            //     input_poin = 1
            // } else if (tipe == 'tendangan'){
            //     input_poin = 2
            // }

            //get nilai yang akan dihapus berdasarkan babak dan sudut
            const lastLog = await logJuri.findOne({
                where:{
                    id_nilai_tanding: nilai_sudut,
                    juri: noJuri,
                    // poin: input_poin,
                    sudut: sudut
                },
                order:[['createdAt', 'DESC']]
            })

            let result = []
            
            //cek apakah poin sudah sah
            if (lastLog.masuk == true) {
                console.log("Tidak bisa hapus poin, Poin terakhir sah");
                return res.json({
                    message: "Tidak bisa hapus poin, Poin yang dipilih telah masuk"
                })
            } else {
                result = await logJuri.destroy({where:{id: lastLog.id}}) 
            }
            return deleteResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    //kartu kuning
    addKartuKuning: async (req,res) => {
        try {
            const sudut = req.params.sudut
            const id_jadwal = req.params.id

            //update total poin pada tabel jadwal
            const getJadwal = await Tanding.findOne({
                where: {id: id_jadwal}
            })
            let data_total_poin = {}
                            
            if (sudut == "merah") {
                data_total_poin.total_merah= (getJadwal.total_merah)+(-20)
            } else if (sudut == "biru") {
                data_total_poin.total_biru= (getJadwal.total_biru)+(-20)
            }
            await Tanding.update(data_total_poin, {where:{id: id_jadwal}})
            .then(result => {
                console.log("total nilai updated");
                return addResponse( req, res, result )
            })
            .catch(error => {
                console.log(error.message);
            })

        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    //hapus kartu kuning
    deleteKartuKuning: async (req,res) => {
        try {
            const sudut = req.params.sudut
            const id_jadwal = req.params.id

            //update total poin pada tabel jadwal
            const getJadwal = await Tanding.findOne({
                where: {id: id_jadwal}
            })
            let data_total_poin = {}
                            
            if (sudut == "merah") {
                data_total_poin.total_merah= (getJadwal.total_merah)+(20)
            } else if (sudut == "biru") {
                data_total_poin.total_biru= (getJadwal.total_biru)+(20)
            }
            await Tanding.update(data_total_poin, {where:{id: id_jadwal}})
            .then(result => {
                console.log("total nilai updated");
                return addResponse( req, res, result )
            })
            .catch(error => {
                console.log(error.message);
            })

        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    }
}