import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["large", "small"],
    },
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Docs: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: "flex", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["!dev", "!autodocs"],
  args: {
    type: "info",
    size: "small",
    children: "Notification Title",
  },
};

// Size Variants
export const Small: Story = {
  args: {
    type: "info",
    size: "small",
    children: "Notification Title",
  },
};

export const Large: Story = {
  args: {
    type: "info",
    size: "large",
    children: (
      <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
        <strong>Notification</strong>
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit amet
          diam neque bibendum. Quisque in praesent sit erat erat..
        </p>
      </div>
    ),
  },
};

// Type Variants
export const Info: Story = {
  args: {
    type: "info",
    size: "large",
    children: (
      <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
        <strong>Notification</strong>
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit amet
          diam neque bibendum. Quisque in praesent sit erat erat..
        </p>
      </div>
    ),
  },
};

export const Success: Story = {
  args: {
    type: "success",
    size: "large",
    children: (
      <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
        <strong>Notification</strong>
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit amet
          diam neque bibendum. Quisque in praesent sit erat erat..
        </p>
      </div>
    ),
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    size: "large",
    children: (
      <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
        <strong>Notification</strong>
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit amet
          diam neque bibendum. Quisque in praesent sit erat erat..
        </p>
      </div>
    ),
  },
};

export const Error: Story = {
  args: {
    type: "error",
    size: "large",
    children: (
      <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
        <strong>Notification</strong>
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit amet
          diam neque bibendum. Quisque in praesent sit erat erat..
        </p>
      </div>
    ),
  },
};

// Combined Overview Story
export const AllVariants = {
  parameters: {
    controls: {
      include: ["gap"],
    },
  },
  args: {
    gap: "24px",
  },
  argTypes: {
    gap: {
      control: "text",
    },
  },
  render: (args: { gap: string }) => {
    const largeContent = (
      <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
        <strong>Notification</strong>
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit amet
          diam neque bibendum. Quisque in praesent sit erat erat..
        </p>
      </div>
    );

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: args.gap,
        }}
      >
        <span>Alert L</span>
        <Alert type="info" size="large">
          {largeContent}
        </Alert>
        <Alert type="success" size="large">
          {largeContent}
        </Alert>
        <Alert type="warning" size="large">
          {largeContent}
        </Alert>
        <Alert type="error" size="large">
          {largeContent}
        </Alert>

        <span>Alert S</span>
        <Alert type="info" size="small">
          Notification Title
        </Alert>
        <Alert type="success" size="small">
          Notification Title
        </Alert>
        <Alert type="warning" size="small">
          Notification Title
        </Alert>
        <Alert type="error" size="small">
          Notification Title
        </Alert>
      </div>
    );
  },
};
