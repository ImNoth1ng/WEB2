const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });// envía el archivo index.html ubicado en la carpeta raíz del proyecto
});

router.get('/about', (req, res) => {
    res.sendFile('about.html', { root: __dirname });// envía el archivo about.html ubicado en la carpeta raíz del proyecto
});

router.get('/contact', (req, res) => {
    res.sendFile('contact.html', { root: __dirname });// envía el archivo contact.html ubicado en la carpeta raíz del proyecto
});

module.exports = router;