import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Sidebar from "./components/Sidebar";
import StatCards from "./components/StatCards";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";

const API = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (taskData) => {
    await axios.post(API, taskData);
    fetchTasks();
  };

  const handleCompleteTask = async (id) => {
    await axios.put(`${API}/${id}`, { status: "completed" });
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <StatCards tasks={tasks} />
        <TaskForm onAdd={handleAddTask} />
        <TaskTable 
          tasks={tasks} 
          onComplete={handleCompleteTask} 
          onDelete={handleDeleteTask} 
        />
      </div>
    </div>
  );
}

export default App;