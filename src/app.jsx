// import "./app.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Pages/Home";
import { Container } from "./appStyle";
import ForgotPassword from "./components/Auth/ForgotPassword";
import { NotFound } from "./components/Pages/NotFound";
import { TaskList } from "./components/Tasks/TaskList";
import { TaskItem } from "./components/Tasks/TaskItem";

export function App() {
  return (
    <Router basename="/Taskboard/">
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/:taskId" element={<TaskItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}
