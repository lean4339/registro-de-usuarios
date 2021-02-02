const express = require("express");
const router = express.Router()
const {verProfile} = require("../controllers/profileController");
router.get("/:id",verProfile);

module.exports = router;