import type { ReactNode } from "react";

export type ButtonVariant = "filled" | "outlined" | "text";
export type ButtonIntent = "primary" | "neutral" | "danger";
export type ButtonSize = "small" | "large";

/**
 * Visual props shared by Button's `<button>` and `<a>` modes.
 */
export interface ButtonBaseProps {
  /**
   * The visual variant of the button
   */
  variant?: ButtonVariant;
  /**
   * The intent/purpose of the button, which determines its color
   */
  intent?: ButtonIntent;
  /**
   * The size of the button
   */
  size?: ButtonSize;
  /**
   * If true, the button will take up the full width of its container
   */
  fullWidth?: boolean;
  /**
   * The content of the button
   */
  children: ReactNode;
}
