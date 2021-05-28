import React, { useState } from "react";

/// Modifica el componente para que se puedan agregar tareas

function Tasks() {
  const [taskList, setTaskList] = useState([
    { id: 1, name: "Sacar la ropa", done: false },
    { id: 2, name: "Hacer la cama", done: false },
    { id: 3, name: "Leer un rato", done: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const sendNewTask = (event) => {
    event.preventDefault();
    if (newTask) {
      let obj = { id: taskList.length + 1, name: newTask, done: false };
      setTaskList([...taskList, obj]);
      setNewTask("");
    }
  };

  const checkedTask = (id) => {
    const newArray = taskList.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTaskList(newArray);
  };

  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {taskList.map((task) => (
            <li
              className={task.done ? "done" : ""}
              onClick={() => checkedTask(task.id)}
            >
              {task.name}
            </li>
          ))}
        </ul>
        <form onSubmit={(event) => sendNewTask(event)}>
          <input
            className={!newTask ? "error" : ""}
            value={newTask}
            type="text"
            id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            //onfocus="if(this.value == 'value') { this.value = ''; }"
            onChange={(event) => setNewTask(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
export default Tasks;
