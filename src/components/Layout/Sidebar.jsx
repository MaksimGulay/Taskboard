import React from "react";
import { TaskBordIcon } from "../../icons/Taskbord";
import { HomeIcon } from "../../icons/HomeIcon";
import { CalendarIcon } from "../../icons/CalendarIcon";
import {
  ItemText,
  LogoTitle,
  LogoVraper,
  MenuBlock,
  MenuContainer,
  MenuItem,
  MenuItems,
  MenuTitle,
  SideBarContainer,
  SideBarHead,
} from "../../styles/layout/sideBar";
import { TaskIcon } from "../../icons/TaskIcon";

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHead>
        <LogoVraper>
          <TaskBordIcon />
        </LogoVraper>
        <LogoTitle>Taskboard</LogoTitle>
      </SideBarHead>
      <MenuContainer>
        <MenuBlock>
          <MenuTitle>menu</MenuTitle>
          <MenuItems>
            <MenuItem>
              <HomeIcon />
              <ItemText>Home</ItemText>
            </MenuItem>
            <MenuItem>
              <CalendarIcon />
              <ItemText>Calendar</ItemText>
            </MenuItem>
            <MenuItem>
              <TaskIcon />
              <ItemText>My tasks</ItemText>
            </MenuItem>
          </MenuItems>
        </MenuBlock>
      </MenuContainer>
    </SideBarContainer>
  );
}

export default SideBar;
