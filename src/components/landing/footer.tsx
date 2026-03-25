import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border mt-20">
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-text">
          Ready to transform your healthcare workflow?
        </h2>

        <p className="text-muted mt-2">
          Start managing patients and analytics more efficiently today.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/register">
            <Button size="lg">Get Started</Button>
          </Link>

          <Link href="/login">
            <Button variant="outline" size="lg">
              Login
            </Button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
        
        <p>© {new Date().getFullYear()} Healthcare SaaS. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#features" className="hover:text-text transition">
            Features
          </a>
          <a href="#how" className="hover:text-text transition">
            How it works
          </a>
          <a href="#faq" className="hover:text-text transition">
            FAQ
          </a>
        </div>

      </div>

    </footer>
  );
};