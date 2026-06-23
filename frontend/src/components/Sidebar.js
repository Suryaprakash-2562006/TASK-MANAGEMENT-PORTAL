import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>📌 Task Portal</h2>
      <div className="nav-item active">Dashboard</div>
      <div className="nav-item">Projects</div>
      <div className="nav-item">Team</div>
      <div className="nav-item">Settings</div>
    </div>
  );
};

export default Sidebar;