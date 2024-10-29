const express = require("express");
const router = express.Router();
//def de rutas y manejadores

router.get("/",(req,res)=>{
    res.send("Hola desde mi ruta inicial, pagina principal")
});

router.get("/mondongo",(req,res)=>{
    res.send("Hola desde mi ruta mondongo, pagina mondongo")
});

module.exports = router;