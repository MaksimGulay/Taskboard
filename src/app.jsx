// import "./app.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Pages/Home";
import { Container } from "./appStyle";
import ForgotPassword from "./components/Auth/ForgotPassword";

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
        </Routes>
      </Container>
    </Router>
  );
}
