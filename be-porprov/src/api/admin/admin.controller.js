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

    editUser: async (req,res)=> {
        try{
            let data = {
                username: req.body.username,
                password: md5(req.body.password),
            }
            const admin = await Admin.update(data,{where:{id: req.params.id}})
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
                // if (admin.role === "admin" || "superadmin") {
                    // generate token
                    let token = jwt.sign( {sub: admin.id, username: admin.username, role: admin.role}, process.env.REFRESH_TOKEN_SECRET);
                    
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
                // } else {
                //     console.log(admin.username + " bukan akun admin")
                //     return res.status(403).json({
                //         status: "false",
                //         message: "Anda bukan Admin"
                //     })
                // }
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

    dewanLogin: async (req,res)=> {
        try{
            const dewan = await Admin.findOne({
                where:{
                    username: req.body.username,
                    password : md5(req.body.password)
                },
                attributes: ['id', 'username', 'role']
            })
            if(dewan){
                if (dewan.role === "dewan" || "superadmin") {
                    // generate token
                    let token = jwt.sign( {sub: dewan.id, username: dewan.username, role: dewan.role}, process.env.REFRESH_TOKEN_SECRET);
                    
                    res.cookie('refreshToken', token, {
                        httpOnly: true,
                        maxAge: 24 * 60 * 60 * 1000,
                        sameSite: "lax"
                    });
                    
                    res.json({
                        logged: true,
                        data: dewan,
                        token: token
                    })         
                } else {
                    console.log(dewan.username + " bukan akun dewan")
                    return res.status(403).json({
                        status: "false",
                        message: "Anda bukan dewan"
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
            return errorResponse(req, res, error.message)
        }
    },

    timerLogin: async (req,res)=> {
        try{
            const timer = await Admin.findOne({
                where:{
                    username: req.body.username,
                    password : md5(req.body.password)
                },
                attributes: ['id', 'username', 'role']
            })
            if(timer){
                if (timer.role === "timer" || "superadmin") {
                    // generate token
                    let token = jwt.sign( {sub: timer.id, username: timer.username, role: timer.role}, process.env.REFRESH_TOKEN_SECRET);
                    
                    res.cookie('refreshToken', token, {
                        httpOnly: true,
                        maxAge: 24 * 60 * 60 * 1000,
                        sameSite: "lax"
                    });
                    
                    res.json({
                        logged: true,
                        data: timer,
                        token: token
                    })         
                } else {
                    console.log(timer.username + " bukan akun timer")
                    return res.status(403).json({
                        status: "false",
                        message: "Mohon login dengan akun timer"
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
            return errorResponse(req, res, error.message)
        }
    }
}