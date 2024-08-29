import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Home;
