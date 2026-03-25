import React from "react";
import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={clsx(
        "bg-surface border border-border rounded-lg shadow-sm p-4 transition-all hover:shadow-md hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-2 font-semibold text-text">{children}</div>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm text-muted">{children}</div>
);