import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio, RadioGroup } from "./Radio";

const meta = {
  title: "Components/Radio",
  component: RadioGroup,
  subcomponents: { Radio },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description:
        "Shared name for the underlying radio inputs. Auto-generated if omitted.",
    },
    defaultValue: {
      control: "text",
      description: "Initial selected value when uncontrolled.",
    },
    value: {
      control: "text",
      description: "Controlled selected value.",
    },
    disabled: {
      control: "boolean",
      description: "Disables every Radio inside the group.",
    },
    "aria-label": {
      control: "text",
      description:
        "Accessible name for the radiogroup. Required if no aria-labelledby is provided.",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Fired when the selected value changes.",
    },
  },
  args: {
    disabled: false,
    "aria-label": "Select an option",
    children: null,
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    defaultValue: "option1",
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </div>
    </RadioGroup>
  ),
};

export const WithoutLabel: Story = {
  args: {
    defaultValue: "a",
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div style={{ display: "flex", gap: 12 }}>
        <Radio value="a" aria-label="A" />
        <Radio value="b" aria-label="B" />
        <Radio value="c" aria-label="C" />
      </div>
    </RadioGroup>
  ),
};

export const WithDisabled: Story = {
  args: {
    defaultValue: "enabled1",
    "aria-label": "Options with disabled",
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Radio value="enabled1" label="Enabled" />
        <Radio value="disabled-deselected" label="Disabled" disabled />
        <Radio value="enabled2" label="Also enabled" />
      </div>
    </RadioGroup>
  ),
};

export const States: Story = {
  parameters: {
    controls: { include: [] },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <RadioGroup defaultValue="selected" aria-label="Enabled states">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Radio value="deselected" label="Deselected" />
          <Radio value="selected" label="Selected" />
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="selected-disabled" aria-label="Disabled states">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Radio
            value="deselected-disabled"
            label="Deselected, disabled"
            disabled
          />
          <Radio
            value="selected-disabled"
            label="Selected, disabled"
            disabled
          />
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Horizontal: Story = {
  args: {
    defaultValue: "s",
    "aria-label": "Size",
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div style={{ display: "flex", gap: 24 }}>
        <Radio value="s" label="Small" />
        <Radio value="m" label="Medium" />
        <Radio value="l" label="Large" />
      </div>
    </RadioGroup>
  ),
};
