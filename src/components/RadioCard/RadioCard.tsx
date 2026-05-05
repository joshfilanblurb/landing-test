import * as React from "react";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import { cn } from "@/utils/cn";
import styles from "./RadioCard.module.css";

export interface RadioCardGroupProps
  extends React.ComponentProps<typeof RadioGroup> {
  children: React.ReactNode;
}

/**
 * RadioCardGroup - Container for RadioCard items.
 * Provides shared state for radio selection.
 */
export const RadioCardGroup = ({ children, ...props }: RadioCardGroupProps) => {
  return <RadioGroup {...props}>{children}</RadioGroup>;
};

RadioCardGroup.displayName = "RadioCardGroup";

export interface RadioCardProps
  extends Omit<React.ComponentProps<typeof Radio.Root>, "render"> {
  children: React.ReactNode;
  className?: string;
}

/**
 * RadioCard - A card-styled radio button that accepts arbitrary content.
 */
export const RadioCard = React.forwardRef<HTMLButtonElement, RadioCardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Radio.Root
        ref={ref}
        data-codex-component="radio-card"
        className={cn(styles.card, className)}
        {...props}
      >
        {children}
      </Radio.Root>
    );
  },
);

RadioCard.displayName = "RadioCard";
