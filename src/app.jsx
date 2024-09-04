// import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Pages/Home";
import { Container } from "./appStyle";
import ForgotPassword from "./components/Auth/ForgotPassword";

export function App() {
  return (
    <Container>
      <Router basename="/Taskboard">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </Container>
  );
}
