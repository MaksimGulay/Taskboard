import styled from "styled-components";
import { Button } from "../authStyle/loginStyle";

export const ModalOwerlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  width: 449px;
  height: 400px;
  background: var(--neutral-white);
  padding: 16px;
`;

export const ModalTitle = styled.h2`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 30px;
  line-height: 158%;
  color: var(--neutral-title);
`;

export const ModalText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 144%;
  text-align: center;
  color: var(--neutral-body-text);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ModalButton = styled.button`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  line-height: 144%;
  color: var(--neutral-white);
  text-align: center;

  border-radius: 10px;
  width: 150px;
  height: 40px;

  background: var(--neutral-body-text);
`;
