import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#1a1c18] font-body text-[#E9E8E1]">
      <Sidebar />
      <div className="flex-1 ml-64 p-10">
        <Outlet />
      </div>
    </div>
  );
}
