const schedule = require('node-schedule')
const { Op, where } = require("sequelize")

const models = require('../../../models/index')
const Nilai = models.nilai_tanding
const Juri1 = models.log_poin_juri1
const Juri2 = models.log_poin_juri2
const Juri3 = models.log_poin_juri3
const Jatuhan = models.log_jatuhan
const poin_masuk = models.log_poin_masuk
const Poin = models.poin
const Tanding = models.jadwal_tanding
const Juri = models.juri
const Binaan = models.log_binaan
const Teguran = models.log_teguran
const Peringatan = models.log_peringatan

const {
    addJatuhanMerah,
    deleteJatuhanMerah
} = require("./jatuhan_merah.cotroller")
const { addBinaanMerah, deleteBinaanMerah } = require("./binaan.controller")
const { addTeguranMerah, deleteTeguranMerah } = require("./teguran_merah.controller")
const { addPeringatanMerah, deletePeringatanMerah } = require("./peringatan_merah.controller")

const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../../helpers");
const {v4 : uuidv4} = require("uuid")


module.exports = {
    addPukulanJuriMerah: async (req,res) =>{
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })

            const getJuri = await Juri.findOne({
                where: {id: req.body.id_juri}
            })
            
            const juri = getJuri.no

            let start = new Date()
            let endDate = new Date()
            let setdetik = endDate.setMilliseconds((endDate.getMilliseconds()) + 3300)
            let end = new Date(setdetik)
            
            //set data for poin juri 
            let data = {
                id: uuidv4(),
                id_poin: getNilai.id_poin_merah,
                id_juri: getJuri.id,
                sudut: "merah",
                poin: req.body.poin,
                cek_start: start,
                cek_end: end
            }
            let result = []
            if(juri === 1){
                const cekPoin = await Juri1.findOne({
                    where:{
                        id_poin: getNilai.id_poin_merah,
                        id_juri: getJuri.id
                    },
                    order:[
                        ['no', 'DESC']
                    ]
                })

                if (cekPoin) {
                    data.no = (cekPoin.no) + 1
                } else {
                    data.no = 1
                }
                result = await Juri1.create(data)

                //cek apakah juri 2 atau 3 sudah memasukan nilai dalam waktu 3 detik 
                //get input juri 2 terakhir
                const cekJuri2 = await Juri2.findOne({
                    where:{
                        poin: 1,
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 3 terakir
                const cekJuri3 = await Juri3.findOne({
                    where:{
                        poin: 1
                    },
                    order:[['createdAt', 'DESC']]
                })

                if(cekJuri2 && cekJuri3){
                    if(((result.cek_start >= cekJuri2.cek_start) && (result.cek_start <= cekJuri2.cek_end)) || ((result.cek_start >= cekJuri3.cek_start) && (result.cek_start <= cekJuri3.cek_end))){
                        console.log(true);
                    }else{
                        console.log(false);
                        setTimeout( async () => {
                            console.log(true + ' cek poin masuk');
                            //get poin dari juri2
                            const juri2 = await Juri2.findOne({
                                where:{
                                    poin: 1,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
    
                            //get poin dari juri2
                            const juri3 = await Juri3.findOne({
                                where:{
                                    poin: 1,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
    
                            console.log(juri2);
    
                            //jika ada poin masuk
                            if (juri2 || juri3) {
                                let data_poin = {
                                    id: uuidv4(),
                                    id_poin: getNilai.id_poin_merah,
                                    poin: result.poin 
                                }
                                let masuk = await poin_masuk.create(data_poin)
                                if (masuk) {
                                    console.log("poin masuk "+ result.poin);
    
                                    //update total poin pada tabel nilai
                                    const getPoin = await Poin.findOne({
                                        where: {id: getNilai.id_poin_merah}
                                    })
                                    let data_poin = {
                                        poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                        total_poin: (getPoin.total_poin) + (result.poin)
                                    }
                                    await Poin.update(data_poin, {where:{id: getNilai.id_poin_merah}})
                                    .then(result => {
                                        console.log("total poin updated");
                                    })
                                    .catch(error => {
                                        console.log(error.message);
    
                                    })
    
                                    //update total poin pada tabel jadwal
                                    const getJadwal = await Tanding.findOne({
                                        where: {id: getNilai.id_jadwal}
                                    })
                                    let data_total = {
                                        total_merah: (getJadwal.total_merah) + (result.poin)
                                    }
                                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
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
                }
            } else if(juri === 2){
                const cekPoin = await Juri2.findOne({
                    where:{
                        id_poin: getNilai.id_poin_merah,
                        id_juri: getJuri.id
                    },
                    order:[
                        ['createdAt', 'ASC']
                    ]
                })

                if (cekPoin) {
                    data.no = (cekPoin.no) + 1
                } else {
                    data.no = 1
                }
                result = await Juri2.create(data)

                //cek apakah juri 1 atau 3 sudah memasukan nilai dalam waktu 3 detik terakhir 
                //get input juri 1 terakhir
                const cekJuri1 = await Juri1.findOne({
                    where:{
                        poin: 1,
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 3 terakir
                const cekJuri3 = await Juri3.findOne({
                    where:{
                        poin: 1
                    },
                    order:[['createdAt', 'DESC']]
                })

                if (cekJuri1 && cekJuri3) {
                    if(((result.cek_start >= cekJuri1.cek_start) && (result.cek_start <= cekJuri1.cek_end)) || ((result.cek_start >= cekJuri3.cek_start) && (result.cek_start <= cekJuri3.cek_end))){
                        console.log(true);
                    }else{
                        console.log(false);
                        setTimeout( async () => {
                            console.log(true + ' cek poin masuk');
                            //get poin dari juri 1
                            const juri1 = await Juri1.findOne({
                                where:{
                                    poin: 1,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
    
                            //get poin dari juri2
                            const juri3 = await Juri3.findOne({
                                where:{
                                    poin: 1,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
                            console.log(juri1);
    
                            //jika ada poin masuk
                            if (juri1 || juri3) {
                                let data_poin = {
                                    id: uuidv4(),
                                    id_poin: getNilai.id_poin_merah,
                                    poin: result.poin 
                                }
                                let masuk = await poin_masuk.create(data_poin)
                                if (masuk) {
                                    console.log("poin masuk "+ result.poin);
    
                                    //update total poin pada tabel nilai
                                    const getPoin = await Poin.findOne({
                                        where: {id: getNilai.id_poin_merah}
                                    })
                                    let data_poin = {
                                        poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                        total_poin: (getPoin.total_poin) + (result.poin)
                                    }
                                    await Poin.update(data_poin, {where:{id: getNilai.id_poin_merah}})
                                    .then(result => {
                                        console.log("total poin updated");
                                    })
                                    .catch(error => {
                                        console.log(error.message);
    
                                    })
    
                                    //update total poin pada tabel jadwal
                                    const getJadwal = await Tanding.findOne({
                                        where: {id: getNilai.id_jadwal}
                                    })
                                    let data_total = {
                                        total_merah: (getJadwal.total_merah) + (result.poin)
                                    }
                                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
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
                }
            } else if(juri === 3){
                const cekPoin = await Juri3.findOne({
                    where:{
                        id_poin: getNilai.id_poin_merah,
                        id_juri: getJuri.id
                    },
                    order:[
                        ['createdAt', 'ASC']
                    ]
                })

                if (cekPoin) {
                    data.no = (cekPoin.no) + 1
                } else {
                    data.no = 1
                }
                result = await Juri3.create(data)

                //cek apakah juri 1 atau 2 sudah memasukan nilai dalam waktu 3 detik terakhir 
                //get input juri 1 terakhir
                const cekJuri1 = await Juri1.findOne({
                    where:{
                        poin: 1,
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 2 terakir
                const cekJuri2 = await Juri2.findOne({
                    where:{
                        poin: 1
                    },
                    order:[['createdAt', 'DESC']]
                })

                if (cekJuri1 && cekJuri2) {
                    if(((result.cek_start >= cekJuri1.cek_start) && (result.cek_start <= cekJuri1.cek_end)) || ((result.cek_start >= cekJuri2.cek_start) && (result.cek_start <= cekJuri2.cek_end))){
                        console.log(true);
                    }else{
                        console.log(false);
                        setTimeout( async () => {
                            console.log(true + ' cek poin masuk');
                            //get poin dari juri 1
                            const juri1 = await Juri1.findOne({
                                where:{
                                    poin: 1,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
    
                            //get poin dari juri 2
                            const juri2 = await Juri2.findOne({
                                where:{
                                    poin: 1,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
                            // console.log(juri1);
    
                            //jika ada poin masuk
                            if (juri1 || juri2) {
                                let data_poin = {
                                    id: uuidv4(),
                                    id_poin: getNilai.id_poin_merah,
                                    poin: result.poin 
                                }
                                let masuk = await poin_masuk.create(data_poin)
                                if (masuk) {
                                    console.log("poin masuk "+ result.poin);
    
                                    //update total poin pada tabel nilai
                                    const getPoin = await Poin.findOne({
                                        where: {id: getNilai.id_poin_merah}
                                    })
                                    let data_poin = {
                                        poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                        total_poin: (getPoin.total_poin) + (result.poin)
                                    }
                                    await Poin.update(data_poin, {where:{id: getNilai.id_poin_merah}})
                                    .then(result => {
                                        console.log("total poin updated");
                                    })
                                    .catch(error => {
                                        console.log(error.message);
    
                                    })
    
                                    //update total poin pada tabel jadwal
                                    const getJadwal = await Tanding.findOne({
                                        where: {id: getNilai.id_jadwal}
                                    })
                                    let data_total = {
                                        total_merah: (getJadwal.total_merah) + (result.poin)
                                    }
                                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
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
            }

            return addResponse( req, res, result)
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    },

    addJuriTendanganMerah: async (req,res) =>{
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })

            const getJuri = await Juri.findOne({
                where: {id: req.body.id_juri}
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
                id_poin: getNilai.id_poin_merah,
                id_juri: getJuri.id,
                sudut: "merah",
                poin: 2,
                cek_start: start,
                cek_end: end
            }

            let result = []
            if(juri === 1){
                const cekPoin = await Juri1.findOne({
                    where:{
                        id_poin: getNilai.id_poin_merah,
                        id_juri: getJuri.id
                    },
                    order:[
                        ['createdAt', 'DESC']
                    ]
                })

                if (cekPoin) {
                    data.no = (cekPoin.no) + 1
                } else {
                    data.no = 1
                }
                result = await Juri1.create(data)

                //cek apakah juri 2 atau 3 sudah memasukan nilai dalam waktu 3 detik 
                //get input juri 2 terakhir
                const cekJuri2 = await Juri2.findOne({
                    where:{
                        poin: 2,
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 3 terakir
                const cekJuri3 = await Juri3.findOne({
                    where:{
                        poin: 2
                    },
                    order:[['createdAt', 'DESC']]
                })

                if (cekJuri2 && cekJuri3) {
                    if(((result.cek_start >= cekJuri2.cek_start) && (result.cek_start <= cekJuri2.cek_end)) || ((result.cek_start >= cekJuri3.cek_start) && (result.cek_start <= cekJuri3.cek_end))){
                        console.log(true);
                    }else{
                        console.log(false);
                        setTimeout( async () => {
                            console.log(true + ' cek poin masuk');
                            //get poin dari juri2
                            const juri2 = await Juri2.findOne({
                                where:{
                                    poin: 2,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
    
                            //get poin dari juri2
                            const juri3 = await Juri3.findOne({
                                where:{
                                    poin: 2,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
    
                            console.log(juri2);
    
                            //jika ada poin masuk
                            if (juri2 || juri3) {
                                let data_poin = {
                                    id: uuidv4(),
                                    id_poin: getNilai.id_poin_merah,
                                    poin: result.poin 
                                }
                                let masuk = await poin_masuk.create(data_poin)
                                if (masuk) {
                                    console.log("poin masuk "+ result.poin);
    
                                    //update total poin pada tabel nilai
                                    const getPoin = await Poin.findOne({
                                        where: {id: getNilai.id_poin_merah}
                                    })
                                    let data_poin = {
                                        poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                        total_poin: (getPoin.total_poin) + (result.poin)
                                    }
                                    await Poin.update(data_poin, {where:{id: getNilai.id_poin_merah}})
                                    .then(result => {
                                        console.log("total poin updated");
                                    })
                                    .catch(error => {
                                        console.log(error.message);
    
                                    })
    
                                    //update total poin pada tabel jadwal
                                    const getJadwal = await Tanding.findOne({
                                        where: {id: getNilai.id_jadwal}
                                    })
                                    let data_total = {
                                        total_merah: (getJadwal.total_merah) + (result.poin)
                                    }
                                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
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
                }
            } else if(juri === 2){
                const cekPoin = await Juri2.findOne({
                    where:{
                        id_poin: getNilai.id_poin_merah,
                        id_juri: getJuri.id
                    },
                    order:[
                        ['createdAt', 'DESC']
                    ]
                })

                if (cekPoin) {
                    data.no = (cekPoin.no) + 1
                } else {
                    data.no = 1
                }
                result = await Juri2.create(data)

                //cek apakah juri 1 atau 3 sudah memasukan nilai dalam waktu 3 detik terakhir 
                //get input juri 1 terakhir
                const cekJuri1 = await Juri1.findOne({
                    where:{
                        poin: 2,
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 3 terakir
                const cekJuri3 = await Juri3.findOne({
                    where:{
                        poin: 2
                    },
                    order:[['createdAt', 'DESC']]
                })

                if (cekJuri1 && cekJuri3) {
                    if(((result.cek_start >= cekJuri1.cek_start) && (result.cek_start <= cekJuri1.cek_end)) || ((result.cek_start >= cekJuri3.cek_start) && (result.cek_start <= cekJuri3.cek_end))){
                        console.log(true);
                    }else{
                        console.log(false);
                        setTimeout( async () => {
                            console.log(true + ' cek poin masuk');
                            //get poin dari juri 1
                            const juri1 = await Juri1.findOne({
                                where:{
                                    poin: 2,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
    
                            //get poin dari juri2
                            const juri3 = await Juri3.findOne({
                                where:{
                                    poin: 2,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
                            console.log(juri1);
    
                            //jika ada poin masuk
                            if (juri1 || juri3) {
                                let data_poin = {
                                    id: uuidv4(),
                                    id_poin: getNilai.id_poin_merah,
                                    poin: result.poin 
                                }
                                let masuk = await poin_masuk.create(data_poin)
                                if (masuk) {
                                    console.log("poin masuk "+ result.poin);
    
                                    //update total poin pada tabel nilai
                                    const getPoin = await Poin.findOne({
                                        where: {id: getNilai.id_poin_merah}
                                    })
                                    let data_poin = {
                                        poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                        total_poin: (getPoin.total_poin) + (result.poin)
                                    }
                                    await Poin.update(data_poin, {where:{id: getNilai.id_poin_merah}})
                                    .then(result => {
                                        console.log("total poin updated");
                                    })
                                    .catch(error => {
                                        console.log(error.message);
    
                                    })
    
                                    //update total poin pada tabel jadwal
                                    const getJadwal = await Tanding.findOne({
                                        where: {id: getNilai.id_jadwal}
                                    })
                                    let data_total = {
                                        total_merah: (getJadwal.total_merah) + (result.poin)
                                    }
                                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
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
                }

            } else if(juri === 3){
                const cekPoin = await Juri3.findOne({
                    where:{
                        id_poin: getNilai.id_poin_merah,
                        id_juri: getJuri.id
                    },
                    order:[
                        ['createdAt', 'DESC']
                    ]
                })

                if (cekPoin) {
                    data.no = (cekPoin.no) + 1
                } else {
                    data.no = 1
                }
                result = await Juri3.create(data)

                //cek apakah juri 1 atau 2 sudah memasukan nilai dalam waktu 3 detik terakhir 
                //get input juri 1 terakhir
                const cekJuri1 = await Juri1.findOne({
                    where:{
                        poin: 2,
                    },
                    order:[['createdAt', 'DESC']]
                })

                //get input juri 2 terakir
                const cekJuri2 = await Juri2.findOne({
                    where:{
                        poin: 2
                    },
                    order:[['createdAt', 'DESC']]
                })

                if (cekJuri1 && cekJuri2) {
                    if(((result.cek_start >= cekJuri1.cek_start) && (result.cek_start <= cekJuri1.cek_end)) || ((result.cek_start >= cekJuri2.cek_start) && (result.cek_start <= cekJuri2.cek_end))){
                        console.log(true);
                    }else{
                        console.log(false);
                        setTimeout( async () => {
                            console.log(true + ' cek poin masuk');
                            //get poin dari juri 1
                            const juri1 = await Juri1.findOne({
                                where:{
                                    poin: 2,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
    
                            //get poin dari juri 2
                            const juri2 = await Juri2.findOne({
                                where:{
                                    poin: 2,
                                    cek_start: {[Op.between]: [result.cek_start, result.cek_end]}
                                }
                            })
                            // console.log(juri1);
    
                            //jika ada poin masuk
                            if (juri1 || juri2) {
                                let data_poin = {
                                    id: uuidv4(),
                                    id_poin: getNilai.id_poin_merah,
                                    poin: result.poin 
                                }
                                let masuk = await poin_masuk.create(data_poin)
                                if (masuk) {
                                    console.log("poin masuk "+ result.poin);
    
                                    //update total poin pada tabel nilai
                                    const getPoin = await Poin.findOne({
                                        where: {id: getNilai.id_poin_merah}
                                    })
                                    let data_poin = {
                                        poin_masuk: (getPoin.poin_masuk) + (result.poin),
                                        total_poin: (getPoin.total_poin) + (result.poin)
                                    }
                                    await Poin.update(data_poin, {where:{id: getNilai.id_poin_merah}})
                                    .then(result => {
                                        console.log("total poin updated");
                                    })
                                    .catch(error => {
                                        console.log(error.message);
    
                                    })
    
                                    //update total poin pada tabel jadwal
                                    const getJadwal = await Tanding.findOne({
                                        where: {id: getNilai.id_jadwal}
                                    })
                                    let data_total = {
                                        total_merah: (getJadwal.total_merah) + (result.poin)
                                    }
                                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
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
            //                 id_poin: getNilai.id_poin_merah,
            //                 poin: result.poin 
            //             }
            //             //jika ada poin masuk
            //             let masuk = await poin_masuk.create(data_poin)
            //             if (masuk) {
            //                 console.log("poin masuk "+ result.poin);

            //                 //update total poin pada tabel nilai
            //                 const getPoin = await Poin.findOne({
            //                     where: {id: getNilai.id_poin_merah}
            //                 })
            //                 let data_poin = {
            //                     poin_masuk: (getPoin.poin_masuk) + (result.poin),
            //                     total_poin: (getPoin.total_poin) + (result.poin)
            //                 }
            //                 await Poin.update(data_poin, {where:{id: getNilai.id_poin_merah}})
            //                 .then(result => {
            //                     console.log("total poin updated");
            //                 })
            //                 .catch(error => {
            //                     console.log(error.message);

            //                 })

            //                 //update total poin pada tabel jadwal
            //                 const getJadwal = await Tanding.findOne({
            //                     where: {id: getNilai.id_jadwal}
            //                 })
            //                 let data_total = {
            //                     total_merah: (getJadwal.total_merah) + (result.poin)
            //                 }
            //                 await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
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
            //                 id_poin: getNilai.id_poin_merah,
            //                 poin: result.poin 
            //             }
            //             //jika ada poin masuk
            //             let masuk = await poin_masuk.create(data_poin)
            //             if (masuk) {
            //                 console.log("poin masuk "+ result.poin);

            //                 //update total poin pada tabel nilai
            //                 const getPoin = await Poin.findOne({
            //                     where: {id: getNilai.id_poin_merah}
            //                 })
            //                 let data_poin = {
            //                     poin_masuk: (getPoin.poin_masuk) + (result.poin),
            //                     total_poin: (getPoin.total_poin) + (result.poin)
            //                 }
            //                 await Poin.update(data_poin, {where:{id: getNilai.id_poin_merah}})
            //                 .then(result => {
            //                     console.log("total poin updated");
            //                 })
            //                 .catch(error => {
            //                     console.log(error.message);

            //                 })

            //                 //update total poin pada tabel jadwal
            //                 const getJadwal = await Tanding.findOne({
            //                     where: {id: getNilai.id_jadwal}
            //                 })
            //                 let data_total = {
            //                     total_merah: (getJadwal.total_merah) + (result.poin)
            //                 }
            //                 await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
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
            //                 id_poin: getNilai.id_poin_merah,
            //                 poin: result.poin 
            //             }
            //             //jika ada poin masuk
            //             let masuk = await poin_masuk.create(data_poin)
            //             if (masuk) {
            //                 console.log("poin masuk "+ result.poin);

            //                 //update total poin pada tabel nilai
            //                 const getPoin = await Poin.findOne({
            //                     where: {id: getNilai.id_poin_merah}
            //                 })
            //                 let data_poin = {
            //                     poin_masuk: (getPoin.poin_masuk) + (result.poin),
            //                     total_poin: (getPoin.total_poin) + (result.poin)
            //                 }
            //                 await Poin.update(data_poin, {where:{id: getNilai.id_poin_merah}})
            //                 .then(result => {
            //                     console.log("total poin updated");
            //                 })
            //                 .catch(error => {
            //                     console.log(error.message);

            //                 })

            //                 //update total poin pada tabel jadwal
            //                 const getJadwal = await Tanding.findOne({
            //                     where: {id: getNilai.id_jadwal}
            //                 })
            //                 let data_total = {
            //                     total_merah: (getJadwal.total_merah) + (result.poin)
            //                 }
            //                 await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
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

    deletePoinMerah: async (req,res) => {
        try {
            schedule.cancelJob('cek')
            const id_juri = {id: req.params.id_juri}
            const getJuri = await Juri.findOne({where:id_juri})
            const juri = getJuri.no

            let result = []

            if(getJuri){
                if (juri === 1) {
                    const getLog1 = await Juri1.findOne({
                        where: {id_juri: req.params.id_juri, sudut: "merah"},
                        order:[
                            ["createdAt","DESC"]
                        ]
                    })
                    if (getLog1.masuk === "true") {
                        console.log("Tidak bisa hapus poin, Poin yang dipilih telah masuk");
                        return res.json({
                            message: "Tidak bisa hapus poin, Poin yang dipilih telah masuk"
                        })
                    } else {
                        //delete last input poin
                        result = await Juri1.destroy({where:{id:getLog1.id}}) 
                    }
                } else if (juri === 2) {
                    const getLog2 = await Juri2.findOne({
                        where: {id_juri: req.params.id_juri, sudut: "merah"},
                        order:[
                            ["createdAt","DESC"]
                        ]
                    })
                    if (getLog2.masuk === "true") {
                        console.log("Tidak bisa hapus poin, Poin yang dipilih telah masuk");
                        return res.json({
                            message: "Tidak bisa hapus poin, Poin yang dipilih telah masuk"
                        })
                    } else {
                        //delete last input poin
                        result = await Juri2.destroy({where:{id:getLog2.id}}) 
                    }
                } else if (juri === 3) {
                    const getLog3 = await Juri3.findOne({
                        where: {id_juri: req.params.id_juri, sudut: "merah"},
                        order:[
                            ["createdAt","DESC"]
                        ]
                    })
                    if (getLog3.masuk === "true") {
                        console.log("Tidak bisa hapus poin, Poin yang dipilih telah masuk");
                        return res.json({
                            message: "Tidak bisa hapus poin, Poin yang dipilih telah masuk"
                        })
                    } else {
                        //delete last input poin
                        result = await Juri3.destroy({where:{id:getLog3.id}})
                    }
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

    addJatuhanMerah,
    deleteJatuhanMerah,

    addBinaanMerah,
    deleteBinaanMerah,

    addTeguranMerah,
    deleteTeguranMerah,
    
    addPeringatanMerah,
    deletePeringatanMerah
}