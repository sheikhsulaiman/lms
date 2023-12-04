import React from "react";
import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="border-r w-56 h-full flex flex-col overflow-y-auto shadow-sm bg-white">
      <Logo></Logo>
      <div className="w-full flex flex-col">
        <SidebarRoutes></SidebarRoutes>
      </div>
    </div>
  );
};

export default Sidebar;
