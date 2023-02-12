const models = require('../../models/index')
const Tanding = models.jadwal_tanding
const Nilai = models.nilai_tanding
const Poin = models.poin
const Logs = models.log_poin_juri1
const {v4 : uuidv4} = require("uuid")
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../helpers");

const TambahBabak = require('../../middleware/babak')

module.exports = {
    getAllNilai: async (req,res) =>{
        try{
            const result = await Nilai.findAll({
                attributes: ["id","babak"],
                include:[
                    //include jadwal
                    {
                        model: models.jadwal_tanding,
                        as: 'jadwal',
                        attributes: ["id","partai","kelas","jk","babak","total_merah","total_biru"],
                        include:[
                            {
                                model: models.peserta_tanding,
                                as: 'merah',
                                attributes: ["id","nama","kontingen"]
                            },
                            {
                                model: models.peserta_tanding,
                                as: 'biru',
                                attributes: ["id","nama","kontingen"]
                            },
                        ]
                    },

                    //include poin merah
                    {
                        model: models.poin,
                        as: 'poin_merah',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[

                            //show log juri 1
                            {
                                model: models.log_poin_juri1,
                                as: "log_juri1",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri1, as: "juri1"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 2
                            {
                                model: models.log_poin_juri2,
                                as: "log_juri2",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri2, as: "juri2"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 3
                            {
                                model: models.log_poin_juri3,
                                as: "log_juri3",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri3, as: "juri3"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log poin masuk
                            {
                                model: models.log_poin_masuk,
                                as: "log_poin_masuk",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_masuk, as: "log_poin_masuk"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log jatuhan
                            {
                                model: models.log_jatuhan,
                                as: "log_jatuhan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_jatuhan, as: "log_jatuhan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log binaan
                            {
                                model: models.log_binaan,
                                as: "log_binaan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_binaan, as: "log_binaan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log teguran
                            {
                                model: models.log_teguran,
                                as: "log_teguran",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_teguran, as: "log_teguran"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log peringatan
                            {
                                model: models.log_peringatan,
                                as: "log_peringatan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_peringatan, as: "log_peringatan"}, 'createdAt', 'DESC'],
                                ]
                            },
                        ]
                    },

                    //include poin biru
                    {
                        model: models.poin,
                        as: 'poin_biru',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[

                            //show log juri 1
                            {
                                model: models.log_poin_juri1,
                                as: "log_juri1",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri1, as: "juri1"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 2
                            {
                                model: models.log_poin_juri2,
                                as: "log_juri2",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri2, as: "juri2"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 3
                            {
                                model: models.log_poin_juri3,
                                as: "log_juri3",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri3, as: "juri3"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log poin masuk
                            {
                                model: models.log_poin_masuk,
                                as: "log_poin_masuk",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_masuk, as: "log_poin_masuk"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log jatuhan
                            {
                                model: models.log_jatuhan,
                                as: "log_jatuhan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_jatuhan, as: "log_jatuhan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log binaan
                            {
                                model: models.log_binaan,
                                as: "log_binaan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_binaan, as: "log_binaan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log teguran
                            {
                                model: models.log_teguran,
                                as: "log_teguran",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_teguran, as: "log_teguran"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log peringatan
                            {
                                model: models.log_peringatan,
                                as: "log_peringatan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_peringatan, as: "log_peringatan"}, 'createdAt', 'DESC'],
                                ]
                            },
                        ]
                    },
                ],
            })
            return getResponse ( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    getbyIdJadwal: async (req,res) =>{
        try{
            const id_jadwal = {id_jadwal: req.params.id_jadwal}
            const result = await Nilai.findAll({
                where: id_jadwal,
                attributes: ["id","babak"],
                include:[
                    //include jadwal
                    {
                        model: models.jadwal_tanding,
                        as: 'jadwal',
                        attributes: ["id","partai","kelas","jk","babak","total_merah","total_biru"],
                        include:[
                            {
                                model: models.peserta_tanding,
                                as: 'merah',
                                attributes: ["id","nama","kontingen"]
                            },
                            {
                                model: models.peserta_tanding,
                                as: 'biru',
                                attributes: ["id","nama","kontingen"]
                            },
                        ]
                    },

                    //include poin merah
                    {
                        model: models.poin,
                        as: 'poin_merah',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[

                            //show log juri 1
                            {
                                model: models.log_poin_juri1,
                                as: "log_juri1",
                                attributes:["poin", "masuk", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri1, as: "juri1"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 2
                            {
                                model: models.log_poin_juri2,
                                as: "log_juri2",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri2, as: "juri2"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 3
                            {
                                model: models.log_poin_juri3,
                                as: "log_juri3",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri3, as: "juri3"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log poin masuk
                            {
                                model: models.log_poin_masuk,
                                as: "log_poin_masuk",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_masuk, as: "log_poin_masuk"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log jatuhan
                            {
                                model: models.log_jatuhan,
                                as: "log_jatuhan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_jatuhan, as: "log_jatuhan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log binaan
                            {
                                model: models.log_binaan,
                                as: "log_binaan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_binaan, as: "log_binaan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log teguran
                            {
                                model: models.log_teguran,
                                as: "log_teguran",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_teguran, as: "log_teguran"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log peringatan
                            {
                                model: models.log_peringatan,
                                as: "log_peringatan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_peringatan, as: "log_peringatan"}, 'createdAt', 'DESC'],
                                ]
                            },
                        ]
                    },

                    //include poin biru
                    {
                        model: models.poin,
                        as: 'poin_biru',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[

                            //show log juri 1
                            {
                                model: models.log_poin_juri1,
                                as: "log_juri1",
                                attributes:["poin", "masuk", "createdAt"],
                            },

                            //show log juri 2
                            {
                                model: models.log_poin_juri2,
                                as: "log_juri2",
                                attributes:["poin", "masuk", "createdAt"],
                            },

                            //show log juri 3
                            {
                                model: models.log_poin_juri3,
                                as: "log_juri3",
                                attributes:["poin", "masuk", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri3, as: "juri3"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log poin masuk
                            {
                                model: models.log_poin_masuk,
                                as: "log_poin_masuk",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_masuk, as: "log_poin_masuk"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log jatuhan
                            {
                                model: models.log_jatuhan,
                                as: "log_jatuhan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_jatuhan, as: "log_jatuhan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log binaan
                            {
                                model: models.log_binaan,
                                as: "log_binaan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_binaan, as: "log_binaan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log teguran
                            {
                                model: models.log_teguran,
                                as: "log_teguran",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_teguran, as: "log_teguran"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log peringatan
                            {
                                model: models.log_peringatan,
                                as: "log_peringatan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_peringatan, as: "log_peringatan"}, 'createdAt', 'DESC'],
                                ]
                            },
                        ]
                    },
                ],
                order: [
                    ['babak', 'ASC'],

                    //order poin biru
                    [
                    {model: models.poin, as: "poin_merah"}, 
                    {model: models.log_poin_juri1,
                    as: "log_juri1"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_poin_juri2,
                        as: "log_juri2"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_poin_juri3,
                        as: "log_juri3"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_poin_masuk,
                        as: "log_poin_masuk"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_jatuhan,
                        as: "log_jatuhan"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_binaan,
                        as: "log_binaan"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_teguran,
                        as: "log_teguran"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_peringatan,
                        as: "log_peringatan"},  'createdAt', 'DESC'
                    ],

                    //order poin biru
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_poin_juri1,
                        as: "log_juri1"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_poin_juri2,
                        as: "log_juri2"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_poin_juri3,
                        as: "log_juri3"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_poin_masuk,
                        as: "log_poin_masuk"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_jatuhan,
                        as: "log_jatuhan"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_binaan,
                        as: "log_binaan"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_teguran,
                        as: "log_teguran"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_peringatan,
                        as: "log_peringatan"},  'createdAt', 'DESC'
                    ],
                    
                ],
            })
            return getResponse ( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
    getbyIdNilai: async (req,res) => {
        try{
            const id = {id: req.params.id}
            const result = await Nilai.findAll({
                where: id,
                attributes: ["id","babak"],
                include:[
                    //include jadwal
                    {
                        model: models.jadwal_tanding,
                        as: 'jadwal',
                        attributes: ["id","partai","kelas","jk","babak","total_merah","total_biru"],
                        include:[
                            {
                                model: models.peserta_tanding,
                                as: 'merah',
                                attributes: ["id","nama","kontingen"]
                            },
                            {
                                model: models.peserta_tanding,
                                as: 'biru',
                                attributes: ["id","nama","kontingen"]
                            },
                        ]
                    },

                    //include poin merah
                    {
                        model: models.poin,
                        as: 'poin_merah',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[

                            //show log juri 1
                            {
                                model: models.log_poin_juri1,
                                as: "log_juri1",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri1, as: "juri1"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 2
                            {
                                model: models.log_poin_juri2,
                                as: "log_juri2",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri2, as: "juri2"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 3
                            {
                                model: models.log_poin_juri3,
                                as: "log_juri3",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri3, as: "juri3"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log poin masuk
                            {
                                model: models.log_poin_masuk,
                                as: "log_poin_masuk",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_masuk, as: "log_poin_masuk"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log jatuhan
                            {
                                model: models.log_jatuhan,
                                as: "log_jatuhan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_jatuhan, as: "log_jatuhan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log binaan
                            {
                                model: models.log_binaan,
                                as: "log_binaan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_binaan, as: "log_binaan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log teguran
                            {
                                model: models.log_teguran,
                                as: "log_teguran",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_teguran, as: "log_teguran"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log peringatan
                            {
                                model: models.log_peringatan,
                                as: "log_peringatan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_peringatan, as: "log_peringatan"}, 'createdAt', 'DESC'],
                                ]
                            },
                        ]
                    },

                    //include poin biru
                    {
                        model: models.poin,
                        as: 'poin_biru',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[

                            //show log juri 1
                            {
                                model: models.log_poin_juri1,
                                as: "log_juri1",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri1, as: "juri1"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 2
                            {
                                model: models.log_poin_juri2,
                                as: "log_juri2",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri2, as: "juri2"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 3
                            {
                                model: models.log_poin_juri3,
                                as: "log_juri3",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri3, as: "juri3"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log poin masuk
                            {
                                model: models.log_poin_masuk,
                                as: "log_poin_masuk",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_masuk, as: "log_poin_masuk"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log jatuhan
                            {
                                model: models.log_jatuhan,
                                as: "log_jatuhan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_jatuhan, as: "log_jatuhan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log binaan
                            {
                                model: models.log_binaan,
                                as: "log_binaan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_binaan, as: "log_binaan"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log teguran
                            {
                                model: models.log_teguran,
                                as: "log_teguran",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_teguran, as: "log_teguran"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log peringatan
                            {
                                model: models.log_peringatan,
                                as: "log_peringatan",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_peringatan, as: "log_peringatan"}, 'createdAt', 'DESC'],
                                ]
                            },
                        ]
                    },
                ],
                order: [
                    ['babak', 'ASC'],
                ],
            })
            return getResponse ( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getPoinbyBabak: async (req,res) => {
        try {
            const id_jadwal = {id_jadwal: req.body.id_jadwal}
            let getNilai = await Nilai.findOne({
                where: id_jadwal
            })

            let result = getNilai.poin_merah

            
            return getResponse( req, res,getNilai )
        } catch (error) {
            return errorResponse( req, res, result )
        }
    },

    addBabak1: async (req,res) =>{
        try{
            //set id as uuid
            const id = uuidv4()

            //get value from request body
            let id_jadwal = req.body.id_jadwal

            const getJadwal = await Tanding.findOne({
                where: {id: req.body.id_jadwal}
            })

            const getNilai = await Nilai.findOne({
                where: {id_jadwal: req.body.id_jadwal, babak:"I"}
            })
            // console.log(getJadwal);

            if (getNilai) {
                return res.json({
                    message: "babak I sudah ada"
                })
            }

            console.log("create babak I");
            //set poin for red
            let merah = {
                id: uuidv4(),
                id_peserta: getJadwal.id_merah
            }
            const poin_merah = await Poin.create(merah)
            
            //set poin for red
            let biru = {
                id: uuidv4(),
                id_peserta: getJadwal.id_biru
            }
            const poin_biru = await Poin.create(biru)

            //create grades for schedule
            let nilai = {
                id: id,
                id_jadwal: id_jadwal,
                babak: "I",
                id_poin_merah: poin_merah.id,
                id_poin_biru: poin_biru.id
            }
            const result = await Nilai.create(nilai)
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    addBabak2: async (req,res) =>{
        try{
            //set id as uuid
            const id = uuidv4()

            //get value from request body
            let id_jadwal = req.body.id_jadwal

            const getJadwal = await Tanding.findOne({
                where: {id: req.body.id_jadwal}
            })

            const getNilai = await Nilai.findOne({
                where: {id_jadwal: req.body.id_jadwal, babak:"Ii"}
            })
            // console.log(getJadwal);

            if (getNilai) {
                return res.json({
                    message: "babak II sudah ada"
                })
            }

            console.log("create babak II");

            //set poin for red
            let merah = {
                id: uuidv4(),
                id_peserta: getJadwal.id_merah
            }
            const poin_merah = await Poin.create(merah)
            
            //set poin for red
            let biru = {
                id: uuidv4(),
                id_peserta: getJadwal.id_biru
            }
            const poin_biru = await Poin.create(biru)

            //create grades for schedule
            let nilai = {
                id: id,
                id_jadwal: id_jadwal,
                babak: "II",
                id_poin_merah: poin_merah.id,
                id_poin_biru: poin_biru.id
            }
            const result = await Nilai.create(nilai)
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    addBabak3: async (req,res) =>{
        try{
            //set id as uuid
            const id = uuidv4()

            //get value from request body
            let id_jadwal = req.body.id_jadwal

            const getJadwal = await Tanding.findOne({
                where: {id: req.body.id_jadwal}
            })

            const getNilai = await Nilai.findOne({
                where: {id_jadwal: req.body.id_jadwal, babak:"III"}
            })
            // console.log(getJadwal);

            if (getNilai) {
                return res.json({
                    message: "babak III sudah ada"
                })
            }

            console.log("create babak I");
            //set poin for red
            let merah = {
                id: uuidv4(),
                id_peserta: getJadwal.id_merah
            }
            const poin_merah = await Poin.create(merah)
            
            //set poin for red
            let biru = {
                id: uuidv4(),
                id_peserta: getJadwal.id_biru
            }
            const poin_biru = await Poin.create(biru)

            //create grades for schedule
            let nilai = {
                id: id,
                id_jadwal: id_jadwal,
                babak: "III",
                id_poin_merah: poin_merah.id,
                id_poin_biru: poin_biru.id
            }
            const result = await Nilai.create(nilai)
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
}