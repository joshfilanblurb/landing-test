import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

// Example icon component
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.66662 14.6667C8.25551 14.6667 7.85284 14.6249 7.45862 14.5413C7.06395 14.4582 6.67773 14.3389 6.29995 14.1833C6.06662 14.0833 5.93617 13.9167 5.90862 13.6833C5.88062 13.45 5.96106 13.2389 6.14995 13.05C6.22773 12.9722 6.32773 12.9222 6.44995 12.9C6.57217 12.8778 6.68884 12.8944 6.79995 12.95C7.08884 13.0833 7.39151 13.1807 7.70795 13.242C8.02484 13.3029 8.3444 13.3333 8.66662 13.3333C9.96662 13.3333 11.0693 12.8804 11.9746 11.9747C12.8804 11.0693 13.3333 9.96666 13.3333 8.66666C13.3333 7.36666 12.8804 6.26377 11.9746 5.35799C11.0693 4.45266 9.96662 3.99999 8.66662 3.99999H8.56662L9.14995 4.58332C9.27217 4.70554 9.33328 4.8611 9.33328 5.04999C9.33328 5.23888 9.27217 5.39443 9.14995 5.51666C9.01662 5.64999 8.85551 5.71666 8.66662 5.71666C8.47773 5.71666 8.32217 5.64999 8.19995 5.51666L6.46662 3.79999C6.41106 3.73332 6.36662 3.6611 6.33328 3.58332C6.29995 3.50554 6.28328 3.42221 6.28328 3.33332C6.28328 3.24443 6.29995 3.15821 6.33328 3.07466C6.36662 2.99154 6.41106 2.92221 6.46662 2.86666L8.19995 1.13332C8.32217 1.0111 8.47773 0.949989 8.66662 0.949989C8.85551 0.949989 9.01662 1.0111 9.14995 1.13332C9.27217 1.26666 9.33328 1.42777 9.33328 1.61666C9.33328 1.80554 9.27217 1.9611 9.14995 2.08332L8.56662 2.66666H8.66662C9.49995 2.66666 10.2806 2.8251 11.0086 3.14199C11.7362 3.45843 12.3695 3.88599 12.9086 4.42466C13.4473 4.96377 13.8751 5.5971 14.192 6.32466C14.5084 7.05266 14.6666 7.83332 14.6666 8.66666C14.6666 10.3333 14.0833 11.75 12.9166 12.9167C11.75 14.0833 10.3333 14.6667 8.66662 14.6667ZM4.66662 12.3833C4.57773 12.3833 4.4944 12.3693 4.41662 12.3413C4.33884 12.3138 4.26662 12.2667 4.19995 12.2L1.13328 9.13332C1.06662 9.06666 1.01951 8.99443 0.991951 8.91666C0.963951 8.83888 0.949951 8.75555 0.949951 8.66666C0.949951 8.57777 0.963951 8.49443 0.991951 8.41666C1.01951 8.33888 1.06662 8.26666 1.13328 8.19999L4.19995 5.13332C4.26662 5.06666 4.33884 5.01954 4.41662 4.99199C4.4944 4.96399 4.57773 4.94999 4.66662 4.94999C4.75551 4.94999 4.83884 4.96399 4.91662 4.99199C4.9944 5.01954 5.06662 5.06666 5.13328 5.13332L8.19995 8.19999C8.26662 8.26666 8.31395 8.33888 8.34195 8.41666C8.36951 8.49443 8.38328 8.57777 8.38328 8.66666C8.38328 8.75555 8.36951 8.83888 8.34195 8.91666C8.31395 8.99443 8.26662 9.06666 8.19995 9.13332L5.13328 12.2C5.06662 12.2667 4.9944 12.3138 4.91662 12.3413C4.83884 12.3693 4.75551 12.3833 4.66662 12.3833ZM4.66662 10.7667L6.76662 8.66666L4.66662 6.56666L2.56662 8.66666L4.66662 10.7667Z" />
  </svg>
);

const SmallDot = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="8" cy="8" rx="4" ry="4" />
  </svg>
);

const BigDot = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="12" cy="12" rx="6" ry="6" />
  </svg>
);

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["round", "square"],
    },
    size: {
      control: "select",
      options: ["small", "large"],
    },
    color: {
      control: "select",
      options: ["blue", "purple", "green", "orange", "red", "white", "gray"],
    },
    label: {
      control: "text",
    },
    border: {
      control: "boolean",
    },
    icon: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Badge>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Docs: Story = {
  tags: ["!dev", "!autodocs"],
  args: {
    variant: "round",
    size: "small",
    color: "blue",
    label: "Badge label",
  },
};

