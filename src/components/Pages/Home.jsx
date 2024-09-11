// import React from "react";
import React, { useEffect, useState } from "react";
import WelcomeModal from "../Modal/WelcomModal";
import { HomeContainer } from "../../styles/HomeContainer";

function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      setShowModal(true);
      localStorage.setItem("hasSeenModal", "true");
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <HomeContainer>
      <h1>home page</h1>
      {showModal && <WelcomeModal onClose={handleCloseModal} />}
    </HomeContainer>
  );
}

export default Home;
