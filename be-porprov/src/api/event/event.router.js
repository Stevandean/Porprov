const express = require("express");
const router = express.Router();
const {
    getEvent,
    addEvent,
    editEvent,
    getImage,
    getEventbyId,
    deleteEvent,
    loginEvent,
    getPubEvent,
}= require("./event.controller");
const Auth = require('../../middleware/Auth')
const verifyRoles = require("../../middleware/verifyRoles")

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
router.get("/active", getPubEvent)
router.get("/", Auth, verifyRoles("superadmin"), getEvent);
router.get("/:id", getEventbyId);
router.post("/", Auth, verifyRoles("superadmin"),
    upload.fields(
        [
            {name: 'logo', maxCount: 1}, 
            {name: 'icon1', maxCount: 1},
            {name: 'icon2', maxCount: 1}
        ]
), addEvent);
router.put('/:id', Auth, verifyRoles("admin", "superadmin"),
    upload.fields(
        [
            {name: 'logo', maxCount: 1}, 
            {name: 'icon1', maxCount: 1},
            {name: 'icon2', maxCount: 1}
        ]
), editEvent)
router.get("/image/:filename", getImage)
router.delete("/:id", Auth, verifyRoles("superadmin"), deleteEvent)
router.post('/login', loginEvent)

//export module
module.exports = router;