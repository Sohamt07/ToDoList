import React, { useState } from 'react';

function TaskForm({ setTasks }) {
  const [taskName, setTaskName] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        complete: false,
        date: new Date().toISOString()
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
