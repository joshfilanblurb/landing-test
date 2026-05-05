import * as React from "react";
import { cn } from "@/utils/cn";
import { FormError } from "../FormError/FormError";
import styles from "./Input.module.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  hint?: string;
  error?: React.ReactNode;
}

export function Input({
  className,
  label,
  iconLeft,
  iconRight,
  hint,
  error,
  id,
  ...inputProps
}: InputProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn(styles.container, className)}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.wrapper}>
        {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
        <input id={inputId} {...inputProps} />
        {iconRight && <span className={styles.icon}>{iconRight}</span>}
      </div>
      {hint && <div className={styles.hint}>{hint}</div>}
      {error && <FormError>{error}</FormError>}
    </div>
  );
}

Input.displayName = "Input";
