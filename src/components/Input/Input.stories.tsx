import { Form } from "@base-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Input } from "./Input";

// Icon components for demo purposes
const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
  </svg>
);

const ClearIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </svg>
);

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "text",
    },
    iconLeft: {
      control: "boolean",
      description: "Show search icon on the left",
      table: {
        category: "Icons",
      },
    },
    iconRight: {
      control: "boolean",
      description: "Show clear icon on the right",
      table: {
        category: "Icons",
      },
    },
  },
  render: ({ iconLeft, iconRight, ...args }) => (
    <Input
      {...args}
      iconLeft={iconLeft ? SearchIcon : undefined}
      iconRight={iconRight ? ClearIcon : undefined}
    />
  ),
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Input Label",
    placeholder: "Enter text...",
    hint: "Hint text...",
  },
};

export const Password: Story = {
  args: {
    iconLeft: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Search with clear button..",
    disabled: true,
    iconLeft: true,
    iconRight: true,
  },
};

export const Error: Story = {
  render: () => {
    return (
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={() => {}}
        errors={{
          customValidation:
            "This error is controlled using BaseUI Form's errors object.",
        }}
      >
        <Input
          name="required"
          label="Error"
          placeholder="Required field"
          required
        />
        <Input name="customValidation" label="Custom Validation" />
        <Input
          name="controlledError"
          label="Controlled Error"
          error={
            <>
              Error controlled via error prop.
              <br />
              <br />
              Uses custom rendering.
            </>
          }
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  },
};

export const Search: Story = {
  args: {
    placeholder: "Search..",
    iconLeft: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path d="M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </svg>
    ),
  },
};
