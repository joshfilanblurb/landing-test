import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Chip } from "./Chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["small", "large"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Chip>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Docs: Story = {
  tags: ["!dev", "!autodocs"],
  args: {
    label: "Chip label",
    size: "small",
    onDelete: fn(),
  },
};

// Size Variants
export const Small: Story = {
  args: {
    label: "Chip label",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Chip label",
    size: "large",
  },
};

// With Delete Button
export const SmallWithDeleteButton: Story = {
  args: {
    label: "Chip label",
    size: "small",
    onDelete: fn(),
  },
};

export const LargeWithDeleteButton: Story = {
  args: {
    label: "Chip label",
    size: "large",
    onDelete: fn(),
  },
};

export const WithCustomLabel: Story = {
  args: {
    label: (
      <>
        Label:{" "}
        <span style={{ fontWeight: "var(--codex-font-weight-normal)" }}>
          label value
        </span>
      </>
    ),
    size: "small",
    onDelete: fn(),
  },
};
