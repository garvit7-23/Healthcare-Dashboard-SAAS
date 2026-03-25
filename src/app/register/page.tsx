"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/features/auth/firebase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
  try {
    setLoading(true);
    setError("");

    await createUserWithEmailAndPassword(auth, email, password);

    router.push("/dashboard");
  } catch {
    setError("Failed to create account. Try a stronger password.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-background min-h-screen flex flex-col">
      
      {/* Navbar */}
      <Navbar minimal />

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-surface border border-border rounded-lg p-6 shadow-sm">
          
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-text">
              Create account
            </h1>
            <p className="text-sm text-muted">
              Start using the healthcare dashboard
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-sm text-danger">{error}</p>
            )}

            <Button
              onClick={handleRegister}
              loading={loading}
              className="w-full"
            >
              Create Account
            </Button>

            {/* Redirect to Login */}
            <p className="text-sm text-muted text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}