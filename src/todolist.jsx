import React,{useState} from "react";

function Todolist() {
    const[task,setTask]=useState(["Eat Breakfast",
                                  "Take a shower",
                                  "Walk the dog",
                                  "Learn React",
                                  "Go to sleep"
    ])
    const[newtask,setNewTask]=useState("");
    const handleInputChange=(event)=>{
        setNewTask(event.target.value);
    };

    const handleAddTask=()=>{
        if (newtask.trim() !=="") {
            setTask(t=>[...t,newtask]);
            setNewTask("");
        }
    };
    const handleRemoveTask=(index)=>{
        const updateTask=task.filter((_,i)=>i!==index);
        setTask(updateTask);
    }
    const moveTaskUp=(index)=>{
        if (index>0) {
            const updatedTask=[...task];
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
            setTask(updatedTask);
        }
    }

    const moveTaskDown=(index)=>{
        if (index<task.length-1) {
            const updatedTask=[...task];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
            setTask(updatedTask);
        }
    }

    return(
        <div className="to-do">
            <h1>TO-DO-LIST</h1>
            <div>
                <input type="text" value={newtask} onChange={handleInputChange}
                        placeholder="Enter a task..."/>
                <button className="add-button" onClick={handleAddTask}>Add Task</button>

            </div>
            <ol>
                {task.map((t,index)=>
                    <li key={index}>
                        <span className="text">{t}</span>
                        <button className="delete-button" 
                            onClick={()=>handleRemoveTask(index) }>Delete</button>
                        <button className="move-button"
                            onClick={()=>moveTaskUp(index)}>👆</button>
                        <button className="move-button"
                            onClick={()=>moveTaskDown(index)}>👇</button>
                    </li>)}
            </ol>
        </div>
    )
}

export default Todolist

