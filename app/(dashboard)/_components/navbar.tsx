import React from "react";
import MobileSidebar from "./mobile_sidebar";
import NavbarRoutes from "@/components/navbar_routes";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
