const models = require("../../models/index")
const User = models.user
const { getResponse, addResponse, editResponse, errorResponse, deleteResponse } = require("../../helpers")
const {v4 : uuidv4} = require('uuid')
const md5 = require("md5")
const jwt = require("jsonwebtoken")
const { Op } = require("sequelize");
require('dotenv').config()

module.exports = {
    //controller get all users
    allUser: async (req,res)=> {
        try{
            const result = await User.findAll({
                where: {
                    role_id: {[Op.notIn]:["superadmin"]},
                },
                attributes: ['id', 'username', 'role_id'],
                include: [
                    {
                        model: models.event,
                        as: "event",
                        attributes: ['id','nama']
                    }
                ],
                order: [
                    ["role_id", "ASC"]
                ]
            })
            return getResponse(req,res, result)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    //controller get all users kecuali superadmin
    allUserAdmin: async (req,res)=> {
        try{
            const result = await User.findAll({
                where: {
                    role_id: {[Op.notIn]:["superadmin","admin"]},
                    event_id: req.user.event_id
                },
                attributes: ['id', 'username', 'role_id']
            })
            return getResponse(req,res, result)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    getUserbyId: async (req,res) => {
        try{
            const result = await User.findOne({
                where: {
                    id: req.params.id
                },
                attributes: ['id', 'username', 'role_id'],
                include: [
                    {
                        model: models.event,
                        as: "event",
                        attributes: ['id','nama']
                    }
                ]
            })
            return getResponse(req,res, result)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    addUser: async (req,res)=> {
        try{
            let data = {
                username: req.body.username,
                password: md5(req.body.password),
                role_id: req.body.role_id, 
                event_id: req.body.event_id
            }
            const result = await User.create(data)
            return addResponse(req, res, result)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    addUserAdmin: async (req,res)=> {
        try{
            let data = {
                username: req.body.username,
                password: md5(req.body.password),
                event_id: req.user.event_id,
                role_id: req.body.role
            }
            const result = await User.create(data)
            return addResponse(req, res, result)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    editUser: async (req,res)=> {
        try{
            let data = {
                username: req.body.username,
                password: md5(req.body.password),
                role_id: req.body.role_id, 
                event_id: req.body.event_id
            }
            const admin = await User.update(data,{where:{id: req.params.id}})
            return editResponse(req, res, admin)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    deleteUser: async (req,res)=> {
        try{
            const admin = await User.destroy({where:{id: req.params.id}})
            return deleteResponse(req, res, admin)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    login: async (req,res)=> {
        try{
            const admin = await User.findOne({
                where:{
                    username: req.body.username,
                    password : md5(req.body.password)
                },
                attributes: ['id', 'username', 'role_id', 'event_id']
            })
            if(admin){
                if (admin.role_id === "admin"){
                    // generate token
                    let token = jwt.sign( {id: admin.id, username: admin.username, role: admin.role_id, event_id: admin.event_id}, process.env.REFRESH_TOKEN_SECRET);
                    
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
                }else if(admin.role_id === "superadmin") {
                    // generate token
                    let token = jwt.sign( {id: admin.id, username: admin.username, role: admin.role_id}, process.env.REFRESH_TOKEN_SECRET);
                    
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
                } else {
                    console.log(admin.username + " bukan akun admin")
                    return res.status(403).json({
                        status: "false",
                        message: "Anda bukan Admin"
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

    dewanLogin: async (req,res)=> {
        try{
            const dewan = await User.findOne({
                where:{
                    username: req.body.username,
                    password : md5(req.body.password)
                },
                attributes: ['id', 'username', 'role_id', 'event_id']
            })
            if(dewan){
                if (dewan.role_id === "dewan" || "superadmin") {
                    // generate token
                    let token = jwt.sign( {id: dewan.id, username: dewan.username, role: dewan.role, event_id: dewan.event_id}, process.env.REFRESH_TOKEN_SECRET);
                    
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
            const timer = await User.findOne({
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