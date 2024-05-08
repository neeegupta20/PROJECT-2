import { useState } from "react";
import './createtodos.css'
function CreateTodo(){
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    return(
        <div>
            <div class="intro"><h1>ADD YOUR DAILY TASKS</h1></div>
            <div class="todo1">
            <input class="input1" type="text" placeholder="TITLE" onChange={function(e){
                const value=e.target.value;
                setTitle(e.target.value);
            }}></input>
            </div>
            <br></br>
            <div class="todo2">
                <input class="input2" type="text" placeholder="DESCRIPTION" onChange={function(e){
                const value=e.target.value;
                setDescription(e.target.value);
            }}></input>
            </div>
            <br></br>
            <div class="todo3">
            <button class="btn1" onClick={()=>{
                fetch("http://localhost:3000/createtodos",{
                    method: "POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                .then(async function(res){
                    const json=await res.json();
                    alert("TO-DO ADDED.PLEASE REFRESH");
                })
            }}>ADD A TO-DO</button>
            </div>
  
        </div>
    )
}
export default CreateTodo
