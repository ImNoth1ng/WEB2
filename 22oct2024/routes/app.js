const express = require("express");
//const router = express.Router();

const app = express();
port = 10002;

const routes = require("./rutas");

app.use("/",routes);


app.listen(port, ()=>{
    console.log('Servidor corriendo en http://localhost:'+port);
})