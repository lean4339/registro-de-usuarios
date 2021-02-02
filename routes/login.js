const express = require("express");
const router = express.Router()
const {mostrar,entrar} = require("../controllers/loginController");

router.get("/",mostrar);
router.post("/",entrar);

module.exports = router;