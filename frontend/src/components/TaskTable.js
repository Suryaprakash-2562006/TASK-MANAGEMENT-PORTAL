import React from "react";

const TaskTable = ({ tasks, onComplete, onDelete }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td>{index + 1}</td>
              <td><strong>{task.title}</strong></td>
              <td>{task.description}</td>
              <td>
                <span className={`status-badge status-${task.status.toLowerCase()}`}>
                  {task.status}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  {task.status !== "completed" && (
                    <button 
                      className="btn btn-success"
                      onClick={() => onComplete(task._id)}
                    >
                      ✓ Complete
                    </button>
                  )}
                  <button 
                    className="btn btn-danger"
                    onClick={() => onDelete(task._id)}
                  >
                    ✕ Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {tasks.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "30px" }}>
                No tasks found. Add one above!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;