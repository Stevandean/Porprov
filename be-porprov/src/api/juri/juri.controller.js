const models = require("../../models/index")
const Juri = models.juri
const { getResponse, addResponse, errorResponse } = require("../../helpers")
const {v4 : uuidv4} = require('uuid')
const md5 = require("md5")
const jwt = require("jsonwebtoken")
const { where } = require("sequelize")

module.exports = {
    //controller get all admin
    allJuri: async (req,res)=> {
        try{
            const juri = await Juri.findAll({
                order: [
                    ['nO', 'ASC'],
                ],
            })
            return getResponse(req,res, juri)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    addJuri: async (req,res)=> {
        try{
            const id = uuidv4();
            let data = {
                id: id,
                no: req.body.no,
                username: req.body.username,
                password: md5(req.body.password) 
            }
            const juri = await Juri.create(data)
            return addResponse(req, res, juri)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    editJuri: async (req,res)=> {
        try{
            let data = {
                username: req.body.username,
                password: md5(req.body.password) 
            }
            const juri = await Juri.update(data, {where:{id: req.params.id}})
            return addResponse(req, res, juri)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    login: async (req,res)=> {
        try{
            const juri = await Juri.findOne({
                where:{
                    username: req.body.username,
                    password : md5(req.body.password)
                },
                attributes: ['id', 'username', 'no']
            })
            if(juri){
                // generate token
                let token = jwt.sign( {sub: juri.id, nama: juri.username}, process.env.REFRESH_TOKEN_SECRET, {
                    expiresIn: '1d'
                });
                
                res.cookie('refreshToken', token, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000,
                    sameSite: "lax"
                });
                
                res.json({
                    logged: true,
                    data: juri,
                    token: token
                })
            }else{
                res.json({
                    logged: false,
                    message: "Username or password is incorrect",
                    data: []
                })
            }   
        } catch (error) {
            return errorResponse(req, res, error.message)
        }
    },

    loginTanding: async (req,res) => {
        try {
            const juri = await Juri.findOne({
                where:{
                    username: req.body.username,
                    password : md5(req.body.password)
                },
                attributes: ['id', 'username', 'no']
            })
            if(juri){
                if (juri.username === "juri1" || juri.username === "juri2" || juri.username === "juri3") {
                    // generate token
                    let token = jwt.sign( {sub: juri.id, nama: juri.username}, process.env.REFRESH_TOKEN_SECRET, {
                        expiresIn: '1d'
                    });
                    
                    res.cookie('refreshToken', token, {
                        httpOnly: true,
                        maxAge: 24 * 60 * 60 * 1000,
                        sameSite: "lax"
                    });
                    
                    res.json({
                        logged: true,
                        data: juri,
                        token: token
                    })
                }else{
                    res.json({
                        logged: false,
                        message: "Username or password is incorrect",
                        data: []
                    })
                }   
            }else{
                res.json({
                    logged: false,
                    message: "Username or password is incorrect",
                    data: []
                })
            }   
        } catch (error) {
            return errorResponse( req, res, error.message )
        }
    }
}