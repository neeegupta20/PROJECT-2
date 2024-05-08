
function Todos({todos}){

 return(
    <div>
        {todos.map(function(todos){
            return(
                <div>
                    <h1>TASK: {todos.title}</h1>
                    <h2>TIMINGS: {todos.description}</h2>
                    <button onClick={async()=>{
                        const id=todos._id;
                        if(todos.completed==false){
                            await fetch("http://localhost:3000/completed",{
                                method:"PUT",
                                body:JSON.stringify({
                                    id:id
                            }),
                                headers:{
                                    "Content-type":"application/json"
                                }
                            })
                          .then(async function(){
                                alert("MARKED AS DONE. PLEASE REFRESH")
                            })
                        }
                    }}>
                {todos.completed==true? "COMPLETED":"MARK AS DONE"}</button>
                </div>
            )
        })}
    </div>
 )
}
export default Todos
