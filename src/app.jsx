// import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Counter } from "./features/counter/Counter";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/pages/Home";

export function App() {
  // fix
  return (
    <div>
      <Counter />
      <Router basename="/Taskboard">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
