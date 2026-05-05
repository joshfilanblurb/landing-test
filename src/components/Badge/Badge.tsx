import React, { ReactNode } from "react";
import styles from "./Badge.module.css";

export interface BadgeProps {
  /**
   * The style variant of the badge
   */
  variant?: "round" | "square";

  /**
   * The size of the badge
   */
  size?: "small" | "large";

  /**
   * The color variant of the badge
   */
  color?: "blue" | "purple" | "green" | "orange" | "red" | "white" | "gray";

  /**
   * The text label displayed in the badge
   */
  label: string;

  /**
   * Whether to display a border around the badge
   */
  border?: boolean;

  /**
   * Optional icon to display before the label
   */
  icon?: ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = "round",
      size = "small",
      color = "blue",
      label,
      border = false,
      icon,
    },
    ref,
  ) => {
    return (
      <div
        className={styles.badge}
        data-variant={variant}
        data-size={size}
        data-color={color}
        data-border={border}
        data-has-icon={!!icon}
        data-codex-component="badge"
        ref={ref}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{label}</span>
      </div>
    );
  },
);

Badge.displayName = "Badge";
