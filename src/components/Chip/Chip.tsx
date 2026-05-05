import React, { ReactNode } from "react";
import { cn } from "@/utils";
import styles from "./Chip.module.css";

const CloseIcon = () => (
  <svg
    aria-hidden="true"
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.38333 5.31667L1.11667 8.58333C0.994444 8.70555 0.838889 8.76667 0.65 8.76667C0.461111 8.76667 0.305555 8.70555 0.183333 8.58333C0.0611109 8.46111 0 8.30556 0 8.11667C0 7.92778 0.0611109 7.77222 0.183333 7.65L3.45 4.38333L0.183333 1.11667C0.0611109 0.994444 0 0.838889 0 0.65C0 0.461111 0.0611109 0.305555 0.183333 0.183333C0.305555 0.0611109 0.461111 0 0.65 0C0.838889 0 0.994444 0.0611109 1.11667 0.183333L4.38333 3.45L7.65 0.183333C7.77222 0.0611109 7.92778 0 8.11667 0C8.30556 0 8.46111 0.0611109 8.58333 0.183333C8.70555 0.305555 8.76667 0.461111 8.76667 0.65C8.76667 0.838889 8.70555 0.994444 8.58333 1.11667L5.31667 4.38333L8.58333 7.65C8.70555 7.77222 8.76667 7.92778 8.76667 8.11667C8.76667 8.30556 8.70555 8.46111 8.58333 8.58333C8.46111 8.70555 8.30556 8.76667 8.11667 8.76667C7.92778 8.76667 7.77222 8.70555 7.65 8.58333L4.38333 5.31667Z" />
  </svg>
);

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The label displayed in the chip
   * Prefer to use a string, or an inline-displayed element if you require custom styling of the label
   */
  label: ReactNode;

  /**
   * The size of the chip
   */
  size?: "small" | "large";

  /**
   * Click handler for deleting the chip (triggered by icon button click or Backspace/Delete keys)
   */
  onDelete?: () => void;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, label, size = "small", onDelete, ...props }, ref) => {
    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!onDelete) return;

        if (e.key === "Backspace" || e.key === "Delete") {
          e.preventDefault();
          onDelete();
        }
      },
      [onDelete],
    );

    return (
      <div
        className={cn(styles.chip, className)}
        data-size={size}
        data-has-icon={!!onDelete}
        data-codex-component="chip"
        ref={ref}
        onKeyDown={handleKeyDown}
        tabIndex={onDelete ? 0 : -1}
        {...props}
      >
        <span className={styles.label}>{label}</span>
        {onDelete && (
          <span className={styles.positioner}>
            <button
              tabIndex={-1}
              className={styles.icon}
              onClick={onDelete}
              type="button"
            >
              <CloseIcon />
            </button>
          </span>
        )}
      </div>
    );
  },
);

Chip.displayName = "Chip";
