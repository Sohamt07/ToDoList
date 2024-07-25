import React from 'react';

function Task({ task, deleteTask, toggleComplete }) {
  return (
    <li className="task">
      <input
        type="checkbox"
        checked={task.complete}
        onChange={() => toggleComplete(task.id)}
      />
      <div className="task-content">
        <div className="task-name">{task.name}</div>
        <div className="task-date">{new Date(task.date).toLocaleString()}</div>
      </div>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;
