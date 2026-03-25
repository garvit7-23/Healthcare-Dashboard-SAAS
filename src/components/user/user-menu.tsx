"use client";

import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/features/auth/firebase";
import { useAuthStore } from "@/features/auth/auth-store";
import { Button } from "@/components/ui/button";

export const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const user = useAuthStore((state) => state.user);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const initial = user?.email?.charAt(0).toUpperCase() || "U";

  return (
    <div className="relative">
      
      {/* Avatar */}
      <div
        onClick={() => setOpen(!open)}
        className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium cursor-pointer"
      >
        {initial}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-md shadow-md p-2 space-y-1">
          
          <div className="px-3 py-2 text-xs text-muted">
            {user?.email}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
          >
            Account
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="w-full justify-start text-danger"
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};