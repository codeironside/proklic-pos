import React from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import SidebarSection from "../pages/Dashboard/global/Sidebar";
import TopBar from "../pages/Dashboard/global/TopBar";



const SuperAdminLayouts = () => {
  const location = useLocation();
  const myData = location.state;
  // console.log(myData); 

  return (
    <div>
            {/* <Outlet /> */}
      <div className="app">
        <SidebarSection myData={{myData}} />
        <main className="content">
          <TopBar myData={{myData}} />
          <Outlet myData={{myData}} />
          
        </main>
      </div>
    </div>
  );
};

export default SuperAdminLayouts;
