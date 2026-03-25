"use client";

import clsx from "clsx";

type ViewMode = "grid" | "list";

interface ViewToggleProps {
  view: ViewMode;
  onChange: (view: ViewMode) => void;
}

export const ViewToggle = ({ view, onChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center bg-surface border border-border rounded-md p-1 w-fit">
      
      <button
        onClick={() => onChange("grid")}
        className={clsx(
          "px-3 py-1 text-sm rounded-md transition",
          view === "grid"
            ? "bg-primary text-white"
            : "text-muted hover:text-text"
        )}
      >
        Grid
      </button>

      <button
        onClick={() => onChange("list")}
        className={clsx(
          "px-3 py-1 text-sm rounded-md transition",
          view === "list"
            ? "bg-primary text-white"
            : "text-muted hover:text-text"
        )}
      >
        List
      </button>

    </div>
  );
};