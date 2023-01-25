const models = require("../../models/index")
const Admin = models.user
const { getResponse, addResponse, errorResponse } = require("../../helpers")
const {v4 : uuidv4} = require('uuid')
const md5 = require("md5")
const jwt = require("jsonwebtoken")

module.exports = {
    //controller get all admin
    allAdmin: async (req,res)=> {
        try{
            const admin = await Admin.findAll({
                attributes: ['id', 'username']
            })
            return getResponse(req,res, admin)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    addAdmin: async (req,res)=> {
        try{
            const id = uuidv4();
            let data = {
                id: id,
                username: req.body.username,
                password: md5(req.body.password),
                role: req.body.role 
            }
            const admin = await Admin.create(data)
            return addResponse(req, res, admin)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    login: async (req,res)=> {
        try{
            const admin = await Admin.findOne({
                where:{
                    username: req.body.username,
                    password : md5(req.body.password)
                },
                attributes: ['id', 'username', 'role']
            })
            if(admin){
                // generate token
                let token = jwt.sign( {sub: admin.id, username: admin.username, role: admin.role}, process.env.REFRESH_TOKEN_SECRET, {
                    expiresIn: '1d'
                });
                
                res.cookie('refreshToken', token, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000,
                    sameSite: "lax"
                });
                
                res.json({
                    logged: true,
                    data: admin,
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
    }
}