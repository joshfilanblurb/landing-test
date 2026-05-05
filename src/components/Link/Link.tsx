import * as React from "react";
import { cn } from "@/utils/cn";
import styles from "./Link.module.css";

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  /** The content of the link */
  children: React.ReactNode;
}

/**
 * An inline text link (`<a>`) with no padding or button chrome.
 *
 * Use `Link` for inline or standalone text links.
 * Use `Button` with `as="a"` and an `href` when you need a link that looks like a button.
 *
 * When `target="_blank"` is set, `rel="noopener noreferrer"` is applied
 * automatically unless an explicit `rel` is provided.
 */

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, target, rel, children, ...props }, ref) => {
    const safeRel =
      target === "_blank" && rel === undefined ? "noopener noreferrer" : rel;

    return (
      <a
        {...props}
        ref={ref}
        target={target}
        rel={safeRel}
        data-codex-component="link"
        className={cn(styles.link, className)}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = "Link";
