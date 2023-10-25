import AddTask from "./AddTask";
import { useState } from "react";

export default function Board() {
  const [tasks, setTasks] = useState([]);

  const todos = tasks.filter((task) => task.status === "todo");
  const inProgress = tasks.filter((task) => task.status === "inProgress");
  const completed = tasks.filter((task) => task.status === "completed");

  const handleOnDrag = (e, draggedTask) => {
    e.dataTransfer.setData("task", draggedTask);
  };

  const handleOnDrop = (e) => {
    const droppedTask = JSON.parse(e.dataTransfer.getData("task"));
    const updatedTasks = [...tasks].filter((i) => i.name !== droppedTask.name);
    updatedTasks.push({ name: droppedTask.name, status: e.target.className });
    setTasks(updatedTasks);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <AddTask setTasks={setTasks} tasks={tasks} />

      <div className="board">
        <div className="todo" onDrop={handleOnDrop} onDragOver={handleDragOver}>
          <h1>Todo</h1>
          <div>
            {todos.map((task, idx) => (
              <p
                key={idx}
                className={"draggable"}
                draggable
                onDragStart={(e) => handleOnDrag(e, JSON.stringify(task))}
              >
                {task.name}
              </p>
            ))}
          </div>
        </div>
        <div
          className="inProgress"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
        >
          <h1>In Progress</h1>
          <div>
            {inProgress.map((task, idx) => (
              <p
                key={idx}
                className={"draggable"}
                draggable
                onDragStart={(e) => handleOnDrag(e, JSON.stringify(task))}
              >
                {task.name}
              </p>
            ))}
          </div>
        </div>
        <div
          className="completed"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
        >
          <h1>Completed</h1>
          <div>
            {completed.map((task, idx) => (
              <p
                key={idx}
                className={"draggable"}
                draggable
                onDragStart={(e) => handleOnDrag(e, JSON.stringify(task))}
              >
                {task.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
