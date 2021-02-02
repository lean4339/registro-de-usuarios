const fs = require("fs");
const bcrypt = require("bcrypt");
const data = JSON.parse(fs.readFileSync("./data/usuarios.json","utf-8"));


module.exports = {
    mostrar: (req,res)=>{
        res.render("login",{error: " "})
    },
    entrar: (req,res)=>{
        let resultado;
        const {nombre,password} = req.body
        data.forEach(element => {
            if(element.nombre == nombre){
            resultado = element;
            }

        });
        
        if(resultado){
            if(bcrypt.compareSync(password,resultado.password)){
                res.redirect(`/profile/${resultado.id}`);
            }
        }
        else{
            res.render("login",{error: "credenciales invalidas"});
        }
        console.log(req.body);
    }
}