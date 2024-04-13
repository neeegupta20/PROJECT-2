const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://wastenap:p%40ssw0rd%279%27%21@cluster0.gaehxqy.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo:todo
}