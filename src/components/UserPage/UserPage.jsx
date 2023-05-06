import React from "react";
import { useState } from "react";

let initialTasks = [
  {
    id: 1,
    detail: "take out trash",
    completed: false,
  },
  {
    id: 2,
    detail: "do dishes",
    completed: false,
  },
];

function UserPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskDetail, setTaskDetail] = useState("");

  const addTask = (taskDetail) => {
    setTaskDetail("");

    if (tasks.length === 0) {
      setTasks([
        {
          id: 1,
          detail: taskDetail,
          completed: false,
        },
      ]);
    } else {
      setTasks([
        ...tasks,
        {
          id: tasks[tasks.length - 1].id + 1,
          detail: taskDetail,
          completed: false,
        },
      ]);
    }
  };

  const deleteTask = (id) => {
    const check = confirm("Delete task?");

    if (check) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const completeTask = (id) => {
    console.log("in completeTask");
  };

  const editTask = (id) => {
    console.log("in editTask");
    console.log(id);
  };

  return (
    <div className="container">
      <input
        value={taskDetail}
        onChange={(e) => setTaskDetail(e.target.value)}
      />
      {/* Add task */}
      <button onClick={() => addTask(taskDetail)}> Add task</button>
      <br />
      <br />
      Tasks
      <br />
      <br />
      {tasks.map((task) => (
        <>
          <div>
            {task.detail} ID: {task.id}
            <button onClick={() => deleteTask(task.id)}>Delete task</button>
            <button onClick={() => editTask(task.id)}>Edit task</button>
            <button onClick={() => completeTask(task.id)}>
              Task completed
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
// this allows us to use <App /> in index.js
export default UserPage;
