import * as React from "react";
import { cn } from "../../utils/cn";
import type { ButtonBaseProps } from "./Button.types";
import styles from "./Button.module.css";

export type { ButtonVariant, ButtonIntent, ButtonSize } from "./Button.types";

type ButtonAsButton = ButtonBaseProps & {
  /**
   * Render as a `<button>` element. Default.
   */
  as?: "button";
  /**
   * If true, the button will show a loading spinner.
   */
  loading?: boolean;
  // Explicitly forbid anchor-only props in button mode. TypeScript skips
  // excess-property checks on intersections, so without these `?: never`s
  // an `href` would silently be accepted and dropped at render.
  href?: never;
  target?: never;
  rel?: never;
  download?: never;
  hrefLang?: never;
} & Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonBaseProps | "as"
  >;

type ButtonAsAnchor = ButtonBaseProps & {
  /**
   * Render as an `<a>` element styled like a button. Requires `href`.
   */
  as: "a";
  /**
   * The URL the link points to.
   */
  href: string;
} & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof ButtonBaseProps | "as"
  >;

/**
 * Discriminated union — pass `as="a"` (with `href`) to render an anchor;
 * omit `as` (or pass `as="button"`) to render a `<button>`.
 *
 * Anchor mode disallows `loading` / `disabled`; button mode disallows `href`
 * and anchor-only attributes like `target` / `rel`.
 */
export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Distributive `Omit` over a union — applies `Omit` to each arm separately so
 * the discriminant survives. Use this (instead of the built-in `Omit`) when
 * subsetting `ButtonProps`, otherwise the union collapses and TypeScript can
 * no longer tell `<button>` calls from `<a>` calls.
 */
export type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never;

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (props, ref) => {
    // Bridge the wider `HTMLElement` ref into the element-specific `ref` slots
    // on `<a>` / `<button>` without needing a cast at each call site.
    const setRef = (node: HTMLElement | null) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    // Narrow on `props.as` *before* destructuring — destructuring a discriminated
    // union collapses `...rest` into the union of leftovers, which loses the
    // anchor-vs-button distinction and forces casts. Branching first preserves it.
    if (props.as === "a") {
      const {
        as: _as,
        className,
        variant = "filled",
        intent = "primary",
        size = "large",
        fullWidth,
        children,
        target,
        rel,
        ...anchorRest
      } = props;

      // When opening in a new tab, default to a safe `rel` unless the caller
      // explicitly supplied one — prevents tabnabbing and referrer leakage.
      const safeRel =
        target === "_blank" && rel === undefined ? "noopener noreferrer" : rel;
      return (
        <a
          {...anchorRest}
          ref={setRef}
          target={target}
          rel={safeRel}
          data-codex-component="button"
          data-variant={variant}
          data-intent={intent}
          data-size={size}
          className={cn(
            styles.button,
            styles[variant],
            styles[intent],
            styles[size],
            fullWidth && styles.fullWidth,
            className,
          )}
        >
          {children}
        </a>
      );
    }

    const {
      as: _as,
      className,
      variant = "filled",
      intent = "primary",
      size = "large",
      fullWidth,
      children,
      loading,
      disabled,
      ...buttonRest
    } = props;

    return (
      <button
        {...buttonRest}
        ref={setRef}
        data-codex-component="button"
        data-variant={variant}
        data-intent={intent}
        data-size={size}
        className={cn(
          styles.button,
          styles[variant],
          styles[intent],
          styles[size],
          fullWidth && styles.fullWidth,
          className,
        )}
        disabled={disabled || loading}
        aria-busy={loading}
      >
        {loading && (
          <svg
            className={styles.spinner}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className={styles.spinnerCircle}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className={styles.spinnerPath}
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
