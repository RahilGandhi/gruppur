import { Navigate, Outlet } from "react-router-dom";
import SidebarWrapper from "./components/SidebarWrapper";
import { useState } from "react";

const ProtectedRoute = ({ isAuthenticated }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ 
        width: "250px",
        position: "fixed", 
        height: "100vh",
        zIndex:99
      }}>
        <SidebarWrapper isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main Content */}
      <div 
        style={{ 
          flexGrow: 1, 
          padding: "0px", 
          // marginLeft: "250px" // Offset for the sidebar width
        }} 
        className="mt-20 lg:mt-0 ml-[0px] lg:ml-[260px]"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoute;
