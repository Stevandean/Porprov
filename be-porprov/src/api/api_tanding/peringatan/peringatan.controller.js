const models = require('../../../models/index')
const Peringatan = models.peringatan
const Nilai = models.detail_jadwal_tanding
const Poin = models.nilai_tanding
const Tanding = models.jadwal_tanding
const {v4 : uuidv4} = require("uuid")
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../../helpers");

module.exports = {

    getAllPeringatan: async (req,res) =>{
        try {
            const result = await Peringatan.findAll({
                where: {
                    id_jadwal: req.params.id_jadwal,
                    sudut: req.params.sudut,
                },
                order: [
                    ['createdAt', 'ASC']
                ]
            })
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    },

    getPeringatanMerah: async (req,res) =>{
        try {
            const result = await Peringatan.findAll({
                where: {
                    id_jadwal: req.params.id_jadwal,
                    sudut: "merah",
                    babak: req.params.babak
                },
                order: [
                    ['createdAt', 'ASC']
                ]
            })
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    },

    getPeringatanBiru: async (req,res) =>{
        try {
            const result = await Peringatan.findAll({
                where: {
                    id_jadwal: req.params.id_jadwal,
                    sudut: "biru",
                    babak: req.params.babak
                },
                order: [
                    ['createdAt', 'ASC']
                ]
            })
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    },

    addPeringatanMerah: async (req,res) => {
    try {
        const getNilai = await Nilai.findOne({
            where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
        })

        const getPeringatan = await Peringatan.findOne({
            where: {
                id_jadwal: req.body.id_jadwal,
                sudut: "merah",
            },
            order: [
                ['createdAt', 'DESC']
            ]
        })

        let result = []
        if(!getPeringatan){
            let data = {
                id_jadwal: req.body.id_jadwal,
                sudut: 'merah',
                babak: req.body.babak,
                poin: "-5"
            }
            result = await Peringatan.create(data)  
            
            //update total hukum babak
            const getPoin = await Poin.findOne({
                where: {id: getNilai.id_nilai_merah}
            })
            let data_poin = {
                total_hukum: (getPoin.total_hukum) + (-5),
                total_poin: (getPoin.total_poin) + (-5)
            }
            await Poin.update(data_poin,{where:{id: getNilai.id_nilai_merah}})
            .then(result => {
                console.log("total hukum updated");
            })
            .catch(error => {
                console.log(error.message);
            })

            //update total poin pada tabel jadwal
            const getJadwal = await Tanding.findOne({
                where: {id: getNilai.id_jadwal}
            })
            let data_total = {
                total_merah: (getJadwal.total_merah) + (-5)
            }
            await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
            .then(result => {
                console.log("total nilai updated");
            })
            .catch(error => {
                console.log(error.message);

            })
        } else if (getPeringatan){
            if(getPeringatan.poin == '-5'){
                // console.log(getPeringatan);
                    //set data peringatan
                    let data = {
                    id_jadwal: req.body.id_jadwal,
                    sudut: 'merah',
                    babak: req.body.babak,
                    poin: "-10"
                }
                result = await Peringatan.create(data)

                //update total hukum babak
                const getPoin = await Poin.findOne({
                    where: {id: getNilai.id_nilai_merah}
                })
                let data_poin = {
                    total_hukum: (getPoin.total_hukum) + (-10),
                    total_poin: (getPoin.total_poin) + (-10)
                }
                await Poin.update(data_poin,{where:{id: getNilai.id_nilai_merah}})
                .then(result => {
                    console.log("total hukum updated");
                })
                .catch(error => {
                    console.log(error.message);
                })

                //update total poin pada tabel jadwal
                const getJadwal = await Tanding.findOne({
                    where: {id: getNilai.id_jadwal}
                })
                let data_total = {
                    total_merah: (getJadwal.total_merah) + (-10)
                }
                await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                .then(result => {
                    console.log("total nilai updated");
                })
                .catch(error => {
                    console.log(error.message);

                })
                return addResponse( req, res, result )
            } else if (getPeringatan.poin == '-10'){
                //set data peringatan
                let data = {
                    id_jadwal: req.body.id_jadwal,
                    sudut: 'merah',
                    babak: req.body.babak,
                    poin: "DISKUALIFIKASI"
                }
                result = await Peringatan.create(data)
            }
        }
        return getResponse ( req, res, result )
    } catch (error) {
        return errorResponse( req, res, error.message)
    }
    },

    addPeringatanBiru: async (req,res) => {
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })
    
            const getPeringatan = await Peringatan.findOne({
                where: {
                    id_jadwal: req.body.id_jadwal,
                    sudut: "biru",
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            })
    
            let result = []
            if(!getPeringatan){
                let data = {
                    id_jadwal: req.body.id_jadwal,
                    sudut: 'biru',
                    babak: req.body.babak,
                    poin: "-5"
                }
                result = await Peringatan.create(data)  
                
                //update total hukum babak
                const getPoin = await Poin.findOne({
                    where: {id: getNilai.id_nilai_biru}
                })
                let data_poin = {
                    total_hukum: (getPoin.total_hukum) + (-5),
                    total_poin: (getPoin.total_poin) + (-5)
                }
                await Poin.update(data_poin,{where:{id: getNilai.id_nilai_biru}})
                .then(result => {
                    console.log("total hukum updated");
                })
                .catch(error => {
                    console.log(error.message);
                })
    
                //update total poin pada tabel jadwal
                const getJadwal = await Tanding.findOne({
                    where: {id: getNilai.id_jadwal}
                })
                let data_total = {
                    total_biru: (getJadwal.total_biru) + (-5)
                }
                await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                .then(result => {
                    console.log("total nilai updated");
                })
                .catch(error => {
                    console.log(error.message);
    
                })
            } else if (getPeringatan){
                if(getPeringatan.poin == '-5'){
                    // console.log(getPeringatan);
                        //set data peringatan
                        let data = {
                        id_jadwal: req.body.id_jadwal,
                        sudut: 'biru',
                        babak: req.body.babak,
                        poin: "-10"
                    }
                    result = await Peringatan.create(data)
    
                    //update total hukum babak
                    const getPoin = await Poin.findOne({
                        where: {id: getNilai.id_nilai_biru}
                    })
                    let data_poin = {
                        total_hukum: (getPoin.total_hukum) + (-10),
                        total_poin: (getPoin.total_poin) + (-10)
                    }
                    await Poin.update(data_poin,{where:{id: getNilai.id_nilai_biru}})
                    .then(result => {
                        console.log("total hukum updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
    
                    //update total poin pada tabel jadwal
                    const getJadwal = await Tanding.findOne({
                        where: {id: getNilai.id_jadwal}
                    })
                    let data_total = {
                        total_biru: (getJadwal.total_biru) + (-10)
                    }
                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    .then(result => {
                        console.log("total nilai updated");
                    })
                    .catch(error => {
                        console.log(error.message);
    
                    })
                    return addResponse( req, res, result )
                } else if (getPeringatan.poin == '-10'){
                    //set data peringatan
                    let data = {
                        id_jadwal: req.body.id_jadwal,
                        sudut: 'biru',
                        babak: req.body.babak,
                        poin: "DISKUALIFIKASI"
                    }
                    result = await Peringatan.create(data)
                }
            }
            return getResponse ( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
        },

    deletePeringatanMerah: async (req,res) => {
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })

            //cek peringatan
            const getPeringatan = await Peringatan.findOne({
                where: {
                    id_jadwal: req.body.id_jadwal,
                    sudut: "merah",
                    babak: req.body.babak
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            let result = []
            if (getPeringatan) {
                if(getPeringatan.poin === "-5"){
                    result = await Peringatan.destroy({
                        where: {id: getPeringatan.id}
                    })
        
                    //update total hukum babak
                    const getPoin = await Poin.findOne({
                        where: {id: getNilai.id_nilai_merah}
                    })
                    let data_poin = {
                        total_hukum: (getPoin.total_hukum) + 5,
                        total_poin: (getPoin.total_poin) + 5
                    }
                    await Poin.update(data_poin,{where:{id: getNilai.id_nilai_merah}})
                    .then(result => {
                        console.log("total hukum updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
        
                    //update total poin pada tabel jadwal
                    const getJadwal = await Tanding.findOne({
                        where: {id: getNilai.id_jadwal}
                    })
                    let data_total = {
                        total_merah: (getJadwal.total_merah) + 5
                    }
                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    .then(result => {
                        console.log("total nilai updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })

                    return deleteResponse(req, res, result)
                }else if(getPeringatan.poin === "-10"){
                    result = await Peringatan.destroy({where: {id: getPeringatan.id}})
                    //update total hukum babak
                    const getPoin = await Poin.findOne({
                        where: {id: getNilai.id_nilai_merah}
                    })
                    let data_poin = {
                        total_hukum: (getPoin.total_hukum) + 10,
                        total_poin: (getPoin.total_poin) + 10
                    }
                    await Poin.update(data_poin,{where:{id: getNilai.id_nilai_merah}})
                    .then(result => {
                        console.log("total hukum updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
        
                    //update total poin pada tabel jadwal
                    const getJadwal = await Tanding.findOne({
                        where: {id: getNilai.id_jadwal}
                    })
                    let data_total = {
                        total_merah: (getJadwal.total_merah) + 10
                    }
                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    .then(result => {
                        console.log("total nilai updated");
                    })
                    .catch(error => {
                        console.log(error.message);
        
                    })
                    return deleteResponse(req, res, result)
                }else if(getPeringatan.poin === "DISKUALIFIKASI"){
                    result = await Peringatan.destroy({where: {id: getPeringatan.id}})
                    return deleteResponse(req, res, result)
                }
            } else if (!getPeringatan) {
                return res.json({
                    message: "peringatan belum ditambahkan"
                })
            }
            return editResponse(req, res, result)
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    },

    deletePeringatanBiru: async (req,res) => {
        try {
            const getNilai = await Nilai.findOne({
                where: {id_jadwal : req.body.id_jadwal, babak: req.body.babak}  
            })

            //cek peringatan
            const getPeringatan = await Peringatan.findOne({
                where: {
                    id_jadwal: req.body.id_jadwal,
                    sudut: "biru",
                    babak: req.body.babak
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            let result = []
            if (getPeringatan) {
                if(getPeringatan.poin === "-5"){
                    result = await Peringatan.destroy({
                        where: {id: getPeringatan.id}
                    })
        
                    //update total hukum babak
                    const getPoin = await Poin.findOne({
                        where: {id: getNilai.id_nilai_biru}
                    })
                    let data_poin = {
                        total_hukum: (getPoin.total_hukum) + 5,
                        total_poin: (getPoin.total_poin) + 5
                    }
                    await Poin.update(data_poin,{where:{id: getNilai.id_nilai_biru}})
                    .then(result => {
                        console.log("total hukum updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
        
                    //update total poin pada tabel jadwal
                    const getJadwal = await Tanding.findOne({
                        where: {id: getNilai.id_jadwal}
                    })
                    let data_total = {
                        total_biru: (getJadwal.total_biru) + 5
                    }
                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    .then(result => {
                        console.log("total nilai updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })

                    return deleteResponse(req, res, result)
                }else if(getPeringatan.poin === "-10"){
                    result = await Peringatan.destroy({where: {id: getPeringatan.id}})
                    //update total hukum babak
                    const getPoin = await Poin.findOne({
                        where: {id: getNilai.id_nilai_biru}
                    })
                    let data_poin = {
                        total_hukum: (getPoin.total_hukum) + 10,
                        total_poin: (getPoin.total_poin) + 10
                    }
                    await Poin.update(data_poin,{where:{id: getNilai.id_nilai_biru}})
                    .then(result => {
                        console.log("total hukum updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
        
                    //update total poin pada tabel jadwal
                    const getJadwal = await Tanding.findOne({
                        where: {id: getNilai.id_jadwal}
                    })
                    let data_total = {
                        total_biru: (getJadwal.total_biru) + 10
                    }
                    await Tanding.update(data_total, {where:{id: getNilai.id_jadwal}})
                    .then(result => {
                        console.log("total nilai updated");
                    })
                    .catch(error => {
                        console.log(error.message);
        
                    })
                    return deleteResponse(req, res, result)
                }else if(getPeringatan.poin === "DISKUALIFIKASI"){
                    result = await Peringatan.destroy({where: {id: getPeringatan.id}})
                    return deleteResponse(req, res, result)
                }
            } else if (!getPeringatan) {
                return res.json({
                    message: "peringatan belum ditambahkan"
                })
            }
            return editResponse(req, res, result)
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    },
}