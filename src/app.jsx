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
import { SharedLayout } from "./components/Layout/SharedLoyout";
import { Calendar } from "./components/Pages/Calendar";

const Tasks = [
  {
    id: "id-1",
    title: "task-1",
  },
  { id: "id-2", title: "task-2" },
];

export function App() {
  return (
    <Router basename="/Taskboard/">
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="task_list" element={<TaskList tasks={Tasks} />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/tasks/:taskId" element={<TaskItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}
