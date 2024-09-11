import React from "react";
import { TaskBordIcon } from "../../icons/Taskbord";
import { HomeIcon } from "../../icons/HomeIcon";
import { CalendarIcon } from "../../icons/CalendarIcon";
import {
  ItemLink,
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
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const handleCalendarClick = () => {
    navigate("calendar");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleTaskListClick = () => {
    navigate("task_list");
  };
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
              <ItemLink onClick={handleHomeClick}>Home</ItemLink>
            </MenuItem>
            <MenuItem>
              <CalendarIcon />
              <ItemLink onClick={handleCalendarClick}>Calendar</ItemLink>
            </MenuItem>
            <MenuItem>
              <TaskIcon />
              <ItemLink onClick={handleTaskListClick}>My tasks</ItemLink>
            </MenuItem>
          </MenuItems>
        </MenuBlock>
      </MenuContainer>
    </SideBarContainer>
  );
}

export default SideBar;
