const express = require("express");
const router = express.Router()
const {registrar,crearUsuario} = require("../controllers/registerController");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const validar = require("../validations/validar");

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"public/images");
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname) );
    }
})

const upload = multer({storage: storage});
router.get("/",registrar);
router.post("/guardar",upload.any(),validar,crearUsuario);

module.exports = router;