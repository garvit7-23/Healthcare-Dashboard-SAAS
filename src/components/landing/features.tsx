"use client";

import { Users, BarChart3, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Patient Management",
    description:
      "Easily manage patient records, track conditions, and monitor progress in one place.",
    icon: Users,
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain insights with real-time analytics and data visualization dashboards.",
    icon: BarChart3,
  },
  {
    title: "Secure & Reliable",
    description:
      "Built with modern security standards to ensure patient data safety.",
    icon: ShieldCheck,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-6">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-text">
          Everything you need to manage healthcare
        </h2>
        <p className="text-muted mt-2">
          Designed for efficiency, clarity, and better decision-making
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="bg-surface border border-border rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="mb-4">
                <Icon className="text-primary" size={28} />
              </div>

              <h3 className="font-semibold text-text mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-muted">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
};