import React from "react";

const StatCards = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.status === "completed").length;
  const pending = total - completed;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h4>Total Tasks</h4>
        <h2>{total}</h2>
      </div>
      <div className="stat-card">
        <h4>Pending</h4>
        <h2>{pending}</h2>
      </div>
      <div className="stat-card">
        <h4>Completed</h4>
        <h2>{completed}</h2>
      </div>
      <div className="stat-card">
        <h4>Completion Rate</h4>
        <h2>{total > 0 ? Math.round((completed / total) * 100) : 0}%</h2>
      </div>
    </div>
  );
};

export default StatCards;