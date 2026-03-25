"use client";

import React, { useState } from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = ({
  label,
  error,
  helperText,
  type,
  className,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full space-y-1">
      {label && (
        <label className="text-sm font-medium text-text">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          className={clsx(
            "w-full h-10 px-3 rounded-md border bg-surface text-text pr-10",
            "focus:outline-none focus:ring-2 focus:ring-primary/40",
            "placeholder:text-muted",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-danger focus:ring-danger/40",
            className
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-muted hover:text-text"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error ? (
        <p className="text-sm text-danger">{error}</p>
      ) : helperText ? (
        <p className="text-sm text-muted">{helperText}</p>
      ) : null}
    </div>
  );
};