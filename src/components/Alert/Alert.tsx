import React, { ReactNode } from "react";
import styles from "./Alert.module.css";

type AlertType = "info" | "success" | "warning" | "error";
type AlertSize = "large" | "small";

export interface AlertProps {
  /**
   * The content of the alert
   */
  children: ReactNode;

  /**
   * The type of the alert, determining the background color
   */
  type: AlertType;

  /**
   * The size of the alert
   */
  size: AlertSize;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ type, size, children }, ref) => {
    return (
      <div
        className={styles.alert}
        data-type={type}
        data-size={size}
        data-codex-component="alert"
        role="alert"
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

Alert.displayName = "Alert";
