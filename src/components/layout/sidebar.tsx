"use client";

import { LayoutDashboard, BarChart3, Users } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Analytics", icon: BarChart3 },
  { name: "Patients", icon: Users },
];

export const Sidebar = () => {
  const pathname = usePathname(); // ✅ correct place

  return (
    <div className="w-64 h-screen bg-surface border-r border-border p-4 flex flex-col">
      <h1 className="text-lg font-semibold mb-6">Healthcare</h1>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          const path =
            item.name === "Dashboard"
              ? "/dashboard"
              : `/${item.name.toLowerCase()}`;

          const isActive = pathname === path;

          return (
            <Link key={item.name} href={path}>
              <div
                className={clsx(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition cursor-pointer",
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted hover:bg-gray-100 hover:text-text"
                )}
              >
                <Icon size={18} />
                <span className="text-sm">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};