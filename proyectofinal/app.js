const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const port = 3180;
/**/ 

const app = express();

app.use(bodyParser.urlencoded({extend:false}));
//analizar los datos del cuerpo de las solicitudes HTTP, especificamente los datos que provienen de formulario HTML enviados atraves de propiedad POST y GET
app.set('view engine', 'ejs');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'nombre_usuario',
    password: '123456',
    database: 'test',
    port: '3306'

});

db.connect(err => {
    if(err){
        console.log(err)
        console.log("eror al momento de hacer conexion con la base de datos");
    }else{
        console.log("conexion realizada exitosamente! owo");
    }

});

//server inicio

app.listen(port, ()=>{
    console.log(`servidor iniciado en http://localhost:${port}`);
})

//Monstrar lista de usuarios
app.get('/',(req,res)=>{
    //Consulta a la base de datos
    const query = 'SELECT * FROM user';
    //trabajar con la conexion
    db.query(query,(err,results)=>{
        if(err){
            console.error(`Error al recuperar datos -> Codigo de Error: ${err}`);
            res.send('Error en recuperar datos');
        } else {
            res.render('index',{users:results});
        }
    });
});


app.post('/add', (req,post)=>{
    const {name,email} = req.body;
    const query = 'INSERT INTO users (name, email)VALUE (?,?)';
    db.query(query,[name,email],(err =>{
        if(err){
            console.error(`Error al insertar usuarios: Codigo-> ${err}`);
            res.send('Error');
        }
    }))

})