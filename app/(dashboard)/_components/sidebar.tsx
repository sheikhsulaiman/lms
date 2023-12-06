import React from "react";
import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="border-r w-56 h-full flex flex-col overflow-y-auto shadow-sm bg-white">
      <div className="flex justify-center items-center h-[80px]">
        <Logo></Logo>
      </div>
      <div className="w-full flex flex-col">
        <SidebarRoutes></SidebarRoutes>
      </div>
    </div>
  );
};

export default Sidebar;
