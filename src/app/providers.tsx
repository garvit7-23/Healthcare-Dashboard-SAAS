"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/features/auth/firebase";
import { useAuthStore } from "@/features/auth/auth-store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    // 🔐 Auth listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // 🔔 Register Service Worker (ONLY in browser)
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => {
          console.log("Service Worker registered");
        })
        .catch((err) => {
          console.error("Service Worker registration failed:", err);
        });
    }

    return () => unsubscribe();
  }, [setUser]);

  return <>{children}</>;
};