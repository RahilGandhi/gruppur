import React, { useState } from 'react'
import MobileNav from './MobileNav';
import Sidebar from './NewSideBar';

const SidebarWrapper = ({ isSidebarOpen, setIsSidebarOpen}) => {
  const [activeTab, setActiveTab] = useState('Dashboard')
  return (
    <div>
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNav isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>

      {/* Sidebar - Hidden on mobile, fixed on desktop */}
      <div className={`
        fixed top-0 left-0 z-40 h-screen
        transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default SidebarWrapper