import React from "react";
import SideBar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "../../styles/layout/layout";

export function SharedLayout() {
  return (
    <LayoutContainer>
      <SideBar />
      <div>
        <Header />
        <Outlet />
      </div>
    </LayoutContainer>
  );
}
