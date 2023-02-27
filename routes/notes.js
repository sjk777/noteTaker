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

notes.post('/', (req,res)=>{
    console.info(`${req.method} request received to add a review`);
    console.log(req.body)

    const {title, text} = req.body;

    if(text && title){
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        fs.
    }
})