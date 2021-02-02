const {check,validationResult,body} = require("express-validator");

module.exports = [
    check("nombre").notEmpty().withMessage("Por favor ingrese su nombre"),
    check("apellido").notEmpty().withMessage("por favor ingrese su apellido"),
    check("email").isEmail().withMessage("por favor ingrese su email"),
    check("password").notEmpty().withMessage("la contraseña es requerida"),
    check("password2").notEmpty().withMessage("por favor confirme la contraseña"),
    body("password2","password").custom((value)=>{
        if(value != value){
            return false;
        }
        else{
            return true;
        }
    }).withMessage("las contraseñas son diferentes"),
    body("imagen").custom((value)=>{
        if(value == "undefined"){
            return false;
        }
        else{
            return true;
        }
    }).withMessage("por favor seleccione una imagen")

]