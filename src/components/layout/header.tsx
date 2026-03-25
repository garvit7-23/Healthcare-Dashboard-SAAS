"use client";

import { Bell } from "lucide-react";
import { UserMenu } from "@/components/user/user-menu";

export const Header = () => {
  return (
    <div className="h-14 bg-surface border-b border-border flex items-center justify-between px-6">
      
      {/* Left */}
      <h2 className="text-sm text-muted">Dashboard</h2>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        {/* Notification */}
        <button className="p-2 rounded-md hover:bg-gray-100 transition">
          <Bell size={18} />
        </button>

        {/* User Menu */}
        <UserMenu />
      </div>
    </div>
  );
};