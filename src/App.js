import { useState } from "react";
import Header from './components/Header'
import Tasks from "./components/Tasks";
import Task from './components/Tasks'
function App() {
  const [tasks, setTasks]=useState([
    {
      "id": 1,
      "title": "Delectus aut autem",
      "day": "feb 5th at 2:30pm",
      "reminder":true
    },
    {
      "id": 2,
      "title": "Quis ut nam facilis et officia qui",
      "day": "feb 6th at 2:30pm",
      "reminder":true
    },
    {
      "id": 3,
      "title": "Fugiat veniam minus",
      "day": "feb 7th at 2:30pm",
      "reminder":true
    },
])
  //Delete Task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }
  return (
    <div className="container">
      <Header/>
      {tasks.length>0?<Task tasks={tasks} onDelete={deleteTask}/>:'No tasks to show!'}
    </div>
  );
}


export default App;