// Size Variants
export const Small: Story = {
  args: {
    variant: "round",
    size: "small",
    color: "blue",
    label: "Badge label",
  },
};

export const Large: Story = {
  args: {
    variant: "round",
    size: "large",
    color: "blue",
    label: "Badge label",
  },
};

// Style Variants
export const Round: Story = {
  args: {
    variant: "round",
    size: "small",
    color: "blue",
    label: "Badge label",
  },
};

export const Square: Story = {
  args: {
    variant: "square",
    size: "small",
    color: "blue",
    label: "Badge label",
  },
};

// Color Variants
export const Colors: Story = {
  args: {
    variant: "round",
    size: "small",
    color: "blue",
    label: "Badge label",
  },
  render: (args) => {
    const colors: Array<
      "blue" | "purple" | "green" | "orange" | "red" | "white" | "gray"
    > = ["blue", "purple", "green", "orange", "red", "white", "gray"];

    return (
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {colors.map((color) => (
          <Badge key={color} {...args} color={color} />
        ))}
      </div>
    );
  },
};

// Border Variants
export const WithBorder: Story = {
  args: {
    variant: "round",
    size: "small",
    color: "blue",
    label: "Badge label",
    border: true,
  },
};

// Icon Variants
export const WithIcon: Story = {
  args: {
    variant: "round",
    size: "small",
    color: "green",
    label: "Badge label",
    icon: <SmallDot />,
  },
};

// Combined Overview Story
export const AllVariants = {
  parameters: {
    controls: {
      include: [],
    },
  },
  render: () => {
    const colors: Array<
      "blue" | "purple" | "green" | "orange" | "red" | "white" | "gray"
    > = ["blue", "purple", "green", "orange", "red", "white", "gray"];

    const renderMatrix = (variant: "round" | "square") => (
      <div style={{ marginBottom: "32px" }}>
        <h3 style={{ marginBottom: "16px" }}>
          Badge/{variant === "round" ? "Round" : "Square"}
        </h3>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "8px",
                  textAlign: "left",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Color
              </th>
              <th
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Large
              </th>
              <th
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Large with Borders
              </th>
              <th
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Small
              </th>
              <th
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Small with Borders
              </th>
            </tr>
          </thead>
          <tbody>
            {colors.map((color) => (
              <tr key={color}>
                <td
                  style={{
                    padding: "8px",
                    borderBottom: "1px solid #eee",
                    textTransform: "capitalize",
                  }}
                >
                  {color}
                </td>
                <td
                  style={{
                    padding: "8px",
                    textAlign: "center",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <Badge
                    variant={variant}
                    size="large"
                    color={color}
                    label="Badge label"
                    icon={<ArrowIcon />}
                  />
                </td>
                <td
                  style={{
                    padding: "8px",
                    textAlign: "center",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <Badge
                    variant={variant}
                    size="large"
                    color={color}
                    label="Badge label"
                    icon={<BigDot />}
                    border
                  />
                </td>
                <td
                  style={{
                    padding: "8px",
                    textAlign: "center",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <Badge
                    variant={variant}
                    size="small"
                    color={color}
                    label="Badge label"
                    icon={<ArrowIcon />}
                  />
                </td>
                <td
                  style={{
                    padding: "8px",
                    textAlign: "center",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <Badge
                    variant={variant}
                    size="small"
                    color={color}
                    label="Badge label"
                    icon={<SmallDot />}
                    border
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                No Icon
              </td>
              <td
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "1px solid #eee",
                }}
              >
                <Badge
                  variant={variant}
                  size="large"
                  color="blue"
                  label="Badge label"
                />
              </td>
              <td
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "1px solid #eee",
                }}
              >
                <Badge
                  variant={variant}
                  size="large"
                  color="blue"
                  label="Badge label"
                  border
                />
              </td>
              <td
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "1px solid #eee",
                }}
              >
                <Badge
                  variant={variant}
                  size="small"
                  color="blue"
                  label="Badge label"
                />
              </td>
              <td
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "1px solid #eee",
                }}
              >
                <Badge
                  variant={variant}
                  size="small"
                  color="blue"
                  label="Badge label"
                  border
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div>
        {renderMatrix("round")}
        {renderMatrix("square")}
      </div>
    );
  },
};
