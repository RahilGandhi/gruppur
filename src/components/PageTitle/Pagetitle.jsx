import { useEffect, useRef, useState } from "react";
import { DollarSign, TrendingUp, PieChart as PieChartIcon, Landmark, ChevronDown, ArrowUpCircle, ArrowDownCircle, MoreHorizontal, List, Menu, X, UserCircle, LogOut as LogOutIcon } from 'lucide-react';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PageTitle = ({ title, userName, userEmail, userAvatarSrc }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // For detecting clicks outside

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const logout = () => {
    localStorage.setItem('token', null)
    navigate('/signin');
  }


  return (
    <header className="flex items-center justify-between mb-8 shadow-sm w-[100%]">
      <div>
        <h1 className="text-2xl sm:text-xl font-bold text-gray-800 ml-2">{title}</h1>
      </div>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200"
        >
          <img
            src={userAvatarSrc || "https://placehold.co/40x40/E0E7FF/4F46E5?text=U"}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-200"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/E0E7FF/4F46E5?text=Err"; }}
          />
          <div className="text-left hidden sm:block">
            <div className="text-sm font-semibold text-gray-700">{userName || "User Name"}</div>
            <div className="text-xs text-gray-500">{userEmail || "user@example.com"}</div>
          </div>
          <ChevronDown size={18} className="text-gray-500 hidden sm:block" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20 py-1 ring-1 ring-black ring-opacity-5">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              <UserCircle size={18} className="mr-3 text-gray-500" />
              User Info
            </a>
            <a
              href="#"
              onClick={() => logout()}
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
            >
              <LogOutIcon size={18} className="mr-3" /> {/* Icon will inherit text color */}
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
 
export default PageTitle