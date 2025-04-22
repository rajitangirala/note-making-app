const express = require('express');
const cors = require('cors');
const fs = require('fs');


const app = express();

app.use(cors());
app.use(express.json());

const PORT =5000;

const Notes ="./notes.json";

app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`)
})
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
  });

app.get('/notes',(req,res)=>{
    try{
        const data = fs.readFileSync(Notes,'utf-8')
        const notes = JSON.parse(data);
        res.json(notes);
         
    }catch(err){
      res.status(500).json({message:'Error getting notes file'})
    }
})

app.post('/notes',(req,res)=>{
    try{
        const data = fs.readFileSync(Notes,'utf-8')
        const notes = JSON.parse(data);
         // Get max ID from existing notes
    const maxId = notes.length > 0 ? Math.max(...notes.map(note => note.id)) : 0;

    const newNote = {
      id: maxId + 1,
      text: req.body.text
    };
    notes.push(newNote);
    fs.writeFileSync(Notes, JSON.stringify(notes));
    res.status(201).json(newNote);
       
         
    }catch(err){
        console.error("error saving notes",err)
      res.status(500).json({message:'Error saving note'})
    }
})

app.delete('/notes/:id',(req,res)=>{

  try{
const data = fs.readFileSync(Notes,'utf-8');
let notes = JSON.parse(data);
notes = notes.filter(note=>note.id!== Number(req.params.id));
fs.writeFileSync(Notes, JSON.stringify(notes));
res.status(204).end()
  }catch(err){
    console.error("Error deleting note", err);
    res.status(500).json({message:'notes cannot be deleted'})
  }
})