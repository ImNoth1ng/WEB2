const express = require("express");
const path = require("path");

const app = express();


const port = 40402;

app.get("/",(req, res) =>{
    //res.sendFile("/home/nothing/Documentos/Escuela/WEB2/22oct2024/express/index.html");
    res.sendFile(__dirname+"/index.html")
});


app.listen(port, ()=>{
    console.log("Aplicacion corriendo con express en el puerto " + port);
})