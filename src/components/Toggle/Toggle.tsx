import React from "react";
import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { cn } from "../..";
import styles from "./Toggle.module.css";

export interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Whether the toggle is pressed (on) or not (off).
   */
  pressed?: boolean;
  /**
   * Callback fired when the pressed state changes.
   */
  onPressedChange?: (pressed: boolean) => void;
}
export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, disabled, pressed, onPressedChange, ...props }, ref) => {
    const toggleButton = (
      <BaseToggle
        ref={ref}
        disabled={disabled}
        pressed={pressed}
        onPressedChange={onPressedChange}
        render={(buttonProps, state) => {
          return (
            <button
              {...buttonProps}
              {...props}
              type="button"
              data-codex-component="toggle"
              data-pressed={state.pressed}
              className={cn(styles.toggle, className)}
            >
              <ToggleIcon pressed={state.pressed} />
            </button>
          );
        }}
      />
    );

    return toggleButton;
  },
);
Toggle.displayName = "Toggle";
interface ToggleIconProps {
  pressed: boolean;
}

const ToggleIcon = ({ pressed }: ToggleIconProps) => {
  const circleCx = pressed ? 13 : 3;
  return (
    <svg
      className={styles.toggleSvg}
      width="24"
      height="24"
      viewBox="-4 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        className={styles.toggleRect}
        x="-4"
        y="5"
        width="24"
        height="14"
        rx="7"
      />
      <circle className={styles.focusRingGray} cx={circleCx} cy="12" r="6.5" />
      <circle className={styles.focusRingBlue} cx={circleCx} cy="12" r="8" />
      <circle className={styles.toggleCircle} cx={circleCx} cy="12" r="5" />
    </svg>
  );
};
