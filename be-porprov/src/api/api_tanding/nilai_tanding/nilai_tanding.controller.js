const models = require('../../../models/index')
const Tanding = models.jadwal_tanding
const Detail = models.detail_jadwal_tanding
const Nilai = models.nilai_tanding
const Juri = models.juri
const LogJuri = models.log_poin_juri
const {v4 : uuidv4} = require("uuid")
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../../helpers");

// const TambahBabak = require('../../middleware/babak')

module.exports = {
    //read semua nilai tanding
    getAllDetail: async (req,res) =>{
        try{
            const result = await Detail.findAll({
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
                        model: models.nilai_tanding,
                        as: 'nilai_merah',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[

                            //show log juri 1
                            {
                                model: models.log_poin_juri,
                                as: "log_juri1",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri, as: "juri1"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 2
                            {
                                model: models.log_poin_juri,
                                as: "log_juri2",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri, as: "juri2"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 3
                            {
                                model: models.log_poin_juri,
                                as: "log_juri3",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri, as: "juri3"}, 'createdAt', 'DESC'],
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
                        ]
                    },

                    //include poin biru
                    {
                        model: models.nilai_tanding,
                        as: 'nilai_biru',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[

                            //show log juri 1
                            {
                                model: models.log_poin_juri,
                                as: "log_juri1",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri, as: "juri1"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 2
                            {
                                model: models.log_poin_juri,
                                as: "log_juri2",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri, as: "juri2"}, 'createdAt', 'DESC'],
                                ]
                            },

                            //show log juri 3
                            {
                                model: models.log_poin_juri,
                                as: "log_juri3",
                                attributes:["poin", "createdAt"],
                                order: [
                                    [{model:models.log_poin_juri, as: "juri3"}, 'createdAt', 'DESC'],
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
                        ]
                    },
                ],
            })
            return getResponse ( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    //read nilai tanding untuk halaman layar
    getDetailLayar: async (req,res) =>{
        try{
            const id_jadwal = {id_jadwal: req.params.id_jadwal}
            const result = await Detail.findAll({
                where: id_jadwal,
                attributes: ["id","babak"],
                include:[
                    //include poin merah
                    {
                        model: models.nilai_tanding,
                        as: 'nilai_merah',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[
                            //show log binaan
                            {
                                model: models.log_binaan,
                                as: "log_binaan",
                                attributes:["poin", "createdAt"],
                            },

                            //show log teguran
                            {
                                model: models.log_teguran,
                                as: "log_teguran",
                                attributes:["poin", "createdAt"],
                            },

                            //show log jatuhan
                            {
                                model: models.log_jatuhan,
                                as: "log_jatuhan",
                                attributes:["poin", "createdAt"],
                            },

                        ]
                    },

                    //include poin biru
                    {
                        model: models.nilai_tanding,
                        as: 'nilai_biru',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[
                            //show log binaan
                            {
                                model: models.log_binaan,
                                as: "log_binaan",
                                attributes:["poin", "createdAt"],
                            },

                            //show log teguran
                            {
                                model: models.log_teguran,
                                as: "log_teguran",
                                attributes:["poin", "createdAt"],
                            },

                            //show log jatuhan
                            {
                                model: models.log_jatuhan,
                                as: "log_jatuhan",
                                attributes:["poin", "createdAt"],
                            },
                        ]
                    },
                ],
                order: [
                    ['babak', 'ASC'],

                    //order poin biru
                    [
                        {model: models.nilai_tanding, as: "nilai_merah"}, 
                        {model: models.log_binaan,
                        as: "log_binaan"},  'createdAt', 'ASC'
                    ],
                    [
                        {model: models.nilai_tanding, as: "nilai_merah"}, 
                        {model: models.log_teguran,as: "log_teguran"},
                        'poin', 'DESC'
                    ],

                    //order poin biru
                    [
                        {model: models.nilai_tanding, as: "nilai_biru"}, 
                        {model: models.log_binaan,
                        as: "log_binaan"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.nilai_tanding, as: "nilai_biru"}, 
                        {model: models.log_teguran,
                        as: "log_teguran"},  'poin', 'DESC'
                    ],
                    
                ],
            })
            return getResponse ( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    //read nilai tanding berdasarkan id_jadwal
    getbyIdJadwal: async (req,res) =>{
        try{
            const id_jadwal = {id_jadwal: req.params.id_jadwal}
            const result = await Detail.findAll({
                where: id_jadwal,
                attributes: ["babak"],
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
                        model: models.nilai_tanding,
                        as: 'nilai_merah',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[

                            //show log juri 1
                            // {
                            //     model: models.log_poin_juri,
                            //     as: "log_juri1",
                            //     attributes:["poin", "createdAt"],
                            //     order: [
                            //         [{model:models.log_poin_juri, as: "juri1"}, 'createdAt', 'DESC'],
                            //     ]
                            // },

                            // //show log juri 2
                            // {
                            //     model: models.log_poin_juri,
                            //     as: "log_juri2",
                            //     attributes:["poin", "createdAt"],
                            //     order: [
                            //         [{model:models.log_poin_juri, as: "juri2"}, 'createdAt', 'DESC'],
                            //     ]
                            // },

                            // //show log juri 3
                            // {
                            //     model: models.log_poin_juri,
                            //     as: "log_juri3",
                            //     attributes:["poin", "createdAt"],
                            //     order: [
                            //         [{model:models.log_poin_juri, as: "juri3"}, 'createdAt', 'DESC'],
                            //     ]
                            // },

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
                        ]
                    },

                    //include poin biru
                    {
                        model: models.nilai_tanding,
                        as: 'nilai_biru',
                        attributes: {
                            exclude: ["createdAt","updatedAt"]
                        },
                        include:[

                            // //show log juri 1
                            // {
                            //     model: models.log_poin_juri,
                            //     as: "log_juri1",
                            //     attributes:["poin", "createdAt"],
                            //     order: [
                            //         [{model:models.log_poin_juri, as: "juri1"}, 'createdAt', 'DESC'],
                            //     ]
                            // },

                            // //show log juri 2
                            // {
                            //     model: models.log_poin_juri,
                            //     as: "log_juri2",
                            //     attributes:["poin", "createdAt"],
                            //     order: [
                            //         [{model:models.log_poin_juri, as: "juri2"}, 'createdAt', 'DESC'],
                            //     ]
                            // },

                            // //show log juri 3
                            // {
                            //     model: models.log_poin_juri,
                            //     as: "log_juri3",
                            //     attributes:["poin", "createdAt"],
                            //     order: [
                            //         [{model:models.log_poin_juri, as: "juri3"}, 'createdAt', 'DESC'],
                            //     ]
                            // },

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
                        ]
                    },
                ],
                order: [
                    ['babak', 'ASC'],
                    [
                        {model: models.nilai_tanding, as: "nilai_merah"}, 
                        {model: models.log_poin_masuk,
                        as: "log_poin_masuk"},  'createdAt', 'ASC'
                    ],
                    [
                        {model: models.nilai_tanding, as: "nilai_merah"}, 
                        {model: models.log_jatuhan,
                        as: "log_jatuhan"},  'createdAt', 'ASC'
                    ],
                    [
                        {model: models.nilai_tanding, as: "nilai_merah"}, 
                        {model: models.log_binaan,
                        as: "log_binaan"},  'createdAt', 'ASC'
                    ],

                    [
                        {model: models.nilai_tanding, as: "nilai_biru"}, 
                        {model: models.log_poin_masuk,
                        as: "log_poin_masuk"},  'createdAt', 'ASC'
                    ],
                    [
                        {model: models.nilai_tanding, as: "nilai_biru"}, 
                        {model: models.log_jatuhan,
                        as: "log_jatuhan"},  'createdAt', 'ASC'
                    ],
                    [
                        {model: models.nilai_tanding, as: "nilai_biru"}, 
                        {model: models.log_binaan,
                        as: "log_binaan"},  'createdAt', 'DESC'
                    ],
                    
                ],
            })
            return getResponse ( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    //get berdasarkan babak dan jadwal
    getBabakbyJadwal: async (req,res) => {
        try {
            const result = await Detail.findAll({
                where: {id_jadwal: req.params.id_jadwal},
                attributes: ['babak'],
                order:[['babak', 'ASC']]
            })
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )   
        }
    },

    //get berdasarkan juri dan babak
    getJuribyBabak: async (req,res) =>{
        try {
            const juri = req.params.no_juri

            let result = []
            if (juri == 1) {
                result = await Detail.findAll({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                        babak: req.params.babak
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_merah',
                            attributes: ['dis'],
                            include:[
    
                                //show log juri 1
                                {
                                    model: models.log_poin_juri,
                                    as: "log_juri1",
                                    attributes:["poin", "masuk", 'createdAt'],
                                },
                            ]
                        },
    
                        //include poin biru
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_biru',
                            attributes: ['dis'],
                            include:[
    
                                //show log juri 1
                                {
                                    model: models.log_poin_juri1,
                                    as: "log_juri1",
                                    attributes:["poin", "masuk", 'createdAt'],
                                },
                            ]
                        },
                    ],
                    order: [
                        ['babak', 'ASC'],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_merah"}, 
                            {model: models.log_poin_juri1,
                            as: "log_juri1"}, 'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_biru"}, 
                            {model: models.log_poin_juri1,
                            as: "log_juri1"}, 'createdAt', 'ASC'
                        ],

                    ],
                })
            }else if (juri === 2){
                const result = await Detail.findOne({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                        babak: req.params.babak
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_merah',
                            attributes: {
                                exclude: ["createdAt","updatedAt"]
                            },
                            include:[
    
                                //show log juri 2
                                {
                                    model: models.log_poin_juri2,
                                    as: "log_juri2",
                                    attributes:["poin", "masuk", "createdAt"],
                                },
                            ]
                        },
    
                        //include poin biru
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_biru',
                            attributes: {
                                exclude: ["createdAt","updatedAt"]
                            },
                            include:[
    
                                 //show log juri 2
                                 {
                                    model: models.log_poin_juri2,
                                    as: "log_juri2",
                                    attributes:["poin", "masuk", "createdAt"],
                                },
    
                            ]
                        },
                    ],
                    order: [
                        ['babak', 'ASC'],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_merah"}, 
                            {model: models.log_poin_juri2,
                            as: "log_juri2"},  'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_biru"}, 
                            {model: models.log_poin_juri2,
                            as: "log_juri2"},  'createdAt', 'DESC'
                        ],
                    ],
                })
                return getResponse( req, res, result )
            }else if (juri === 3){
                const result = await Detail.findOne({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                        babak: req.params.babak
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_merah',
                            attributes: {
                                exclude: ["createdAt","updatedAt"]
                            },
                            include:[
                                //show log juri 3
                                {
                                    model: models.log_poin_juri3,
                                    as: "log_juri3",
                                    attributes:["poin", "masuk", "createdAt"],
                                },
                            ]
                        },
    
                        //include poin biru
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_biru',
                            attributes: {
                                exclude: ["createdAt","updatedAt"]
                            },
                            include:[
                                //show log juri 3
                                {
                                    model: models.log_poin_juri3,
                                    as: "log_juri3",
                                    attributes:["poin", "masuk", "createdAt"],
                                },
                            ]
                        },
                    ],
                    order: [
                        ['babak', 'ASC'],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_merah"}, 
                            {model: models.log_poin_juri3,
                            as: "log_juri3"},  'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_biru"}, 
                            {model: models.log_poin_juri3,
                            as: "log_juri3"},  'createdAt', 'ASC'
                        ],
                    ],
                })
                return getResponse( req, res, result )
            }
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    //get berdasarkan juri, sudut, dan babak 
    getJuribySudutbyBabak: async (req,res) =>{
        try {
            const juri = req.params.no_juri
            const sudut = req.params.sudut

            let result = []
            if (sudut == 'biru') {
                if (juri == 1) {
                    result = await Detail.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [        
                            //include poin biru
                            {
                                model: models.nilai_tanding,
                                as: 'nilai_biru',
                                include:[
        
                                    //show log juri 1
                                    {
                                        model: models.log_poin_juri,
                                        as: "log_juri1",
                                        attributes:["poin", "masuk", "createdAt"],
                                    },
                                ]
                            },
                        ],
                        order: [
                            ['babak', 'ASC'],
                            //order poin biru
                            [
                                {model: models.nilai_tanding, as: "nilai_biru"}, 
                                {model: models.log_poin_juri,
                                as: "log_juri1"}, 'createdAt', 'ASC'
                            ],
    
                        ],
                    })
                }else if (juri == 2){
                    const result = await Detail.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [
                            //include poin biru
                            {
                                model: models.nilai_tanding,
                                as: 'nilai_biru',
                                attributes: {
                                    exclude: ["createdAt","updatedAt"]
                                },
                                include:[
        
                                     //show log juri 2
                                     {
                                        model: models.log_poin_juri,
                                        as: "log_juri2",
                                        attributes:["poin", "masuk", "createdAt"],
                                    },
        
                                ]
                            },
                        ],
                        order: [
                            ['babak', 'ASC'],
        
                            //order poin biru
                            [
                                {model: models.nilai_tanding, as: "nilai_biru"}, 
                                {model: models.log_poin_juri,
                                as: "log_juri2"},  'createdAt', 'ASC'
                            ],
                        ],
                    })
                    return getResponse( req, res, result )
                }else if (juri == 3){
                    const result = await Detail.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [
                            //include poin biru
                            {
                                model: models.nilai_tanding,
                                as: 'nilai_biru',
                                attributes: {
                                    exclude: ["createdAt","updatedAt"]
                                },
                                include:[
                                    //show log juri 3
                                    {
                                        model: models.log_poin_juri,
                                        as: "log_juri3",
                                        attributes:["poin", "masuk", "createdAt"],
                                    },
                                ]
                            },
                        ],
                        order: [
                            ['babak', 'ASC'],
                            //order poin biru
                            [
                                {model: models.nilai_tanding, as: "nilai_biru"}, 
                                {model: models.log_poin_juri,
                                as: "log_juri3"},  'createdAt', 'ASC'
                            ],
                        ],
                    })
                    return getResponse( req, res, result )
                }
            } else if (sudut == 'merah'){
                if (juri == 1) {
                    result = await Detail.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [
                            //include poin merah
                            {
                                model: models.nilai_tanding,
                                as: 'nilai_merah',
                                include:[
        
                                    //show log juri 1
                                    {
                                        model: models.log_poin_juri,
                                        as: "log_juri1",
                                        attributes:["poin", "masuk", "createdAt"],
                                    },
                                ]
                            },
                        ],
                        order: [
                            ['babak', 'ASC'],
        
                            //order poin biru
                            [
                                {model: models.nilai_tanding, as: "nilai_merah"}, 
                                {model: models.log_poin_juri,
                                as: "log_juri1"}, 'createdAt', 'ASC'
                            ],
                        ],
                    })
                }else if (juri == 2){
                    result = await Detail.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [
                            //include poin merah
                            {
                                model: models.nilai_tanding,
                                as: 'nilai_merah',
                                include:[
        
                                    //show log juri 1
                                    {
                                        model: models.log_poin_juri,
                                        as: "log_juri2",
                                        attributes:["poin", "masuk", "createdAt"],
                                    },
                                ]
                            },
                        ],
                        order: [
                            ['babak', 'ASC'],
        
                            //order poin biru
                            [
                                {model: models.nilai_tanding, as: "nilai_merah"}, 
                                {model: models.log_poin_juri,
                                as: "log_juri2"}, 'createdAt', 'ASC'
                            ],
                        ]
                    })
                    return getResponse( req, res, result )
                }else if (juri == 3){
                    const result = await Detail.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [
                            //include poin merah
                            {
                                model: models.nilai_tanding,
                                as: 'nilai_merah',
                                attributes: {
                                    exclude: ["createdAt","updatedAt"]
                                },
                                include:[
                                    //show log juri 3
                                    {
                                        model: models.log_poin_juri,
                                        as: "log_juri3",
                                        attributes:["poin", "masuk", "createdAt"],
                                    },
                                ]
                            },
                        ],
                        order: [
                            ['babak', 'ASC'],
        
                            //order poin merah
                            [
                                {model: models.nilai_tanding, as: "nilai_merah"}, 
                                {model: models.log_poin_juri,
                                as: "log_juri3"},  'createdAt', 'ASC'
                            ],
                        ],
                    })
                    return getResponse( req, res, result )
                }
            }
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    //get nilai masuk berdasarkan sudut
    getNilaiMasukbysudut: async (req,res) =>{
        try {
            const sudut = req.params.sudut

            let result = []
            if (sudut == 'biru') {
                result = await Detail.findOne({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                        babak: req.params.babak
                    },
                    attributes: ["id","babak"],
                    include: [        
                        //include poin biru
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_biru',
                            attributes: ['dis'],
                            include:[
    
                                //show poin masuk
                                {
                                    model: models.log_poin_masuk,
                                    as: "log_poin_masuk",
                                    attributes:["poin", "createdAt"],
                                },
                            ]
                        },
                    ],
                    order: [
                        ['babak', 'ASC'],
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_biru"}, 
                            {model: models.log_poin_masuk,
                            as: "log_poin_masuk"}, 'createdAt', 'ASC'
                        ],

                    ],
                })
            } else if (sudut == 'merah'){
                result = await Detail.findOne({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                        babak: req.params.babak
                    },
                    attributes: ["id","babak"],
                    include: [        
                        //include poin biru
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_merah',
                            attributes: ['dis'],
                            include:[
    
                                //show poin masuk
                                {
                                    model: models.log_poin_masuk,
                                    as: "log_poin_masuk",
                                    attributes:["poin", "createdAt"],
                                },
                            ]
                        },
                    ],
                    order: [
                        ['babak', 'ASC'],
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "poin_masuk"}, 
                            {model: models.log_poin_masuk,
                            as: "log_poin_masuk"}, 'createdAt', 'ASC'
                        ],

                    ],
                })
            }
            
        } catch (error) {
            return errorResponse( req, res, error.message)
        }
    },

    //get detail pertandingan berdasarkan juri
    getDetailbyJuri: async (req,res) => {
        try {
            const juri = req.params.no_juri

            let result = []
            if (juri == 1) {
                result = await Detail.findAll({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_merah',
                            attributes: ['dis'],
                            include:[
    
                                //show log juri 1
                                {
                                    model: models.log_poin_juri1,
                                    as: "log_juri1",
                                    attributes:["poin", "masuk"],
                                },
                            ]
                        },
    
                        //include poin biru
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_biru',
                            attributes: ['dis'],
                            include:[
    
                                //show log juri 1
                                {
                                    model: models.log_poin_juri1,
                                    as: "log_juri1",
                                    attributes:["poin", "masuk"],
                                },
                            ]
                        },
                    ],
                    order: [
                        ['babak', 'ASC'],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_merah"}, 
                            {model: models.log_poin_juri1,
                            as: "log_juri1"}, 'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_biru"}, 
                            {model: models.log_poin_juri1,
                            as: "log_juri1"}, 'createdAt', 'ASC'
                        ],

                    ],
                })
            }else if (juri == 2){
                const result = await Detail.findAll({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_merah',
                            attributes: {
                                exclude: ["createdAt","updatedAt"]
                            },
                            include:[
    
                                //show log juri 2
                                {
                                    model: models.log_poin_juri2,
                                    as: "log_juri2",
                                    attributes:["poin", "masuk", "createdAt"],
                                },
                            ]
                        },
    
                        //include poin biru
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_biru',
                            attributes: {
                                exclude: ["createdAt","updatedAt"]
                            },
                            include:[
    
                                 //show log juri 2
                                 {
                                    model: models.log_poin_juri2,
                                    as: "log_juri2",
                                    attributes:["poin", "masuk", "createdAt"],
                                },
    
                            ]
                        },
                    ],
                    order: [
                        ['babak', 'ASC'],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_merah"}, 
                            {model: models.log_poin_juri2,
                            as: "log_juri2"},  'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_biru"}, 
                            {model: models.log_poin_juri2,
                            as: "log_juri2"},  'createdAt', 'ASC'
                        ],
                    ],
                })
                return getResponse( req, res, result )
            }else if (juri == 3){
                const result = await Detail.findAll({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_merah',
                            attributes: {
                                exclude: ["createdAt","updatedAt"]
                            },
                            include:[
                                //show log juri 3
                                {
                                    model: models.log_poin_juri3,
                                    as: "log_juri3",
                                    attributes:["poin", "masuk", "createdAt"],
                                },
                            ]
                        },
    
                        //include poin biru
                        {
                            model: models.nilai_tanding,
                            as: 'nilai_biru',
                            attributes: {
                                exclude: ["createdAt","updatedAt"]
                            },
                            include:[
                                //show log juri 3
                                {
                                    model: models.log_poin_juri3,
                                    as: "log_juri3",
                                    attributes:["poin", "masuk", "createdAt"],
                                },
                            ]
                        },
                    ],
                    order: [
                        ['babak', 'ASC'],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_merah"}, 
                            {model: models.log_poin_juri3,
                            as: "log_juri3"},  'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.nilai_tanding, as: "nilai_biru"}, 
                            {model: models.log_poin_juri3,
                            as: "log_juri3"},  'createdAt', 'ASC'
                        ],
                    ],
                })
                return getResponse( req, res, result )
            }
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    //get berdasarkan id detail pertandingan
    getbyIdDetail: async (req,res) => {
        try{
            const id = {id: req.params.id}
            const result = await Detail.findAll({
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
                        model: models.nilai_tanding,
                        as: 'nilai_merah',
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
                        model: models.nilai_tanding,
                        as: 'nilai_biru',
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

    //get berdasarkan detail per babak
    getNilaibyBabak: async (req,res) => {
        try {
            const id_jadwal = {id_jadwal: req.body.id_jadwal}
            let getDetail = await Detail.findOne({
                where: id_jadwal
            })

            let result = getDetail.nilai_merah

            
            return getResponse( req, res,getDetail )
        } catch (error) {
            return errorResponse( req, res, result )
        }
    },

    //get log juri 1
    getLogJuri: async (req,res) =>{
        try {
            const getDetail = await Detail.findOne({
                where: {
                    id_jadwal: req.params.id_jadwal,
                    babak: req.params.babak
                },
                attributes: ['id_nilai_biru','id_nilai_merah']
            })
            if(req.params.sudut == 'biru'){
                let result = await LogJuri.findAll({
                    where: {
                        id_nilai_tanding: getDetail.id_nilai_biru,
                        juri: req.params.juri
                    },
                    attributes: ['poin', 'createdAt'],
                    order:[
                        ['createdAt', 'ASC']
                    ]
                })
                return getResponse( req, res, result )
            }else if (req.params.sudut == 'merah'){
                let result = await LogJuri.findAll({
                    where: {
                        id_nilai_tanding: getDetail.id_nilai_merah,
                        juri: req.params.juri
                    },
                    attributes: ['poin', 'createdAt'],
                    order:[
                        ['createdAt', 'ASC']
                    ]
                })
                return getResponse( req, res, result )
            }
        } catch (error) {
            return errorResponse( req, res, error.message )
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

            const getDetail = await Detail.findOne({
                where: {id_jadwal: req.body.id_jadwal, babak:"I"}
            })
            // console.log(getJadwal);

            if (getDetail) {
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
            const nilai_merah = await Nilai.create(merah)
            
            //set poin for red
            let biru = {
                id: uuidv4(),
                id_peserta: getJadwal.id_biru
            }
            const nilai_biru = await Nilai.create(biru)

            //create grades for schedule
            let nilai = {
                id: id,
                id_jadwal: id_jadwal,
                babak: "I",
                id_nilai_merah: nilai_merah.id,
                id_nilai_biru: nilai_biru.id
            }
            const result = await Detail.create(nilai)
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

            
            const getDetail = await Detail.findOne({
                where: {id_jadwal: req.body.id_jadwal, babak:"Ii"}
            })
            // console.log(getJadwal);
            
            if (getDetail) {
                return res.json({
                    message: "babak II sudah ada"
                })
            }
            
            console.log("create babak II");
            const getBabak1 = await Detail.findOne({
                where: {id_jadwal: req.body.id_jadwal, babak:"I"}
            })

            console.log(getBabak1);

            //set poin for red
            let merah = {
                id: uuidv4(),
                id_peserta: getJadwal.id_merah
            }
            const nilai_merah = await Nilai.create(merah)
            
            //set poin for red
            let biru = {
                id: uuidv4(),
                id_peserta: getJadwal.id_biru
            }
            const nilai_biru = await Nilai.create(biru)

            //create grades for schedule
            let nilai = {
                id: id,
                id_jadwal: id_jadwal,
                babak: "II",
                id_nilai_merah: nilai_merah.id,
                id_nilai_biru: nilai_biru.id
            }
            const result = await Detail.create(nilai)
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

            const getDetail = await Detail.findOne({
                where: {id_jadwal: req.body.id_jadwal, babak:"III"}
            })
            // console.log(getJadwal);

            if (getDetail) {
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
            const nilai_merah = await Nilai.create(merah)
            
            //set poin for red
            let biru = {
                id: uuidv4(),
                id_peserta: getJadwal.id_biru
            }
            const nilai_biru = await Nilai.create(biru)

            //create grades for schedule
            let nilai = {
                id: id,
                id_jadwal: id_jadwal,
                babak: "III",
                id_nilai_merah: nilai_merah.id,
                id_nilai_biru: nilai_biru.id
            }
            const result = await Detail.create(nilai)
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },
}