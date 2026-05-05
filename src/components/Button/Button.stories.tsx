import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["button", "a"],
    },
    href: {
      control: "text",
    },
    target: {
      control: "select",
      options: [undefined, "_blank", "_self"],
    },
    variant: {
      control: "select",
      options: ["filled", "outlined", "text"],
    },
    intent: {
      control: "select",
      options: ["primary", "neutral", "danger"],
    },
    size: {
      control: "select",
      options: ["small", "large"],
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Filled variant
export const FilledPrimary: Story = {
  args: {
    variant: "filled",
    intent: "primary",
    children: "Primary Button",
  },
};

export const FilledNeutral: Story = {
  args: {
    variant: "filled",
    intent: "neutral",
    children: "Neutral Button",
  },
};

export const FilledDanger: Story = {
  args: {
    variant: "filled",
    intent: "danger",
    children: "Danger Button",
  },
};

// Outlined variant
export const OutlinedPrimary: Story = {
  args: {
    variant: "outlined",
    intent: "primary",
    children: "Primary Button",
  },
};

export const OutlinedNeutral: Story = {
  args: {
    variant: "outlined",
    intent: "neutral",
    children: "Neutral Button",
  },
};

export const OutlinedDanger: Story = {
  args: {
    variant: "outlined",
    intent: "danger",
    children: "Danger Button",
  },
};

// Text variant
export const TextPrimary: Story = {
  args: {
    variant: "text",
    intent: "primary",
    children: "Primary Button",
  },
};

export const TextNeutral: Story = {
  args: {
    variant: "text",
    intent: "neutral",
    children: "Neutral Button",
  },
};

export const TextDanger: Story = {
  args: {
    variant: "text",
    intent: "danger",
    children: "Danger Button",
  },
};

// State variants
export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
  parameters: {
    layout: "padded",
  },
};

// Size variants
export const SmallButton: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const LargeButton: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};

// Anchor mode (`as="a"`) — same visuals, renders an <a> with href
export const AsAnchor: Story = {
  args: {
    as: "a",
    href: "#",
    children: "Link Button",
  },
};

export const AsAnchorExternal: Story = {
  args: {
    as: "a",
    href: "https://example.com",
    target: "_blank",
    children: "External Link (opens in new tab)",
  },
};

export const AsAnchorFullWidth: Story = {
  args: {
    as: "a",
    href: "#",
    fullWidth: true,
    children: "Full Width Link Button",
  },
  parameters: {
    layout: "padded",
  },
};

// All variants stacked
export const AllVariants = {
  parameters: {
    controls: {
      include: ["gap"],
    },
  },
  args: {
    gap: "8px",
  },
  argTypes: {
    gap: {
      control: "text",
    },
  },
  render: (args: { gap: string }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: args.gap,
        width: "360px",
      }}
    >
      <Button variant="filled" intent="primary">
        Filled Button
      </Button>
      <Button variant="outlined" intent="primary">
        Outlined Button
      </Button>
      <Button variant="text" intent="primary">
        Text Button
      </Button>
    </div>
  ),
};
