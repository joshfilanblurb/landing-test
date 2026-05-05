import * as React from "react";
import { cn } from "@/utils/cn";
import styles from "./Radio.module.css";

interface RadioGroupContextValue {
  name: string;
  value: string | null;
  setValue: (value: string) => void;
  disabled: boolean;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(
  null,
);

export interface RadioGroupProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange" | "defaultValue"
  > {
  /**
   * Shared name for the underlying radio inputs. Auto-generated if omitted.
   */
  name?: string;
  /**
   * Controlled selected value. Pass `null` to represent no selection.
   */
  value?: string | null;
  /**
   * Initial selected value when uncontrolled.
   */
  defaultValue?: string;
  /**
   * Fired when the user selects a radio.
   */
  onValueChange?: (value: string) => void;
  /**
   * Disables every Radio inside the group.
   */
  disabled?: boolean;
  children: React.ReactNode;
}

/**
 * RadioGroup - Container for Radio items. Provides shared state and name.
 */
export const RadioGroup = ({
  name,
  value: controlledValue,
  defaultValue,
  onValueChange,
  disabled = false,
  children,
  className,
  ...rest
}: RadioGroupProps) => {
  const generatedName = React.useId();
  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    defaultValue,
  );
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const setValue = React.useCallback(
    (next: string) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const context = React.useMemo<RadioGroupContextValue>(
    () => ({
      name: name ?? generatedName,
      value: value ?? null,
      setValue,
      disabled,
    }),
    [name, generatedName, value, setValue, disabled],
  );

  return (
    <RadioGroupContext.Provider value={context}>
      <div role="radiogroup" className={className} {...rest}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.displayName = "RadioGroup";

export interface RadioProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "size" | "value"
  > {
  /**
   * Value identifying this radio within its group.
   */
  value: string;
  /**
   * Optional label text rendered next to the radio.
   */
  label?: React.ReactNode;
}

/**
 * Radio - A single radio button, optionally with a label.
 * Typically used inside a RadioGroup; can also be used standalone
 * by passing name/checked/onChange directly.
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      value,
      label,
      className,
      disabled,
      name,
      checked,
      onChange,
      ...inputProps
    },
    ref,
  ) => {
    const group = React.useContext(RadioGroupContext);

    const resolvedName = name ?? group?.name;
    const resolvedDisabled = disabled || group?.disabled || false;
    const resolvedChecked = group ? group.value === value : checked;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (group && event.target.checked) {
        group.setValue(value);
      }
      onChange?.(event);
    };

    return (
      <label className={cn(styles.item, className)}>
        <input
          ref={ref}
          type="radio"
          value={value}
          name={resolvedName}
          disabled={resolvedDisabled}
          checked={resolvedChecked}
          onChange={handleChange}
          className={styles.input}
          data-codex-component="radio"
          {...inputProps}
        />
        <span className={styles.radio} aria-hidden="true" />
        {label !== undefined && (
          <span
            className={styles.label}
            data-label={typeof label === "string" ? label : undefined}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);

Radio.displayName = "Radio";
