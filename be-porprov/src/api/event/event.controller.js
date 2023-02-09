const models = require("../../models/index")
const Event = models.event
const { getResponse, addResponse, editResponse, deleteResponse, errorResponse } = require("../../helpers")
const {v4 : uuidv4} = require('uuid')
const path = require('path');
const fs = require('fs')

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
            let icon1 = req.files.icon1[0]
            let icon2 = req.files.icon2[0]

            //set data
            let data = {
                id: id,
                nama: req.body.event,
                logo: logo.filename,
                icon1: icon1.filename,
                icon2: icon2.filename,
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

            //get image filename
            let logo = ""
            let icon1 = ""
            let icon2 = ""
            
            if(req.files.logo){
                let oldFileName = event.logo;
                if (fs.existsSync(`./src/image/event/${oldFileName}`)) {
                    // console.log('file exists');
                    //delete old file
                    let dir = path.join(__dirname, "../../image/event", oldFileName);
                    fs.unlink(dir, (err) => console.log(err));
                    console.log("hapus file");
    
                    //set filename
                    logo = req.files.logo[0]
                  } else {
                    console.log('file not found!');
                  }
            }
            if(req.files.icon1){
                let oldFileName = event.icon1;
                if (fs.existsSync(`./src/image/event/${oldFileName}`)) {
                    //delete old file
                    let dir = path.join(__dirname, "../../image/event", oldFileName);
                    fs.unlink(dir, (err) => console.log(err));
                    console.log("hapus file");

                    //set filename
                    icon1 = req.files.icon1[0]
                } else {
                    console.log('file not found!');
                }
            }
            if(req.files.icon2){
                let oldFileName = event.icon2;
                if (fs.existsSync(`./src/image/event/${oldFileName}`)) {
                    //delete old file
                    let dir = path.join(__dirname, "../../image/event", oldFileName);
                    fs.unlink(dir, (err) => console.log(err));
                    console.log("hapus file");

                    //set filename
                    icon2 = req.files.icon2[0]
                } else {
                    console.log('file not found!');
                }
            }

            //set data to change
            let data = {
                nama: req.body.nama,
                logo: logo.filename,
                icon1: icon1.filename,
                icon2: icon2.filename,
            }
            const result = await Event.update(data, {where: param})
            return editResponse(req,res, result)
        } catch (error) {
            return errorResponse(req, res, error.message);
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