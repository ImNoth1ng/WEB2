const express = require('express');
const app = express();
const port = 31805;

const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`El servidor está corriendo en http://localhost:${port}`);
});