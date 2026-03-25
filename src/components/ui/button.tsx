import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center font-medium transition-all rounded-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-[rgb(var(--color-primary-hover))]",
  secondary:
    "bg-surface border border-border text-text hover:bg-gray-50",
  outline:
    "border border-border text-text hover:bg-gray-100",
  danger:
    "bg-danger text-white hover:bg-red-600",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Button = ({
  variant = "primary",
  size = "md",
  loading,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};