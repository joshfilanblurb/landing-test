import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "./Toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    "aria-label": {
      control: "text",
      description: "Accessible label for the toggle button",
    },
  },
} satisfies Meta<typeof Toggle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "Toggle notifications",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    "aria-label": "Toggle notifications",
    disabled: true,
  },
};

// Example: Binary toggle (ON/OFF)
export const BinaryToggle: Story = {
  args: {
    "aria-label": "Enable dark mode",
    disabled: false,
  },
};

// Example: Value toggle (A/B) - consumer handles state description
export const ValueToggle: Story = {
  render: () => {
    const [isProduction, setIsProduction] = React.useState(false);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span>Sandbox</span>
        <Toggle
          aria-label={`Currently in ${isProduction ? "production" : "sandbox"} mode. Toggle to switch to ${isProduction ? "sandbox" : "production"}.`}
          pressed={isProduction}
          onPressedChange={setIsProduction}
        />
        <span>Production</span>
      </div>
    );
  },
};
