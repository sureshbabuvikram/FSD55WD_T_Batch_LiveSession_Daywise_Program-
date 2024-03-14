import express from 'express';
import fs from 'fs';
import {format} from 'date-fns';

const app= express();
const PORT=4000;   //http://localhost:4000

app.get('/', (req,res)=>{
    // res.status(200).json({message:"Hai my dear team, we will become a FSD Developer"})
    res.status(200).send(`<div style=" background-color:yellow; color:blue " > <h1> Welcome to my team   </h1>   </div>`)
})
app.get('/get-data', (req,res)=>{
    res.status(200).json({message:"data", data:{name:"suresh"}})
})

app.get('/write-read', (req,res)=>{
    let today= format(new Date(), 'dd-mm-yyyy-HH-mm-ss')
    console.log(("today",today));
    const filePath= `TimeStamp/${today}.txt`
    fs.writeFileSync(filePath, `${today}` , 'utf8')
    let data = fs.readFileSync(filePath, 'utf8')
    res.status(200).send(data)
})



app.listen(PORT, ()=>{
    console.log(`App is running in the port  ${PORT}`);
}) // running

 