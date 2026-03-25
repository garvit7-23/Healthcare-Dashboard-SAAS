"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="h-16 border-b border-border bg-surface flex items-center justify-between px-6 sticky top-0 z-50">
      
      {/* Logo */}
      <Link href="/">
         <h1 className="font-semibold text-lg cursor-pointer">
            Healthcare SaaS
          </h1>
        </Link>

      {/* Nav */}
      <div className="hidden md:flex items-center gap-6 text-sm text-muted">
        <a href="#features" className="hover:text-text transition">Features</a>
        <a href="#how" className="hover:text-text transition">How it works</a>
        <a href="#faq" className="hover:text-text transition">FAQ</a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href="/register">
          <Button>Get Started</Button>
        </Link>
      </div>

    </div>
  );
};