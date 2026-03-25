"use client";

import { User, Building2, Activity } from "lucide-react";

const audience = [
  {
    title: "Doctors",
    description:
      "Track patient progress, manage records, and make data-driven decisions with ease.",
    icon: User,
  },
  {
    title: "Hospitals",
    description:
      "Streamline operations and manage large-scale patient data efficiently.",
    icon: Building2,
  },
  {
    title: "Healthcare Teams",
    description:
      "Collaborate seamlessly across departments with shared insights and analytics.",
    icon: Activity,
  },
];

export const Audience = () => {
  return (
    <section className="py-20 px-6">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-text">
          Built for modern healthcare teams
        </h2>
        <p className="text-muted mt-2">
          Designed to support professionals at every level
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {audience.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-surface border border-border rounded-lg p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="mb-4 flex justify-center">
                <Icon size={28} className="text-primary" />
              </div>

              <h3 className="font-semibold text-text mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-muted">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
};