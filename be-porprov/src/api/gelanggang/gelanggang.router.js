const express = require("express");
const router = express.Router();
const Auth = require("../../middleware/Auth")
const verifyRoles = require("../../middleware/verifyRoles")
const {
    getAll,
    addGelanggang,
    editGelanggang,
    deleteGelanggang,
    getAllbyEvent,
    getbyUserEvent
} = require("./gelanggang.controller")

router.get("/", Auth, verifyRoles("superadmin"), getAll)
router.get("/event/:event_id", Auth, getAllbyEvent)
router.get("/event", Auth, getbyUserEvent)
router.post("/", Auth, verifyRoles("admin"), addGelanggang)
router.put("/:id", Auth, verifyRoles("admin"), editGelanggang)
router.delete("/:id", Auth, verifyRoles("admin"), deleteGelanggang)

module.exports = router