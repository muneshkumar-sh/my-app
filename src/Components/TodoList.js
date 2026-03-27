import React, {useState} from 'react'

export default function TodoList() {

    //two states → tasks, input
    const [tasks, setTasks]=useState([]);
    const [input, setInput]=useState("");

    //handle inputs
    const handleChange=(event)=>{
        setInput(event.target.value);
    }

    //add tasks
    const addTask=()=>{
        if(input.trim()==="") 
            return;

        setTasks([...tasks, input]);
        setInput("");
    }

    //delete task
    const deleteTask=(index)=>{
        const newTasks=tasks.filter((_, i)=> i!==index);
        setTasks(newTasks);
    }

    //edit task
    const editTask=(index)=>{
        setInput(tasks[index]);
        deleteTask(index);
    }




  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ width: "500px" }}>

        {/* Title */}
        <h2 className="text-center mb-4">TO DO List</h2>

        {/* Input */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task"
            value={input}
            onChange={handleChange}
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="list-group">
          {tasks.map((task, index)=>(
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center">
                {task}

                <div>
                    <button className="btn btn-primary btn-sm me-2" onClick={()=>editTask(index)}>
                        Edit
                    </button>

                    <button className="btn btn-danger btn-sm" onClick={()=>deleteTask(index)}>
                        Delete
                    </button>

                </div>

            </li>

          ))}
        </ul>

      </div>

    </div>

  )
}