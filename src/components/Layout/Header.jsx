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
  return (
    <HeaderContainer>
      <ItemsContainet>
        <Input type="text" />
        <CreateButton>Create New Tast</CreateButton>
        <NotificationButton></NotificationButton>
        <ProfileButton>
          <Avatar />
        </ProfileButton>
      </ItemsContainet>
    </HeaderContainer>
  );
}
export default Header;
