import React from "react";
import Sidebar from "./_components/sidebar";

const layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="h-full mx-auto container">
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar></Sidebar>
      </div>
      {children}
    </div>
  );
};

export default layout;
