import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Modal, ModalContent, ModalDescription, ModalTrigger } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: ModalContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Modal title",
    },
    size: {
      control: "radio",
      options: ["small", "large"],
      description: "Modal size",
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof ModalContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Basic Modal",
    size: "large",
    children: null,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <Modal open={open} onOpenChange={setOpen}>
        <ModalTrigger render={<Button>Open Modal</Button>} />
        <ModalContent title={args.title} size={args.size}>
          <ModalDescription>
            This is a basic modal dialog. Click the close button or outside the
            modal to close it.
          </ModalDescription>
        </ModalContent>
      </Modal>
    );
  },
};
