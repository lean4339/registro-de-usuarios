const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data/usuarios.json","utf-8"));
const {check,validationResult,body} = require("express-validator");
const bcrypt = require("bcrypt");


module.exports = {
    registrar: (req,res)=>{
        res.render("register")
    },
    crearUsuario : (req,res,next)=>{
        let errors = validationResult(req);
        const {nombre,apellido,email,password,password2} = req.body;

        if(errors.isEmpty() && req.files[0].filename != "undefined"){
            let id = 0;
            data.forEach(element => {
                 if( element.id > id){
                    id = element.id
                 }                   
            });
            const usuario = {
                id: id +1,
                nombre,
                apellido,
                email,
                password : bcrypt.hashSync(password,10),
                imagen: req.files[0].filename
            }
            data.push(usuario);
            let final = JSON.stringify(data);
            console.log("esto es data al finalizar?"+final);
            fs.writeFileSync("./data/usuarios.json",final,"utf-8");
            res.redirect(`/profile/${usuario.id}`);
        }else{
            res.render("register",{errors: errors.errors});
            console.log(errors.errors);
        }
  
    }
}