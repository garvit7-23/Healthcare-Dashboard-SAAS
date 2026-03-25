"use client";

const steps = [
  {
    title: "Register & Setup",
    description:
      "Create your account and set up your healthcare workspace in minutes.",
  },
  {
    title: "Manage Patients",
    description:
      "Add, track, and monitor patient data with an intuitive interface.",
  },
  {
    title: "Analyze & Improve",
    description:
      "Use analytics to make better decisions and improve outcomes.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-20 px-6 bg-surface border-y border-border">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-text">
          How it works
        </h2>
        <p className="text-muted mt-2">
          Get started in just a few simple steps
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="text-center p-6 rounded-lg border border-border bg-background hover:shadow-md transition-all hover:-translate-y-1 transition-all"
          >
            {/* Step Number */}
            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
              {index + 1}
            </div>

            <h3 className="font-semibold text-text mb-2">
              {step.title}
            </h3>

            <p className="text-sm text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};