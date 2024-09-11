import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: block;
  border-radius: 8px;
  width: 1140px;
  height: 80px;
  background: var(--neutral-white);
  margin-bottom: 18px;
`;

export const ItemsContainet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 1140px;
  height: 80px;
  background: var(--neutral-white);
  gap: 16px;
`;

export const Input = styled.input`
  border: 1px solid var(--neutral-stroke);
  border-radius: 8px;
  width: 767px;
  height: 56px;
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 183px;
  height: 56px;
  background: var(--neutral-title);

  font-family: var(--font-family);
  font-weight: 700;
  font-size: 14px;
  line-height: 157%;
  color: var(--neutral-white);
`;

export const NotificationButton = styled.button`
  border: 1px solid var(--neutral-stroke);
  border-radius: 8px;
  padding: 16px;
  width: 56px;
  height: 56px;
`;

export const ProfileButton = styled.button`
  border-radius: 4px;
  width: 56px;
  height: 56px;
`;
