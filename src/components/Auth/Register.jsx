import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/home");
  };

  return (
    <div>
      <h1>Register page</h1>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
