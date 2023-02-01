const express = require("express");
const router = express.Router();
const {
    getEvent,
    addEvent,
    editEvent,
    getImage
}= require("./event.controller");

const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/image/event/")
    },
    filename: (req, file, cb) => {
        cb(null, "img-" + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage: storage })

//--------------------------------
//route event
//---------------------------------

//router
router.get("/", getEvent);
router.post("/", 
    upload.fields(
        [
            {name: 'logo', maxCount: 1}, 
            {name: 'icon1', maxCount: 1},
            {name: 'icon2', maxCount: 1}
        ]
), addEvent);
router.put('/:id',
    upload.fields(
        [
            {name: 'logo', maxCount: 1}, 
            {name: 'icon1', maxCount: 1},
            {name: 'icon2', maxCount: 1}
        ]
), editEvent)
router.get("/image/:filename", getImage)


//export module
module.exports = router;