import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};
const Admin = (props: Props) => {
  return (
    <div className="min-h-screen dark:bg-[#1C1A26]">
      <Outlet/>
    </div>
  );
};

export default Admin;
