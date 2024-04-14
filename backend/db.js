const mongoose=require("mongoose");
mongoose.connect("YOUR MONGOOSE CONNECTION STRING") //REPLACE YOUR MONGOOSE CONNECTION STRING
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo:todo
}
