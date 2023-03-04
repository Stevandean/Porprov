const models = require('../../models/index')
const Tanding = models.jadwal_tanding
const Nilai = models.nilai_tanding
const Poin = models.poin
const Juri = models.juri
const Logs1 = models.log_poin_juri1
const Logs2 = models.log_poin_juri2
const Logs3 = models.log_poin_juri3
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

    getNilaiLayar: async (req,res) =>{
        try{
            const id_jadwal = {id_jadwal: req.params.id_jadwal}
            const result = await Nilai.findAll({
                where: id_jadwal,
                attributes: ["id","babak"],
                include:[
                    //include poin merah
                    {
                        model: models.poin,
                        as: 'poin_merah',
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

                            //show log peringatan
                            {
                                model: models.log_peringatan,
                                as: "log_peringatan",
                                attributes:["poin", "createdAt"],
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

                            //show log peringatan
                            {
                                model: models.log_peringatan,
                                as: "log_peringatan",
                                attributes:["poin", "createdAt"],
                            },
                        ]
                    },
                ],
                order: [
                    ['babak', 'ASC'],

                    //order poin biru
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_binaan,
                        as: "log_binaan"},  'createdAt', 'ASC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_teguran,as: "log_teguran"},
                        'poin', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_peringatan, as: "log_peringatan"},
                        'poin', 'DESC'
                    ],

                    //order poin biru
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_binaan,
                        as: "log_binaan"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_teguran,
                        as: "log_teguran"},  'poin', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_peringatan,
                        as: "log_peringatan"},  'poin', 'DESC'
                    ],
                    
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
                attributes: ["babak"],
                include:[
                    //include poin merah
                    {
                        model: models.poin,
                        as: 'poin_merah',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        include:[
                            //show log poin masuk
                            {
                                model: models.log_poin_masuk,
                                as: "log_poin_masuk",
                                attributes:["poin"],
                            },

                            //show log jatuhan
                            {
                                model: models.log_jatuhan,
                                as: "log_jatuhan",
                                attributes:["poin"],
                            },

                            //show log binaan
                            {
                                model: models.log_binaan,
                                as: "log_binaan",
                                attributes:["poin"],
                            },

                            //show log teguran
                            {
                                model: models.log_teguran,
                                as: "log_teguran",
                                attributes:["poin"],
                            },
                        ]
                    },

                    //include poin biru
                    {
                        model: models.poin,
                        as: 'poin_biru',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        include:[
                            //show log poin masuk
                            {
                                model: models.log_poin_masuk,
                                as: "log_poin_masuk",
                                attributes:["poin"],
                            },

                            //show log jatuhan
                            {
                                model: models.log_jatuhan,
                                as: "log_jatuhan",
                                attributes:["poin"],
                            },

                            //show log binaan
                            {
                                model: models.log_binaan,
                                as: "log_binaan",
                                attributes:["poin"],
                            },

                            //show log teguran
                            {
                                model: models.log_teguran,
                                as: "log_teguran",
                                attributes:["poin"],
                            },
                        ]
                    },
                ],
                order: [
                    ['babak', 'ASC'],

                //     // order poin merah
                //     [
                        // {model: models.poin, as: "poin_merah"}, 
                        // {model: models.log_poin_juri1,
                        // as: "log_juri1"},  'createdAt', 'ASC'
                //     ],
                //     [
                //         {model: models.poin, as: "poin_merah"}, 
                //         {model: models.log_poin_juri2,
                //         as: "log_juri2"},  'createdAt', 'ASC'
                //     ],
                //     [
                //         {model: models.poin, as: "poin_merah"}, 
                //         {model: models.log_poin_juri3,
                //         as: "log_juri3"},  'createdAt', 'ASC'
                //     ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_poin_masuk,
                        as: "log_poin_masuk"},  'createdAt', 'ASC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_jatuhan,
                        as: "log_jatuhan"},  'createdAt', 'ASC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_binaan,
                        as: "log_binaan"},  'createdAt', 'ASC'
                    ],
                    [
                        {model: models.poin, as: "poin_merah"}, 
                        {model: models.log_teguran,as: "log_teguran"},
                        'poin', 'DESC'
                    ],

                //     //order poin biru
                //     [
                //         {model: models.poin, as: "poin_biru"}, 
                //         {model: models.log_poin_juri1,
                //         as: "log_juri1"},  'createdAt', 'ASC'
                //     ],
                //     [
                //         {model: models.poin, as: "poin_biru"}, 
                //         {model: models.log_poin_juri2,
                //         as: "log_juri2"},  'createdAt', 'ASC'
                //     ],
                //     [
                //         {model: models.poin, as: "poin_biru"}, 
                //         {model: models.log_poin_juri3,
                //         as: "log_juri3"},  'createdAt', 'ASC'
                //     ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_poin_masuk,
                        as: "log_poin_masuk"},  'createdAt', 'ASC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_jatuhan,
                        as: "log_jatuhan"},  'createdAt', 'ASC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
                        {model: models.log_binaan,
                        as: "log_binaan"},  'createdAt', 'DESC'
                    ],
                    [
                        {model: models.poin, as: "poin_biru"}, 
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

    getBabakbyJadwal: async (req,res) => {
        try {
            const result = await Nilai.findAll({
                where: {id_jadwal: req.params.id_jadwal},
                attributes: ['babak'],
                order:[['babak', 'ASC']]
            })
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )   
        }
    },

    getJuribyBabak: async (req,res) =>{
        try {
            const juri = req.params.no_juri

            let result = []
            if (juri == 1) {
                result = await Nilai.findAll({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                        babak: req.params.babak
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.poin,
                            as: 'poin_merah',
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
    
                        //include poin biru
                        {
                            model: models.poin,
                            as: 'poin_biru',
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
                            {model: models.poin, as: "poin_merah"}, 
                            {model: models.log_poin_juri1,
                            as: "log_juri1"}, 'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.poin, as: "poin_biru"}, 
                            {model: models.log_poin_juri1,
                            as: "log_juri1"}, 'createdAt', 'ASC'
                        ],

                    ],
                })
            }else if (juri === 2){
                const result = await Nilai.findOne({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                        babak: req.params.babak
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.poin,
                            as: 'poin_merah',
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
                            model: models.poin,
                            as: 'poin_biru',
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
                            {model: models.poin, as: "poin_merah"}, 
                            {model: models.log_poin_juri2,
                            as: "log_juri2"},  'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.poin, as: "poin_biru"}, 
                            {model: models.log_poin_juri2,
                            as: "log_juri2"},  'createdAt', 'DESC'
                        ],
                    ],
                })
                return getResponse( req, res, result )
            }else if (juri === 3){
                const result = await Nilai.findOne({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                        babak: req.params.babak
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.poin,
                            as: 'poin_merah',
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
                            model: models.poin,
                            as: 'poin_biru',
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
                            {model: models.poin, as: "poin_merah"}, 
                            {model: models.log_poin_juri3,
                            as: "log_juri3"},  'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.poin, as: "poin_biru"}, 
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

    getJuribySudutbyBabak: async (req,res) =>{
        try {
            const juri = req.params.no_juri
            const sudut = req.params.sudut

            let result = []
            if (sudut == 'biru') {
                if (juri == 1) {
                    result = await Nilai.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [        
                            //include poin biru
                            {
                                model: models.poin,
                                as: 'poin_biru',
                                attributes: ['dis'],
                                include:[
        
                                    //show log juri 1
                                    {
                                        model: models.log_poin_juri1,
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
                                {model: models.poin, as: "poin_biru"}, 
                                {model: models.log_poin_juri1,
                                as: "log_juri1"}, 'createdAt', 'ASC'
                            ],
    
                        ],
                    })
                }else if (juri == 2){
                    const result = await Nilai.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [
                            //include poin biru
                            {
                                model: models.poin,
                                as: 'poin_biru',
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
                                {model: models.poin, as: "poin_biru"}, 
                                {model: models.log_poin_juri2,
                                as: "log_juri2"},  'createdAt', 'ASC'
                            ],
                        ],
                    })
                    return getResponse( req, res, result )
                }else if (juri == 3){
                    const result = await Nilai.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [
                            //include poin biru
                            {
                                model: models.poin,
                                as: 'poin_biru',
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
                                {model: models.poin, as: "poin_biru"}, 
                                {model: models.log_poin_juri3,
                                as: "log_juri3"},  'createdAt', 'ASC'
                            ],
                        ],
                    })
                    return getResponse( req, res, result )
                }
            } else if (sudut == 'merah'){
                if (juri == 1) {
                    result = await Nilai.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [
                            //include poin merah
                            {
                                model: models.poin,
                                as: 'poin_merah',
                                attributes: ['dis'],
                                include:[
        
                                    //show log juri 1
                                    {
                                        model: models.log_poin_juri1,
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
                                {model: models.poin, as: "poin_merah"}, 
                                {model: models.log_poin_juri1,
                                as: "log_juri1"}, 'createdAt', 'ASC'
                            ],
                        ],
                    })
                }else if (juri == 2){
                    result = await Nilai.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [
                            //include poin merah
                            {
                                model: models.poin,
                                as: 'poin_merah',
                                attributes: ['dis'],
                                include:[
        
                                    //show log juri 1
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
                                {model: models.poin, as: "poin_merah"}, 
                                {model: models.log_poin_juri2,
                                as: "log_juri2"}, 'createdAt', 'ASC'
                            ],
                        ]
                    })
                    return getResponse( req, res, result )
                }else if (juri == 3){
                    const result = await Nilai.findOne({
                        where: {
                            id_jadwal: req.params.id_jadwal,
                            babak: req.params.babak
                        },
                        attributes: ["id","babak"],
                        include: [
                            //include poin merah
                            {
                                model: models.poin,
                                as: 'poin_merah',
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
        
                            //order poin merah
                            [
                                {model: models.poin, as: "poin_merah"}, 
                                {model: models.log_poin_juri3,
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

    getPoinMasukbysudut: async (req,res) =>{
        try {
            const sudut = req.params.sudut

            let result = []
            if (sudut == 'biru') {
                result = await Nilai.findOne({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                        babak: req.params.babak
                    },
                    attributes: ["id","babak"],
                    include: [        
                        //include poin biru
                        {
                            model: models.poin,
                            as: 'poin_biru',
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
                            {model: models.poin, as: "poin_biru"}, 
                            {model: models.log_poin_masuk,
                            as: "log_poin_masuk"}, 'createdAt', 'ASC'
                        ],

                    ],
                })
            } else if (sudut == 'merah'){
                result = await Nilai.findOne({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                        babak: req.params.babak
                    },
                    attributes: ["id","babak"],
                    include: [        
                        //include poin biru
                        {
                            model: models.poin,
                            as: 'poin_merah',
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
                            {model: models.poin, as: "poin_masuk"}, 
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

    getNilaibyJuri: async (req,res) => {
        try {
            const juri = req.params.no_juri

            let result = []
            if (juri == 1) {
                result = await Nilai.findAll({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.poin,
                            as: 'poin_merah',
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
                            model: models.poin,
                            as: 'poin_biru',
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
                            {model: models.poin, as: "poin_merah"}, 
                            {model: models.log_poin_juri1,
                            as: "log_juri1"}, 'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.poin, as: "poin_biru"}, 
                            {model: models.log_poin_juri1,
                            as: "log_juri1"}, 'createdAt', 'ASC'
                        ],

                    ],
                })
            }else if (juri == 2){
                const result = await Nilai.findAll({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.poin,
                            as: 'poin_merah',
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
                            model: models.poin,
                            as: 'poin_biru',
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
                            {model: models.poin, as: "poin_merah"}, 
                            {model: models.log_poin_juri2,
                            as: "log_juri2"},  'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.poin, as: "poin_biru"}, 
                            {model: models.log_poin_juri2,
                            as: "log_juri2"},  'createdAt', 'ASC'
                        ],
                    ],
                })
                return getResponse( req, res, result )
            }else if (juri == 3){
                const result = await Nilai.findAll({
                    where: {
                        id_jadwal: req.params.id_jadwal,
                    },
                    attributes: ["id","babak"],
                    include: [
                        //include poin merah
                        {
                            model: models.poin,
                            as: 'poin_merah',
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
                            model: models.poin,
                            as: 'poin_biru',
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
                            {model: models.poin, as: "poin_merah"}, 
                            {model: models.log_poin_juri3,
                            as: "log_juri3"},  'createdAt', 'ASC'
                        ],
    
                        //order poin biru
                        [
                            {model: models.poin, as: "poin_biru"}, 
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

    getLogs1: async (req,res) =>{
        try {
            const result = await Logs1.findAll({
                attributes:['poin', 'createdAt'],
                // order:['createdAt','DESC']
            })
            return getResponse(req,res, result)
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getLogJuri1: async (req,res) =>{
        try {
            const getNilai = await Nilai.findOne({
                where: {
                    id_jadwal: req.params.id_jadwal,
                    babak: req.params.babak
                }
            })
            if(req.params.sudut == 'biru'){
                let result = await Logs1.findAll({
                    where: {id_poin: getNilai.id_poin_biru},
                    attributes: ['poin', 'createdAt'],
                    order:[[
                        'createdAt', 'ASC'
                    ]]
                })
                return getResponse( req, res, result )
            }else if (req.params.sudut == 'merah'){
                let result = await Logs1.findAll({
                    where: {id_poin: getNilai.id_poin_merah},
                    attributes: ['poin', 'createdAt'],
                    order:[[
                        'createdAt', 'ASC'
                    ]]
                })
                return getResponse( req, res, result )
            }
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getLogJuri2: async (req,res) =>{
        try {
            const getNilai = await Nilai.findOne({
                where: {
                    id_jadwal: req.params.id_jadwal,
                    babak: req.params.babak
                }
            })
            if(req.params.sudut == 'biru'){
                let result = await Logs2.findAll({
                    where: {id_poin: getNilai.id_poin_biru},
                    attributes: ['poin', 'createdAt'],
                    order:[[
                        'createdAt', 'ASC'
                    ]]
                })
                return getResponse( req, res, result )
            }else if (req.params.sudut == 'merah'){
                let result = await Logs2.findAll({
                    where: {id_poin: getNilai.id_poin_merah},
                    attributes: ['poin', 'createdAt'],
                    order:[[
                        'createdAt', 'ASC'
                    ]]
                })
                return getResponse( req, res, result )
            }
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getLogJuri3: async (req,res) =>{
        try {
            const getNilai = await Nilai.findOne({
                where: {
                    id_jadwal: req.params.id_jadwal,
                    babak: req.params.babak
                }
            })
            if(req.params.sudut == 'biru'){
                let result = await Logs3.findAll({
                    where: {id_poin: getNilai.id_poin_biru},
                    attributes: ['poin', 'createdAt'],
                    order:[[
                        'createdAt', 'ASC'
                    ]]
                })
                return getResponse( req, res, result )
            }else if (req.params.sudut == 'merah'){
                let result = await Logs3.findAll({
                    where: {id_poin: getNilai.id_poin_merah},
                    attributes: ['poin', 'createdAt'],
                    order:[[
                        'createdAt', 'ASC'
                    ]]
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
            const getBabak1 = await Nilai.findOne({
                where: {id_jadwal: req.body.id_jadwal, babak:"I"}
            })

            console.log(getBabak1);

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