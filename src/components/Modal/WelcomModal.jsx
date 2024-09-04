import React from "react";
import {
  ButtonContainer,
  ModalButton,
  ModalContainer,
  ModalOwerlay,
  ModalText,
  ModalTitle,
} from "../../styles/modal/WelcomModalStyle";
import { useNavigate } from "react-router-dom";
import { WelcomIcon } from "../../icons/WelcomeIcon";

function WelcomeModal({ onClose }) {
  const navigate = useNavigate();

  const handleRegister = () => {
    onClose();
    navigate("/register");
  };

  const handleLogin = () => {
    onClose();
    navigate("/login");
  };
  return (
    <ModalOwerlay>
      <ModalContainer>
        <ModalTitle>Hellow friends!</ModalTitle>
        <WelcomIcon />
        <ModalText>
          Welcome to our task creation application. Here you can easily organize
          your tasks, follow deadlines and increase productivity.
        </ModalText>
        <ButtonContainer>
          <ModalButton onClick={handleLogin}>Login</ModalButton>
          <ModalButton onClick={handleRegister}>Register</ModalButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOwerlay>
  );
}

export default WelcomeModal;
