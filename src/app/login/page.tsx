"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/features/auth/firebase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      await signInWithEmailAndPassword(auth, email, password);

      // 🔔 Notification (assignment requirement)
      if ("Notification" in window) {
        const permission = await Notification.requestPermission();

        if (permission === "granted") {
          new Notification("Welcome back 👋", {
            body: "You have successfully logged in.",
          });
        }
      }

      router.push("/dashboard");
    } catch (err: any) {
      setError(
        err.code === "auth/invalid-credential"
          ? "Invalid email or password"
          : "Something went wrong. Please try again."
      );
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
              Welcome back
            </h1>
            <p className="text-sm text-muted">
              Login to your healthcare dashboard
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
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLogin();
              }}
            />

            {error && (
              <p className="text-sm text-danger">{error}</p>
            )}

            <Button
              onClick={handleLogin}
              loading={loading}
              disabled={!email || !password}
              className="w-full"
            >
              Login
            </Button>

            {/* Redirect to Register */}
            <p className="text-sm text-muted text-center">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="text-primary font-medium hover:underline"
              >
                Create one
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