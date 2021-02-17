import { useState } from "react";

const Task = () => {
    const [tasks, setTasks]=useState([
        {
          "id": 1,
          "title": "delectus aut autem",
          "day": "feb 5th at 2:30pm",
          "reminder":true
        },
        {
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "day": "feb 6th at 2:30pm",
          "reminder":true
        },
        {
          "id": 3,
          "title": "fugiat veniam minus",
          "day": "feb 7th at 2:30pm",
          "reminder":true
        },
    ])
    return (
        <>
            {
                tasks.map((task)=>(
                    <h3 key={task.id}>{task.title}</h3>
                ))
            }
        </>
    )
}

export default Task
