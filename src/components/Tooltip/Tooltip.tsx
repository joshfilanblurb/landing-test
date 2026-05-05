import * as React from "react";
import type { ReactNode } from "react";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import styles from "./Tooltip.module.css";

type TooltipSide = "top" | "bottom" | "left" | "right";
type TooltipAlign = "start" | "center" | "end";
type TooltipSize = "large" | "small";

const SIDE_OFFSET = {
  large: 12,
  small: 6,
} as const;

const TooltipArrow = ({ size }: { size: TooltipSize }) => (
  <BaseTooltip.Arrow className={styles.arrow} data-size={size}>
    {size === "large" ? (
      <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
        <path
          d="M16 10.3945H0L6.3359 0.890606C7.12754 -0.296861 8.87246 -0.296861 9.6641 0.890605L16 10.3945Z"
          fill="currentColor"
        />
      </svg>
    ) : (
      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
        <path d="M8 6H0L4 0L8 6Z" fill="currentColor" />
      </svg>
    )}
  </BaseTooltip.Arrow>
);

export interface TooltipProps {
  /**
   * The content to display in the tooltip
   */
  content: ReactNode;
  /**
   * The element that triggers the tooltip
   */
  children: React.ReactElement;
  /**
   * Which side of the trigger to position the tooltip
   * @default "top"
   */
  side?: TooltipSide;
  /**
   * Alignment of the tooltip relative to the trigger
   * @default "center"
   */
  align?: TooltipAlign;
  /**
   * Delay in milliseconds before showing the tooltip
   * @default 300
   */
  delayDuration?: number;
  /**
   * Delay in milliseconds before hiding the tooltip
   * @default 0
   */
  closeDelayDuration?: number;
  /**
   * Whether the tooltip is open (controlled mode)
   */
  open?: boolean;
  /**
   * Callback when the open state changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Whether the tooltip is initially open (uncontrolled mode)
   */
  defaultOpen?: boolean;
  /**
   * Size variant of the tooltip
   * @default "large"
   */
  size?: TooltipSize;
}

/**
 * Simple Tooltip wrapper component
 */
export const Tooltip = ({
  content,
  children,
  side = "top",
  align = "center",
  delayDuration = 300,
  closeDelayDuration = 0,
  open,
  onOpenChange,
  defaultOpen,
  size = "large",
}: TooltipProps) => {
  return (
    <BaseTooltip.Root
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
    >
      <BaseTooltip.Trigger
        delay={delayDuration}
        closeDelay={closeDelayDuration}
        render={children}
      />
      <BaseTooltip.Portal>
        <BaseTooltip.Positioner
          side={side}
          align={align}
          sideOffset={SIDE_OFFSET[size]}
          className={styles.positioner}
        >
          <BaseTooltip.Popup
            data-codex-component="tooltip"
            data-size={size}
            className={styles.popup}
          >
            {content}
            <TooltipArrow size={size} />
          </BaseTooltip.Popup>
        </BaseTooltip.Positioner>
      </BaseTooltip.Portal>
    </BaseTooltip.Root>
  );
};

Tooltip.displayName = "Tooltip";

export interface TooltipRootProps
  extends React.ComponentProps<typeof BaseTooltip.Root> {
  children: ReactNode;
}

/**
 * TooltipRoot - Container for compound component API
 */
export const TooltipRoot = ({ children, ...props }: TooltipRootProps) => {
  return <BaseTooltip.Root {...props}>{children}</BaseTooltip.Root>;
};

TooltipRoot.displayName = "TooltipRoot";

/**
 * TooltipTrigger - Wraps the trigger element
 */
export const TooltipTrigger = BaseTooltip.Trigger;

export interface TooltipContentProps {
  /**
   * Which side of the trigger to position the tooltip
   * @default "top"
   */
  side?: TooltipSide;
  /**
   * Alignment of the tooltip relative to the trigger
   * @default "center"
   */
  align?: TooltipAlign;
  /**
   * Size variant of the tooltip
   * @default "large"
   */
  size?: TooltipSize;
  /**
   * The tooltip content
   */
  children: ReactNode;
}

/**
 * TooltipContent - The tooltip popup with positioning
 */
export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  TooltipContentProps
>(({ side = "top", align = "center", size = "large", children }, ref) => {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner
        side={side}
        align={align}
        sideOffset={SIDE_OFFSET[size]}
        className={styles.positioner}
      >
        <BaseTooltip.Popup
          ref={ref}
          data-codex-component="tooltip"
          data-size={size}
          className={styles.popup}
        >
          {children}
          <TooltipArrow size={size} />
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
});

TooltipContent.displayName = "TooltipContent";

/**
 * TooltipProvider - Share delay behavior across multiple tooltips
 */
export const TooltipProvider = BaseTooltip.Provider;
TooltipProvider.displayName = "TooltipProvider";
