const notes = require("express").Router();
const { json } = require("express");
const fs = require ("fs");
const uuid = require ("../helpers/uuid");


notes.get('/', async(req,res)=>{
    let data = fs.readFileSync(`db/db.json`, "utf8")
    data= JSON.parse(data)
    res.json(data)

    console.log(`${req.method} request recieved for reviews`);
});
