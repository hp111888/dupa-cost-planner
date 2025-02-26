import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DupaForm from "./components/DupaForm";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <h1>DUPA Cost Planner</h1>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/dupa-form">Create DUPA</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dupa-form" element={<DupaForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
