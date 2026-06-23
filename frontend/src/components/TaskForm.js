import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    onAdd({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="task-form-container">
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Task Title..." 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Task Description..." 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">+ Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;