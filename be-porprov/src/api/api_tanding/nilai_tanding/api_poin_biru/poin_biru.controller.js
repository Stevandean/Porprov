const schedule = require('node-schedule')
const { Op } = require("sequelize");

const models = require('../../../../models/index')
const Detail = models.detail_jadwal_tanding
const Nilai = models.nilai_tanding
const logJuri = models.log_poin_juri 
const Juri1 = models.log_poin_juri1
const Juri2 = models.log_poin_juri2
const Juri3 = models.log_poin_juri3

const poin_masuk = models.log_poin_masuk
const Poin = models.poin
const Tanding = models.jadwal_tanding
const Juri = models.juri

const {
    addJatuhanBiru,
    deleteJatuhanBiru
} = require("./jatuhan_biru.cotroller")
const { addBinaanBiru, deleteBinaanBiru } = require("./binaan.controller")
const { addTeguranBiru, deleteTeguranBiru } = require("./teguran_biru.controller")
const { addPeringatanBiru, deletePeringatanBiru } = require("./peringatan_biru.controller")

const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../../../helpers");
const {v4 : uuidv4} = require("uuid")


module.exports = {
    addJuriPukulanBiru: async (req,res) =>{
        try {
            const getDetail = await Detail.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak},
                attributes: ['id','id_jadwal', 'babak','id_nilai_biru']
            })

            const getJuri = await Juri.findOne({
                where: {id: req.body.id_juri},
                attributes: ['id','no']
            })
            
            const juri = getJuri.no
            
            //cek data
            let start = new Date()
            let endDate = new Date()
            let setdetik = endDate.setMilliseconds((endDate.getMilliseconds()) + 3300)
            let end = new Date(setdetik)

            //set data for poin juri 
            let data = {
                id: uuidv4(),
                id_nilai_tanding: getDetail.id_nilai_biru,
                id_juri: getJuri.id,
                sudut: "biru",
                poin: 1,
                cek_start: start,
                cek_end: end
            }

            let result = []
            if(juri === 1){
                result = await Juri1.create(data)

                //cek apakah juri 2 atau 3 sudah memasukan nilai dalam waktu 3 detik 
                //get input juri 2 terakhir
                const cekJuri2 = await Juri2.findOne({
                    where:{
                        poin: 1,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 3 terakir
                const cekJuri3 = await Juri3.findOne({
                    where:{
                        poin: 1,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                if(((result.cek_start >= cekJuri2?.cek_start) && (result.cek_start <= cekJuri2?.cek_end)) || ((result.cek_start >= cekJuri3?.cek_start) && (result.cek_start <= cekJuri3?.cek_end))){
                    console.log(true);
                }else{
                    console.log(false);
                    setTimeout( async () => {
                        console.log(true + ' cek poin masuk');
                        //get poin dari juri2
                        const juri2 = await Juri2.findOne({
                            where:{
                                poin: 1,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })

                        //get poin dari juri2
                        const juri3 = await Juri3.findOne({
                            where:{
                                poin: 1,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })

                        //jika ada poin masuk
                        if (juri2 || juri3) {
                            let data_poin = {
                                id: uuidv4(),
                                id_nilai_tanding: getDetail.id_nilai_biru,
                                poin: result.poin 
                            }
                            let masuk = await poin_masuk.create(data_poin)
                            if (masuk) {
                                console.log("poin masuk "+ result.poin);

                                //update total poin pada tabel nilai
                                const getPoin = await Poin.findOne({
                                    where: {id: getDetail.id_nilai_biru}
                                })
                                let data_poin = {
                                    poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                    total_poin: (getPoin.total_poin) + (result.poin)
                                }
                                await Poin.update(data_poin, {where:{id: getDetail.id_nilai_biru}})
                                .then(result => {
                                    console.log("total poin updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })

                                //update total poin pada tabel jadwal
                                const getJadwal = await Tanding.findOne({
                                    where: {id: getDetail.id_jadwal}
                                })
                                let data_total = {
                                    total_biru: (getJadwal.total_biru) + (result.poin)
                                }
                                await Tanding.update(data_total, {where:{id: getDetail.id_jadwal}})
                                .then(result => {
                                    console.log("total nilai updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })
                                // console.log("POIN SAH");

                                let data = {
                                    masuk: true
                                }
                                await Juri1.update(data, {where:{id: result.id}})
                                console.log("juri 1 sah");


                                if (juri2) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri2.update(data, {where:{id: juri2.id}})
                                    console.log("juri 2 sah");

                                }

                                if (juri3) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri3.update(data, {where:{id: juri3.id}})
                                    console.log("juri 3 sah");

                                }
                            } 
                        }

                    },3300)
                }
            } else if(juri === 2){
                result = await Juri2.create(data)

                //cek apakah juri 1 atau 3 sudah memasukan nilai dalam waktu 3 detik terakhir 
                //get input juri 1 terakhir
                const cekJuri1 = await Juri1.findOne({
                    where:{
                        poin: 1,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 3 terakir
                const cekJuri3 = await Juri3.findOne({
                    where:{
                        poin: 1,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                if(((result.cek_start >= cekJuri1?.cek_start) && (result.cek_start <= cekJuri1?.cek_end)) || ((result.cek_start >= cekJuri3?.cek_start) && (result.cek_start <= cekJuri3?.cek_end))){
                    console.log(true);
                }else{
                    console.log(false);
                    setTimeout( async () => {
                        console.log(true + ' cek poin masuk');
                        //get poin dari juri 1
                        const juri1 = await Juri1.findOne({
                            where:{
                                poin: 1,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })

                        //get poin dari juri2
                        const juri3 = await Juri3.findOne({
                            where:{
                                poin: 1,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })

                        //jika ada poin masuk
                        if (juri1 || juri3) {
                            let data_poin = {
                                id: uuidv4(),
                                id_nilai_tanding: getDetail.id_nilai_biru,
                                poin: result.poin 
                            }
                            let masuk = await poin_masuk.create(data_poin)
                            if (masuk) {
                                console.log("poin masuk "+ result.poin);

                                //update total poin pada tabel nilai
                                const getPoin = await Poin.findOne({
                                    where: {id: getDetail.id_nilai_biru}
                                })
                                let data_poin = {
                                    poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                    total_poin: (getPoin.total_poin) + (result.poin)
                                }
                                await Poin.update(data_poin, {where:{id: getDetail.id_nilai_biru}})
                                .then(result => {
                                    console.log("total poin updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })

                                //update total poin pada tabel jadwal
                                const getJadwal = await Tanding.findOne({
                                    where: {id: getDetail.id_jadwal}
                                })
                                let data_total = {
                                    total_biru: (getJadwal.total_biru) + (result.poin)
                                }
                                await Tanding.update(data_total, {where:{id: getDetail.id_jadwal}})
                                .then(result => {
                                    console.log("total nilai updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })
                                // console.log("POIN SAH");

                                let data = {
                                    masuk: true
                                }
                                await Juri2.update(data, {where:{id: result.id}})
                                console.log("juri 2 sah");


                                if (juri1) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri1.update(data, {where:{id: juri1.id}})
                                    console.log("juri 1 sah");

                                }

                                if (juri3) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri3.update(data, {where:{id: juri3.id}})
                                    console.log("juri 3 sah");

                                }
                            } 
                        }
                    },3300)
                }
            } else if(juri === 3){
                result = await Juri3.create(data)

                //cek apakah juri 1 atau 2 sudah memasukan nilai dalam waktu 3 detik terakhir 
                //get input juri 1 terakhir
                const cekJuri1 = await Juri1.findOne({
                    where:{
                        poin: 1,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 2 terakir
                const cekJuri2 = await Juri2.findOne({
                    where:{
                        poin: 1,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                if(((result.cek_start >= cekJuri1?.cek_start) && (result.cek_start <= cekJuri1?.cek_end)) || ((result.cek_start >= cekJuri2?.cek_start) && (result.cek_start <= cekJuri2?.cek_end))){
                    console.log(true);
                }else{
                    console.log(false);
                    setTimeout( async () => {
                        console.log(true + ' cek poin masuk');
                        //get poin dari juri 1
                        const juri1 = await Juri1.findOne({
                            where:{
                                poin: 1,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })

                        //get poin dari juri 2
                        const juri2 = await Juri2.findOne({
                            where:{
                                poin: 1,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })
                        // console.log(juri1);

                        //jika ada poin masuk
                        if (juri1 || juri2) {
                            let data_poin = {
                                id: uuidv4(),
                                id_nilai_tanding: getDetail.id_nilai_biru,
                                poin: result.poin 
                            }
                            let masuk = await poin_masuk.create(data_poin)
                            if (masuk) {
                                console.log("poin masuk "+ result.poin);

                                //update total poin pada tabel nilai
                                const getPoin = await Poin.findOne({
                                    where: {id: getDetail.id_nilai_biru}
                                })
                                let data_poin = {
                                    poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                    total_poin: (getPoin.total_poin) + (result.poin)
                                }
                                await Poin.update(data_poin, {where:{id: getDetail.id_nilai_biru}})
                                .then(result => {
                                    console.log("total poin updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })

                                //update total poin pada tabel jadwal
                                const getJadwal = await Tanding.findOne({
                                    where: {id: getDetail.id_jadwal}
                                })
                                let data_total = {
                                    total_biru: (getJadwal.total_biru) + (result.poin)
                                }
                                await Tanding.update(data_total, {where:{id: getDetail.id_jadwal}})
                                .then(result => {
                                    console.log("total nilai updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })
                                // console.log("POIN SAH");

                                let data = {
                                    masuk: true
                                }
                                await Juri3.update(data, {where:{id: result.id}})
                                console.log("juri 3 sah");


                                if (juri1) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri2.update(data, {where:{id: juri1.id}})
                                    console.log("juri 1 sah");

                                }

                                if (juri2) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri2.update(data, {where:{id: juri2.id}})
                                    console.log("juri 3 sah");

                                }
                            } 
                        }
                    },3300)
                }
            }
            return addResponse( req, res, result)
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    },

    addJuriBiru: async (req, res) => {
        try {
            const noJuri = req.params.juri
            const sudut = req.params.sudut
            const getDetail = await Detail.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak},
                attributes: ['id','id_jadwal', 'babak','id_nilai_biru']
            })

            //set waktu
            let start = new Date()
            let endDate = new Date()
            let setdetik = endDate.setMilliseconds((endDate.getMilliseconds()) + 3300)
            let end = new Date(setdetik)

            //set data for poin juri 
            let data = {
                id_nilai_tanding: getDetail.id_nilai_biru,
                juri: noJuri,
                sudut: "biru",
                poin: 1,
                cek_start: start,
                cek_end: end
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
                    poin: 1,
                    sudut: Input.sudut,
                },
                order:[['createdAt', 'DESC']]
            })

            if((Input.cek_start >= cekJuri.cek_start) && (Input.cek_start <= cekJuri.cek_end)){
                //jika sudah ada berhenti
                console.log("sudah ada poin juri lain dalam 3 detik terakhir");
            } else {
                //jika belum ada lakukan pengecekan dalam 3 kedepan
                setTimeout( async() => {
                    //cek apakah ada inputan juri dalam 3 detik teakhir
                    const cekInputJuri = await logJuri.findOne({
                        where:{
                            id_nilai_tanding: Input.id_nilai_tanding,
                            juri: {
                                [Op.not]: [noJuri] 
                            },
                            poin: 1,
                            sudut: Input.sudut,
                            cek_start: {
                                [Op.between]: [Input.cek_start, Input.cek_end]
                            }
                        },
                        order:[['createdAt', 'DESC']]
                    })

                    if (cekInputJuri) {
                        //jika ada update poin pertandingan
                        let data_poin_masuk = {
                            id_nilai_tanding: poin.id_nilai_tanding,
                            poin: Input.poin
                        }
                        await poin_masuk.create(data_poin_masuk)
                        .then( async res => {
                            const getNilai = await Nilai.findOne({
                                where: {id: res.id_nilai_tanding}
                            })
                            let data_nilai_tanding = {
                                poin_masuk: (getNilai.poin_masuk) + (res.poin),
                                total_poin: (getNilai.total_poin) + (res.poin)
                            }
                            await Nilai.update(data_nilai_tanding, {where:{id: getNilai.id}})
                            .then(result => {
                                console.log("total poin updated");
                            })
                            .catch(error => {
                                console.log(error.message);
                            })

                        })
                        .catch(error => {
                            res.json({
                                message: error.message
                            })
                        })
                    }
                },3300)
            }
            res.json({
                message: "masuk"
            })
            
            
        } catch (error) {
            return errorResponse( req, res, error.message)       
        }
    },

    addJuriTendanganBiru: async (req,res) =>{
        try {
            const getDetail = await Detail.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak},
                attributes: ['id','id_jadwal', 'babak','id_nilai_biru']
            })

            const getJuri = await Juri.findOne({
                where: {id: req.body.id_juri},
                attributes: ['id','no']
            })
            
            const juri = getJuri.no
            
            //cek data
            let start = new Date()
            let endDate = new Date()
            let setdetik = endDate.setMilliseconds((endDate.getMilliseconds()) + 3300)
            let end = new Date(setdetik)

            console.log(end - start);

            //set data for poin juri 
            let data = {
                id: uuidv4(),
                id_nilai_tanding: getDetail.id_nilai_biru,
                id_juri: getJuri.id,
                sudut: "biru",
                poin: 2,
                cek_start: start,
                cek_end: end
            }

            let result = []
            if(juri === 1){
                result = await Juri1.create(data)

                //cek apakah juri 2 atau 3 sudah memasukan nilai dalam waktu 3 detik 
                //get input juri 2 terakhir
                const cekJuri2 = await Juri2.findOne({
                    where:{
                        poin: 2,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 3 terakir
                const cekJuri3 = await Juri3.findOne({
                    where:{
                        poin: 2,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                if(((result.cek_start >= cekJuri2?.cek_start) && (result.cek_start <= cekJuri2?.cek_end)) || ((result.cek_start >= cekJuri3?.cek_start) && (result.cek_start <= cekJuri3?.cek_end))){
                    console.log(true);
                }else{
                    console.log(false);
                    setTimeout( async () => {
                        console.log(true + ' cek poin masuk');
                        //get poin dari juri2
                        const juri2 = await Juri2.findOne({
                            where:{
                                poin: 2,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })

                        //get poin dari juri2
                        const juri3 = await Juri3.findOne({
                            where:{
                                poin: 2,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })

                        //jika ada poin masuk
                        if (juri2 || juri3) {
                            let data_poin = {
                                id: uuidv4(),
                                id_nilai_tanding: getDetail.id_nilai_biru,
                                poin: result.poin 
                            }
                            let masuk = await poin_masuk.create(data_poin)
                            if (masuk) {
                                console.log("poin masuk "+ result.poin);

                                //update total poin pada tabel nilai
                                const getPoin = await Poin.findOne({
                                    where: {id: getDetail.id_nilai_biru}
                                })
                                let data_poin = {
                                    poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                    total_poin: (getPoin.total_poin) + (result.poin)
                                }
                                await Poin.update(data_poin, {where:{id: getDetail.id_nilai_biru}})
                                .then(result => {
                                    console.log("total poin updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })

                                //update total poin pada tabel jadwal
                                const getJadwal = await Tanding.findOne({
                                    where: {id: getDetail.id_jadwal}
                                })
                                let data_total = {
                                    total_biru: (getJadwal.total_biru) + (result.poin)
                                }
                                await Tanding.update(data_total, {where:{id: getDetail.id_jadwal}})
                                .then(result => {
                                    console.log("total nilai updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })
                                // console.log("POIN SAH");

                                let data = {
                                    masuk: true
                                }
                                await Juri1.update(data, {where:{id: result.id}})
                                console.log("juri 1 sah");


                                if (juri2) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri2.update(data, {where:{id: juri2.id}})
                                    console.log("juri 2 sah");

                                }

                                if (juri3) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri3.update(data, {where:{id: juri3.id}})
                                    console.log("juri 3 sah");

                                }
                            } 
                        }

                    },3300)
                }
            } else if(juri === 2){
                result = await Juri2.create(data)

                //cek apakah juri 1 atau 3 sudah memasukan nilai dalam waktu 3 detik terakhir 
                //get input juri 1 terakhir
                const cekJuri1 = await Juri1.findOne({
                    where:{
                        poin: 2,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 3 terakir
                const cekJuri3 = await Juri3.findOne({
                    where:{
                        poin: 2,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                if(((result.cek_start >= cekJuri1?.cek_start) && (result.cek_start <= cekJuri1?.cek_end)) || ((result.cek_start >= cekJuri3?.cek_start) && (result.cek_start <= cekJuri3?.cek_end))){
                    console.log(true);
                }else{
                    console.log(false);
                    setTimeout( async () => {
                        console.log(true + ' cek poin masuk');
                        //get poin dari juri 1
                        const juri1 = await Juri1.findOne({
                            where:{
                                poin: 2,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })

                        //get poin dari juri2
                        const juri3 = await Juri3.findOne({
                            where:{
                                poin: 2,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })
                        console.log(juri1);

                        //jika ada poin masuk
                        if (juri1 || juri3) {
                            let data_poin = {
                                id: uuidv4(),
                                id_nilai_tanding: getDetail.id_nilai_biru,
                                poin: result.poin 
                            }
                            let masuk = await poin_masuk.create(data_poin)
                            if (masuk) {
                                console.log("poin masuk "+ result.poin);

                                //update total poin pada tabel nilai
                                const getPoin = await Poin.findOne({
                                    where: {id: getDetail.id_nilai_biru}
                                })
                                let data_poin = {
                                    poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                    total_poin: (getPoin.total_poin) + (result.poin)
                                }
                                await Poin.update(data_poin, {where:{id: getDetail.id_nilai_biru}})
                                .then(result => {
                                    console.log("total poin updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })

                                //update total poin pada tabel jadwal
                                const getJadwal = await Tanding.findOne({
                                    where: {id: getDetail.id_jadwal}
                                })
                                let data_total = {
                                    total_biru: (getJadwal.total_biru) + (result.poin)
                                }
                                await Tanding.update(data_total, {where:{id: getDetail.id_jadwal}})
                                .then(result => {
                                    console.log("total nilai updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })
                                // console.log("POIN SAH");

                                let data = {
                                    masuk: true
                                }
                                await Juri2.update(data, {where:{id: result.id}})
                                console.log("juri 2 sah");


                                if (juri1) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri1.update(data, {where:{id: juri1.id}})
                                    console.log("juri 1 sah");

                                }

                                if (juri3) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri3.update(data, {where:{id: juri3.id}})
                                    console.log("juri 3 sah");

                                }
                            } 
                        }
                    },3300)
                }
            } else if(juri === 3){
                result = await Juri3.create(data)

                //cek apakah juri 1 atau 2 sudah memasukan nilai dalam waktu 3 detik terakhir 
                //get input juri 1 terakhir
                const cekJuri1 = await Juri1.findOne({
                    where:{
                        poin: 2,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 2 terakir
                const cekJuri2 = await Juri2.findOne({
                    where:{
                        poin: 2,
                        sudut: 'biru'
                    },
                    order:[['createdAt', 'DESC']]
                })

                if(((result.cek_start >= cekJuri1?.cek_start) && (result.cek_start <= cekJuri1?.cek_end)) || ((result.cek_start >= cekJuri2?.cek_start) && (result.cek_start <= cekJuri2?.cek_end))){
                    console.log(true);
                }else{
                    console.log(false);
                    setTimeout( async () => {
                        console.log(true + ' cek poin masuk');
                        //get poin dari juri 1
                        const juri1 = await Juri1.findOne({
                            where:{
                                poin: 2,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })

                        //get poin dari juri 2
                        const juri2 = await Juri2.findOne({
                            where:{
                                poin: 2,
                                sudut: 'biru',
                                cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                            }
                        })
                        // console.log(juri1);

                        //jika ada poin masuk
                        if (juri1 || juri2) {
                            let data_poin = {
                                id: uuidv4(),
                                id_nilai_tanding: getDetail.id_nilai_biru,
                                poin: result.poin 
                            }
                            let masuk = await poin_masuk.create(data_poin)
                            if (masuk) {
                                console.log("poin masuk "+ result.poin);

                                //update total poin pada tabel nilai
                                const getPoin = await Poin.findOne({
                                    where: {id: getDetail.id_nilai_biru}
                                })
                                let data_poin = {
                                    poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                    total_poin: (getPoin.total_poin) + (result.poin)
                                }
                                await Poin.update(data_poin, {where:{id: getDetail.id_nilai_biru}})
                                .then(result => {
                                    console.log("total poin updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })

                                //update total poin pada tabel jadwal
                                const getJadwal = await Tanding.findOne({
                                    where: {id: getDetail.id_jadwal}
                                })
                                let data_total = {
                                    total_biru: (getJadwal.total_biru) + (result.poin)
                                }
                                await Tanding.update(data_total, {where:{id: getDetail.id_jadwal}})
                                .then(result => {
                                    console.log("total nilai updated");
                                })
                                .catch(error => {
                                    console.log(error.message);

                                })
                                // console.log("POIN SAH");

                                let data = {
                                    masuk: true
                                }
                                await Juri3.update(data, {where:{id: result.id}})
                                console.log("juri 3 sah");


                                if (juri1) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri2.update(data, {where:{id: juri1.id}})
                                    console.log("juri 1 sah");

                                }

                                if (juri2) {
                                    let data = {
                                        masuk: true
                                    }
                                    await Juri2.update(data, {where:{id: juri2.id}})
                                    console.log("juri 3 sah");

                                }
                            } 
                        }
                    },3300)
                }
            }


            // schedule.cancelJob('cek')
            // schedule.scheduleJob('cek', '*/4 * * * * *', async (req,res) => {
            //     console.log("checking log 2 & 3")

            //     //get poin dari juri lain
            //     let startDate = new Date(result.createdAt)
            //     let end = new Date(result.createdAt)
            //     let setdetik = startDate.setSeconds((startDate.getSeconds()) - 4)
            //     let start = new Date(setdetik)
                
            //     if(juri === 1){
            //         //get poin dari juri2
            //         const juri2 = await Juri2.findOne({
            //             where:{
            //                 createdAt: {[Op.between]: [start, end]}
            //             }
            //         })

            //         //get poin dari juri3
            //         const juri3 = await Juri3.findOne({
            //             where:{
            //                 createdAt: {[Op.between]: [start, end]}
            //             }
            //         })

            //         //cek apakah ada juri lain yang menginput poin yang sama
            //         if (juri2 || juri3) {
            //             let data_poin = {
            //                 id: uuidv4(),
            //                 id_nilai_tanding: getDetail.id_nilai_biru,
            //                 poin: result.poin 
            //             }
            //             //jika ada poin masuk
            //             let masuk = await poin_masuk.create(data_poin)
            //             if (masuk) {
            //                 console.log("poin masuk "+ result.poin);

            //                 //update total poin pada tabel nilai
            //                 const getPoin = await Poin.findOne({
            //                     where: {id: getDetail.id_nilai_biru}
            //                 })
            //                 let data_poin = {
            //                     poin_masuk: (getPoin.poin_masuk) + (result.poin),
            //                     total_poin: (getPoin.total_poin) + (result.poin)
            //                 }
            //                 await Poin.update(data_poin, {where:{id: getDetail.id_nilai_biru}})
            //                 .then(result => {
            //                     console.log("total poin updated");
            //                 })
            //                 .catch(error => {
            //                     console.log(error.message);

            //                 })

            //                 //update total poin pada tabel jadwal
            //                 const getJadwal = await Tanding.findOne({
            //                     where: {id: getDetail.id_jadwal}
            //                 })
            //                 let data_total = {
            //                     total_biru: (getJadwal.total_biru) + (result.poin)
            //                 }
            //                 await Tanding.update(data_total, {where:{id: getDetail.id_jadwal}})
            //                 .then(result => {
            //                     console.log("total nilai updated");
            //                 })
            //                 .catch(error => {
            //                     console.log(error.message);

            //                 })
            //                 console.log("POIN SAH");

            //                 let data = {
            //                     masuk: true
            //                 }
            //                 await Juri1.update(data, {where:{id: result.id}})
            //                 console.log("juri 1 sah");


            //                 if (juri2) {
            //                     let data = {
            //                         masuk: true
            //                     }
            //                     await Juri2.update(data, {where:{id: juri2.id}})
            //                     console.log("juri 2 sah");

            //                 }

            //                 if (juri3) {
            //                     let data = {
            //                         masuk: true
            //                     }
            //                     await Juri3.update(data, {where:{id: juri3.id}})
            //                     console.log("juri 3 sah");

            //                 }
            //             } 
            //         }
            //     } else if(juri === 2){
            //         //get poin dari juri1
            //         const juri1 = await Juri1.findOne({
            //             where:{
            //                 createdAt: {[Op.between]: [start, end]}
            //             }
            //         })

            //         //get poin dari juri3
            //         const juri3 = await Juri3.findOne({
            //             where:{
            //                 createdAt: {[Op.between]: [start, end]}
            //             }
            //         })
                    
            //         //cek apakah ada juri lain yang menginput poin yang sama
            //         if (juri1 || juri3) {
            //             let data_poin = {
            //                 id: uuidv4(),
            //                 id_nilai_tanding: getDetail.id_nilai_biru,
            //                 poin: result.poin 
            //             }
            //             //jika ada poin masuk
            //             let masuk = await poin_masuk.create(data_poin)
            //             if (masuk) {
            //                 console.log("poin masuk "+ result.poin);

            //                 //update total poin pada tabel nilai
            //                 const getPoin = await Poin.findOne({
            //                     where: {id: getDetail.id_nilai_biru}
            //                 })
            //                 let data_poin = {
            //                     poin_masuk: (getPoin.poin_masuk) + (result.poin),
            //                     total_poin: (getPoin.total_poin) + (result.poin)
            //                 }
            //                 await Poin.update(data_poin, {where:{id: getDetail.id_nilai_biru}})
            //                 .then(result => {
            //                     console.log("total poin updated");
            //                 })
            //                 .catch(error => {
            //                     console.log(error.message);

            //                 })

            //                 //update total poin pada tabel jadwal
            //                 const getJadwal = await Tanding.findOne({
            //                     where: {id: getDetail.id_jadwal}
            //                 })
            //                 let data_total = {
            //                     total_biru: (getJadwal.total_biru) + (result.poin)
            //                 }
            //                 await Tanding.update(data_total, {where:{id: getDetail.id_jadwal}})
            //                 .then(result => {
            //                     console.log("total nilai updated");
            //                 })
            //                 .catch(error => {
            //                     console.log(error.message);
            //                 })

            //                 let data = {
            //                     masuk: true
            //                 }
            //                 await Juri2.update(data, {where:{id: result.id}})
            //                 console.log("juri 2 sah");

            //                 if (juri1) {
            //                     let data = {
            //                         masuk: true
            //                     }
            //                     await Juri1.update(data, {where:{id: juri1.id}})
            //                     console.log("juri 1 sah");

            //                 }

            //                 if (juri3) {
            //                     let data = {
            //                         masuk: true
            //                     }
            //                     await Juri3.update(data, {where:{id: juri3.id}})
            //                     console.log("juri 3 sah");

            //                 }
            //             } 
            //         }
            //     } else if(juri === 3){
            //         //get poin dari juri2
            //         const juri1 = await Juri1.findOne({
            //             where:{
            //                 createdAt: {[Op.between]: [start, end]}
            //             }
            //         })

            //         //get poin dari juri3
            //         const juri2 = await Juri2.findOne({
            //             where:{
            //                 createdAt: {[Op.between]: [start, end]}
            //             }
            //         })
                    
            //         //cek apakah ada juri lain yang menginput poin yang sama
            //         if (juri1 || juri2) {
            //             let data_poin = {
            //                 id: uuidv4(),
            //                 id_nilai_tanding: getDetail.id_nilai_biru,
            //                 poin: result.poin 
            //             }
            //             //jika ada poin masuk
            //             let masuk = await poin_masuk.create(data_poin)
            //             if (masuk) {
            //                 console.log("poin masuk "+ result.poin);

            //                 //update total poin pada tabel nilai
            //                 const getPoin = await Poin.findOne({
            //                     where: {id: getDetail.id_nilai_biru}
            //                 })
            //                 let data_poin = {
            //                     poin_masuk: (getPoin.poin_masuk) + (result.poin),
            //                     total_poin: (getPoin.total_poin) + (result.poin)
            //                 }
            //                 await Poin.update(data_poin, {where:{id: getDetail.id_nilai_biru}})
            //                 .then(result => {
            //                     console.log("total poin updated");
            //                 })
            //                 .catch(error => {
            //                     console.log(error.message);

            //                 })

            //                 //update total poin pada tabel jadwal
            //                 const getJadwal = await Tanding.findOne({
            //                     where: {id: getDetail.id_jadwal}
            //                 })
            //                 let data_total = {
            //                     total_biru: (getJadwal.total_biru) + (result.poin)
            //                 }
            //                 await Tanding.update(data_total, {where:{id: getDetail.id_jadwal}})
            //                 .then(result => {
            //                     console.log("total nilai updated");
            //                 })
            //                 .catch(error => {
            //                     console.log(error.message);
            //                 })

            //                 let data = {
            //                     masuk: true
            //                 }
            //                 await Juri3.update(data, {where:{id: result.id}})
            //                 console.log("juri 3 sah");

            //                 if (juri1) {
            //                     let data = {
            //                         masuk: true
            //                     }
            //                     await Juri1.update(data, {where:{id: juri1.id}})
            //                     console.log("juri 1 sah");
            //                 }
            //                 if (juri2) {
            //                     let data = {
            //                         masuk: true
            //                     }
            //                     await Juri2.update(data, {where:{id: juri2.id}})
            //                     console.log("juri 2 sah");
            //                 }
            //             } 
            //         }
            //     }
            //     schedule.cancelJob('cek')
            // })
            return addResponse( req, res, result)
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    },

    deletePoinBiru: async (req,res) => {
        try {
            schedule.cancelJob('cek')
            const id_juri = {id: req.params.id_juri}
            const getJuri = await Juri.findOne({where:id_juri})
            const juri = getJuri.no

            let result = []

            if(getJuri){
                if (juri === 1) {
                    const getLog1 = await Juri1.findOne({
                        where: {id_juri: req.params.id_juri, sudut: "biru"},
                        order:[
                            ["createdAt","DESC"]
                        ]
                    })
                    if (getLog1.masuk === "true") {
                        console.log("Tidak bisa hapus poin, Poin yang dipilih telah masuk");
                        return res.json({
                            message: "Tidak bisa hapus poin, Poin yang dipilih telah masuk"
                        })
                    }
                    //delete last input poin
                    result = await Juri1.destroy({where:{id:getLog1.id}}) 
                } else if (juri === 2) {
                    const getLog2 = await Juri2.findOne({
                        where: {id_juri: req.params.id_juri, sudut: "biru"},
                        order:[
                            ["createdAt","DESC"]
                        ]
                    })
                    if (getLog2.masuk === "true") {
                        console.log("Tidak bisa hapus poin, Poin yang dipilih telah masuk");
                        return res.json({
                            message: "Tidak bisa hapus poin, Poin yang dipilih telah masuk"
                        })
                    }
                    //delete last input poin
                    result = await Juri2.destroy({where:{id:getLog2.id}}) 
                } else if (juri === 3) {
                    const getLog3 = await Juri3.findOne({
                        where: {id_juri: req.params.id_juri, sudut: "biru"},
                        order:[
                            ["createdAt","DESC"]
                        ]
                    })
                    if (getLog3.masuk === "true") {
                        console.log("Tidak bisa hapus poin, Poin yang dipilih telah masuk");
                        return res.json({
                            message: "Tidak bisa hapus poin, Poin yang dipilih telah masuk"
                        })
                    }
                    //delete last input poin
                    result = await Juri3.destroy({where:{id:getLog3.id}})
                }
            } else if (!getJuri) {
                return res.json({
                    message: "Juri tidak ditemukan"
                })
            }

            return deleteResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    addJatuhanBiru,
    deleteJatuhanBiru,

    addBinaanBiru,
    deleteBinaanBiru,

    addTeguranBiru,
    deleteTeguranBiru,
    
    addPeringatanBiru,
    deletePeringatanBiru
}