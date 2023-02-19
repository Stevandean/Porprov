const models = require("../../models/index")
const Verif = models.verifikasi_juri
const Juri = models.juri

const {v4: uuidv4} = require("uuid")
const {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
} = require("../../helpers");
const { where } = require("sequelize");

module.exports = {
    getVerif: async (req,res) => {
        try {
            let param = {
                id_jadwal: req.params.id_jadwal,
            }

            const result = await Verif.findOne({
                where: param,
                order:[
                    ['createdAt', 'DESC']
                ]
            })
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getVerifJatuhan: async (req,res) => {
        try {
            let param = {
                id_jadwal: req.params.id_jadwal,
                poin: 'Jatuhan'
            }

            const result = await Verif.findOne({
                where: param,
                order:[
                    ['createdAt', 'DESC']
                ]
            })
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    getVerifHukuman: async (req,res) => {
        try {
            let param = {
                id_jadwal: req.params.id_jadwal,
                poin: "Hukuman"
            }

            const result = await Verif.findOne({
                where: param,
                order:[
                    ['createdAt', 'DESC']
                ]
            })
            return getResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    addVerifJatuhan: async (req,res) => {
        try {
            let data = {
                id: uuidv4(),
                id_jadwal: req.body.id_jadwal,
                show: 1,
                poin: 'Jatuhan',
            }
            const result = await Verif.create(data)
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    addVerifHukuman: async (req,res) => {
        try {
            let data = {
                id: uuidv4(),
                id_jadwal: req.body.id_jadwal,
                show: 1,
                poin: 'Hukuman',
            }
            const result = await Verif.create(data)
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    verifJuriBiru: async (req,res) => {
        try {
            const getJuri = await Juri.findOne({
                where: {id: req.body.id_juri}
            })

            const juri = getJuri.no

            const getVerif = await Verif.findOne({
                where: {id_jadwal: req.body.id_jadwal},
                order:[
                    ['createdAt', 'DESC']
                ]
            })

            let result = []
            if(juri === 1){
                let data = {
                    juri1: 'biru'
                }
                result = await getVerif.update(data,{where:{id: getVerif.id}})
            } else if(juri === 2){
                let data = {
                    juri2: 'biru'
                }
                result = await getVerif.update(data,{where:{id: getVerif.id}})
            } else if(juri === 3){
                let data = {
                    juri3: 'biru'
                }
                result = await getVerif.update(data,{where:{id: getVerif.id}})
            }
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    verifJuriMerah: async (req,res) => {
        try {
            const getJuri = await Juri.findOne({
                where: {id: req.body.id_juri}
            })

            const juri = getJuri.no

            const getVerif = await Verif.findOne({
                where: {id_jadwal: req.body.id_jadwal},
                order:[
                    ['createdAt', 'DESC']
                ]
            })

            let result = []
            if(juri === 1){
                let data = {
                    juri1: 'merah'
                }
                result = await getVerif.update(data,{where:{id: getVerif.id}})
            } else if(juri === 2){
                let data = {
                    juri2: 'merah'
                }
                result = await getVerif.update(data,{where:{id: getVerif.id}})
            } else if(juri === 3){
                let data = {
                    juri3: 'merah'
                }
                result = await getVerif.update(data,{where:{id: getVerif.id}})
            }
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    },

    verifJuriTidakSah: async (req,res) => {
        try {
            const getJuri = await Juri.findOne({
                where: {id: req.body.id_juri}
            })

            const juri = getJuri.no

            const getVerif = await Verif.findOne({
                where: {id_jadwal: req.body.id_jadwal},
                order:[
                    ['createdAt', 'DESC']
                ]
            })

            let result = []
            if(juri === 1){
                let data = {
                    juri1: 'tidak_sah'
                }
                result = await getVerif.update(data,{where:{id: getVerif.id}})
            } else if(juri === 2){
                let data = {
                    juri2: 'tidak_sah'
                }
                result = await getVerif.update(data,{where:{id: getVerif.id}})
            } else if(juri === 3){
                let data = {
                    juri3: 'tidak_sah'
                }
                result = await getVerif.update(data,{where:{id: getVerif.id}})
            }
            return addResponse( req, res, result )
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    }
}