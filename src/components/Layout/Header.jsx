import React from "react";
import {
  CreateButton,
  HeaderContainer,
  Input,
  ItemsContainet,
  NotificationButton,
  ProfileButton,
} from "../../styles/layout/header";
import { Avatar } from "../../icons/Avatar";

export function Header() {
  const handleClick = function () {
    console.log("button clicked");
  };
  return (
    <HeaderContainer>
      <ItemsContainet>
        <Input type="text" />
        <CreateButton onClick={handleClick}>Create New Tast</CreateButton>
        <NotificationButton></NotificationButton>
        <ProfileButton>
          <Avatar />
        </ProfileButton>
      </ItemsContainet>
    </HeaderContainer>
  );
}
export default Header;
