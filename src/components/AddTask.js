import { useState } from "react";

export default function AddTask({ tasks, setTasks }) {
  const [inputTask, setInputTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = [...tasks];
    updatedTasks.push({ name: inputTask, status: "todo" });
    setTasks(updatedTasks);
    setInputTask("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
