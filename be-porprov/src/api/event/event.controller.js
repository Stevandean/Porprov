const models = require("../../models/index")
const Event = models.event
const { getResponse, addResponse, editResponse, deleteResponse, errorResponse } = require("../../helpers")
const {v4 : uuidv4} = require('uuid')
const path = require('path');
const fs = require('fs')
const md5 = require('md5')
const jwt = require("jsonwebtoken")


module.exports = {
    //controller get event
    getEvent: async (req,res)=> {
        try{
            const event = await Event.findAll()
            return getResponse(req,res, event)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    getPubEvent: async (req,res)=> {
        try{
            const event = await Event.findAll({
                where: {aktif: 0},
                attributes:['nama', 'logo']
            })
            return getResponse(req,res, event)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    //controller get event by id
    getEventbyId: async (req,res)=> {
        try{
            const event = await Event.findOne({
                where: {
                    id: req.params.id
                }
            })
            return getResponse(req,res, event)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    //controller add event
    addEvent: async (req,res)=> {
        try{
            if (!req.files) {
                res.json({
                    message: "no uploaded file",
                });
            }
            //setting uuid
            const id = uuidv4()

            //get image filename
            let logo = req.files.logo[0]
            //set data
            let data = {
                nama: req.body.nama,
                password: md5(req.body.password),
                logo: logo.filename,
            }

            if(req.files.icon1){
                let icon1 = req.files.icon1[0]
                data.icon1 = icon1.filename
            }else{
                data.icon1 = null
            }
            if(req.files.icon2){
                data.icon2 = req.files.icon1[0]
            }else{
                data.icon2 = null
            }

            const event = await Event.create(data)
            return addResponse(req,res, event)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },
    
    //controller edit event
    editEvent: async (req,res)=> {
        try{
            let param = {
                id: req.params.id
            }
            let event = await Event.findOne({where: param})
            
            //set data to change
            let data = {
                nama: req.body.nama
            }

            if(req.body.password){
                data.password = md5(req.body.password)
            }
            //get image filename
            if(req.files?.logo){
                let oldFileName = event.logo;
                if (fs.existsSync(`./src/image/event/${oldFileName}`)) {
                    // console.log('file exists');
                    if(oldFileName !== "empty.jpg"){
                        //delete old file
                        let dir = path.join(__dirname, "../../image/event", oldFileName);
                        fs.unlink(dir, (err) => console.log(err));
                        console.log("hapus file");
        
                        //set filename
                        data.logo = req.files.logo[0].filename
                        console.log(req.files.logo);
                    }
                } else {
                console.log('file not found!');
                data.logo = req.files.logo[0].filename
                }
            }
            if(req.files?.icon1){
                let oldFileName = event.icon1;
                if (fs.existsSync(`./src/image/event/${oldFileName}`)) {
                    if(oldFileName !== "empty.jpg"){
                        //delete old file
                        let dir = path.join(__dirname, "../../image/event", oldFileName);
                        fs.unlink(dir, (err) => console.log(err));
                        console.log("hapus file");
    
                        //set filename
                        let icon1 = req.files.icon1[0]
                        data.icon1 = icon1.filename
                    }
                } else {
                    console.log('file not found!');
                    let icon1 = req.files.icon1[0]
                    data.icon1 = icon1.filename
                }
            }
            if(req.files?.icon2){
                let oldFileName = event.icon2;
                if (fs.existsSync(`./src/image/event/${oldFileName}`)) {
                    if(oldFileName !== "empty.jpg"){
                        //delete old file
                        let dir = path.join(__dirname, "../../image/event", oldFileName);
                        fs.unlink(dir, (err) => console.log(err));
                        console.log("hapus file");

                        //set filename
                        let icon2 = req.files.icon2[0]
                        data.icon2 = icon2.filename
                    }
                } else {
                    console.log('file not found!');
                    let icon2 = req.files.icon2[0]
                    data.icon2 = icon2.filename
                }
            }

            const result = await Event.update(data, {where: param})
            return editResponse(req,res, result)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    deleteEvent:async (req,res) =>{
        try {
            let param = {
                id: req.params.id
            }
            let event = await Event.findOne({where: param})
    
            let logo = event.logo
            //hapus file logo
            if (fs.existsSync(`./src/image/event/${logo}`)) {
                // console.log('file exists');
                if(logo !== "empty.jpg"){
                    //delete old file
                    let dir = path.join(__dirname, "../../image/event", logo);
                    fs.unlink(dir, (err) => console.log(err));
                    console.log("hapus file");
                }
            } else {
                console.log('file not found!');
            }
            
            let icon1 = event.icon1
            //hapus file icon 1
            if (fs.existsSync(`./src/image/event/${icon1}`)) {
                // console.log('file exists');
                if(icon1 !== "empty.jpg"){
                    //delete old file
                    let dir = path.join(__dirname, "../../image/event", icon1);
                    fs.unlink(dir, (err) => console.log(err));
                    console.log("hapus file");
    
                }
            } else {
                console.log('file not found!');
            }
    
            //hapus file icon 2
            let icon2 = event.icon2
            if (fs.existsSync(`./src/image/event/${icon2}`)) {
                // console.log('file exists');
                if(icon2 !== "empty.jpg"){
                    //delete old file
                    let dir = path.join(__dirname, "../../image/event", icon2);
                    fs.unlink(dir, (err) => console.log(err));
                    console.log("hapus file");
    
                }
            } else {
                console.log('file not found!');
            }
            let result = await Event.destroy({where: param})
            return deleteResponse(req, res, result)
        } catch (error) {
            return errorResponse(req, res, error.message);
        }
    },

    loginEvent: async (req,res) =>{
        try{
            const event = await Event.findOne({
                where:{
                    nama: req.body.nama,
                    password : md5(req.body.password)
                },
                attributes: ['id', 'nama']
            })
            if(event){
                // generate token
                let token = jwt.sign( {id: event.id, event: event.nama}, process.env.REFRESH_TOKEN_SECRET);
                res.json({
                    logged: true,
                    data: event,
                    token: token
                })
            }else{
                res.json({
                    logged: false,
                    message: "password salah",
                    data: []
                })
            }   
        } catch (error) {
            return errorResponse(req, res, error.message)
        }
    },

    getImage: async (req,res) =>{
        try{
            const { filename } = req.params
            fs.readFile(`./src/image/event/${filename}`, (err, data) => {
                res.writeHead(200, {
                    'Content-Type' : 'image/png'
                })
                res.end(data)
            })
        } catch (error) {
            res.json({
                message: error.message
            })
        }
    }
}