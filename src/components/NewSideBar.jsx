import { FiHome, FiDollarSign, FiSettings } from 'react-icons/fi';
import { NavLink, useLocation } from 'react-router-dom';
import { getProfile } from '../api/api';
import { useEffect, useState } from 'react';
import {Avatar} from "@heroui/react";

function Sidebar() {
  const location = useLocation();

  const [userData, setUserData] = useState()

  const menuItems = [
    { icon: FiHome, text: 'Dashboard', url: '/dashboard' },
    { icon: FiDollarSign, text: 'Finance', url: '/finance' },
  ];

  const bottomMenuItems = [
    { icon: FiSettings, text: 'Settings', url: '/settings' },
  ];

  const fetchUserData = async () => {
    try{
        const res = await getProfile()
        setUserData(res.data)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
  } 

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 hidden lg:block">
        <h2 className='text-gray-700'>Grupp</h2>
      </div>

      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
          />
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                className={({ isActive }) => `flex items-center space-x-3 px-4 py-2 rounded-lg ${
                  isActive || location.pathname === item.url ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <ul className="space-y-2">
          {bottomMenuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                className={({ isActive }) => `flex items-center space-x-3 px-4 py-2 rounded-lg ${
                  isActive || location.pathname === item.url ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <Avatar name="Admin" className='bg-slate-200'/>
          <div>
            <div className="font-medium text-gray-800">{userData?.username}</div>
            <div className="text-sm text-gray-500">{userData?.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;