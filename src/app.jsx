// import "./app.css";
// import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Pages/Home";
import { Container } from "./appStyle";

export function App() {
  return (
    <Container>
      {/* <Counter /> */}
      <Router basename="/Taskboard">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </Container>
  );
}
