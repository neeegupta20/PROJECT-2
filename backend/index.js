const express=require("express");
const app=express();
const zod=require("zod");
const cors=require("cors");
const { createTodo }=require("./type.js");
const { updateTodo }=require("./type.js");
const { todo }=require("./db.js");
app.use(express.json());
app.use(cors());
app.get("/to-dos",async (req,res)=>{
    const todos=await todo.find({})
    res.json({
        todos
    })
})
app.put("/completed",async (req,res)=>{
    const updatePayload=req.body;
    const parsePayLoad=updateTodo.safeParse(updatePayload);
    if(!parsePayLoad.success){
        res.status(411).json({
            MESSAGE: "INCORRECT INPUT. PLEASE ENTER ID."
        })
        return;
    }
    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    });
    res.json({
        MESSAGE:"TO-DO's MARKED COMPLETED."
    })
})
app.post("/createtodos",async(req,res)=>{
    const createPayLoad=req.body;
    const parsePayLoad=createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            MESSAGE: "INCORRECT INPUTS TO CREATE A TO-DO."
        })
        return;
    }
    await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed:false
    })
    res.json({
        MESSAGE:"TO-DO CREATED SUCCESSFULLY."
    })
})
app.listen(3000);
