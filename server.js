const express = require('express');
const path = require ('path');
const api = require ('./routes/index.js');


const PORT = process.envPORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));