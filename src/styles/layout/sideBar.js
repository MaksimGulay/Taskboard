import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-right: 32px;
`;

export const SideBarHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  border-radius: 5px;
  width: 212px;
  height: 51px;

  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.07);
  background: var(--neutral-white);
`;

export const StyledLogoIcon = styled.div`
  margin-left: 10px;
`;

export const LogoVraper = styled.div`
  margin-left: 10px;
`;

export const LogoTitle = styled.h2`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 19px;
  line-height: 163%;
  color: #000;
`;

export const MenuContainer = styled.div`
  border-radius: 8px;
  width: 212px;
  height: 523px;

  background: var(--neutral-white);
`;

export const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 35px 16px 16px;
  width: 158px;
  height: 314px;
  gap: 8px;
`;
export const MenuTitle = styled.div`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 12px;
  line-height: 133%;
  color: var(--neutral-body-text);
`;

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  width: 158px;
  height: 290px;
  gap: 24px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  width: 158px;
  height: 38px;
  gap: 8px;
`;

export const ItemText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--neutral-body-text);
`;
