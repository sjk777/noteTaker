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

        fs.readFile(`db/db.json`, "utf8", (err,data)=>{
            const fileData=JSON.parse(data);
            fileData.push(newNote);

            fs.writeFile(`db/db.json`,JSON.stringify(fileData,null,4),(err)=>
            err ? console.error(err) :console.log(`Review for ${newNote.title} has been written to file`)
            )
        });

    
    };

    const reponse = {
        status: "success",
        body: newNote,
    };
   
    res.status(201).json(response);
})else{
    res.status(500).json("error")
}


module.exports= notes;