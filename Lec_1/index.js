const DB = require('./db');
const express = require('express');


const app = express();

app.use(express.json());

app.get("/",(req,res) =>{
    res.send("Hello World!");

})

app.get("/student" , async(req,res)=>{
    const data = await Student.find();
    res.send(data);
});

app.get("/student/:id", async(req,res) =>{
    let {id} = req.params
    const data = await Student.findById(id);
    res.send(data);
});

app.post("/student", async(req,res) =>{
    const data = await Student.create(req.body);
    res.send(data);
});

app.patch("/student/:id", async(req,res) =>{

    let {id} = req.params
    const data = await Student.findByIdAndUpdate(id, req.body, {new: true});
    res.send(data);
});

app.delete("/student/:id", async(req,res) =>{
    let {id} = req.params
    const data = await Student.findByIdAndDelete(id);
    res.send("Deleted Successfully");
});



app.listen(8090, (req,res)=>{
    console.log("listing on localhost:8090");
    DB();
})