const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data/usuarios.json","utf-8"));
module.exports = {
    verProfile : (req,res)=>{
        let resultado;
        const id = req.params.id
        data.forEach(element => {
            if(element.id == id){
                resultado = element
                res.render("profile",{usuario: resultado});
            }
        });
        
    }
}