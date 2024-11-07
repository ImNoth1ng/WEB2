const express = require('express');
const mysql = require('mysql12');
const bodyPaser = require('body-parser');

const app = express();

app.use(bodyPaser.urlencoded({extend:false}));