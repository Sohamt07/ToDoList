import React from 'react';
import Task from './Task';

function TaskList({ tasks, setTasks }) {
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, complete: !task.complete } : task
    ));
  };

  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
}

export default TaskList;
