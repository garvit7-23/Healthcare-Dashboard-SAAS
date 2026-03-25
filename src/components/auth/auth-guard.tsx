"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/features/auth/auth-store";

const publicRoutes = ["/", "/login", "/register"];

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  const pathname = usePathname();

  const isPublic = publicRoutes.includes(pathname);

  useEffect(() => {
    // Not logged in + trying to access protected route
    if (!user && !isPublic) {
      router.push("/login");
    }

    // Logged in + trying to access login/register
    if (user && (pathname === "/login" || pathname === "/register")) {
      router.push("/dashboard");
    }
  }, [user, pathname, router, isPublic]);

  // Prevent flicker
  if (!user && !isPublic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-muted">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
};