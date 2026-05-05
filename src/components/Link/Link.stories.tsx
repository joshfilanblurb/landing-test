import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    href: "#",
  },
  argTypes: {
    href: {
      control: "text",
    },
    target: {
      control: "select",
      options: [undefined, "_blank", "_self"],
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Link",
  },
};

export const ExternalLink: Story = {
  args: {
    href: "https://www.blurb.com",
    target: "_blank",
    children: "External Link (opens in new tab)",
  },
};

export const InlineUsage: Story = {
  args: {
    children: "inline link",
  },
  render: (args) => (
    <p style={{ fontSize: "16px", color: "#333" }}>
      This is a paragraph with an <Link {...args} href="#" /> inside of it.
    </p>
  ),
};
