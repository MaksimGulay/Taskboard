// import React from "react";
import React, { useEffect, useState } from "react";
import SideBar from "../Layout/Sidebar";
import WelcomeModal from "../Modal/WelcomModal";
import Header from "../Layout/Header";
import { HomeContainer } from "../../styles/HomeContainer";
import { TaskList } from "../Tasks/TaskList";

const Tasks = [
  {
    id: "id-1",
    title: "task-1",
  },
  { id: "id-2", title: "task-2" },
];

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
      {showModal && <WelcomeModal onClose={handleCloseModal} />}
      <SideBar />
      <Header />
      <TaskList tasks={Tasks} />
    </HomeContainer>
  );
}

export default Home;
