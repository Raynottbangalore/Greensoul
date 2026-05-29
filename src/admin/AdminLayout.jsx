import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#222A1F] font-body text-[#E9E8E1]">
      <Sidebar />
      <div className="flex-1 ml-64 p-10 bg-[#283225]">
        <Outlet />
      </div>
    </div>
  );
}
