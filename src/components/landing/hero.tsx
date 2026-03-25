import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="py-24 px-6 text-center">
      
      <h1 className="text-4xl md:text-5xl font-bold text-text max-w-3xl mx-auto">
        Smarter Healthcare Management for Modern Teams
      </h1>

      <p className="mt-4 text-muted max-w-xl mx-auto">
        Track patients, analyze data, and streamline operations with a powerful,
        intuitive dashboard built for healthcare professionals.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <Link href="/register">
          <Button size="lg">Start Free</Button>
        </Link>

        <Link href="/login">
          <Button variant="outline" size="lg">
            Login
          </Button>
        </Link>
      </div>

      {/* Premium visual placeholder */}
      <div className="mt-12 max-w-5xl mx-auto rounded-lg border border-border bg-surface shadow-md p-6">
        <p className="text-sm text-muted">
          📊 Dashboard Preview (we’ll upgrade this later)
        </p>
      </div>

    </section>
  );
};