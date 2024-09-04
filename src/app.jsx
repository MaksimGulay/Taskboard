// import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Pages/Home";
import { Container } from "./appStyle";
import ForgotPassword from "./components/Auth/ForgotPassword";
import WelcomeModal from "./components/Modal/WelcomModal";

export function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Router basename="/Taskboard">
      {showModal && <WelcomeModal onClose={handleCloseModal} />}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
        </Routes>
      </Container>
    </Router>
  );
}
