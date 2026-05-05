import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { RadioCard, RadioCardGroup } from "../RadioCard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "The content to display in the tooltip",
    },
    side: {
      control: "radio",
      options: ["top", "bottom", "left", "right"],
      description: "Which side to position the tooltip",
    },
    align: {
      control: "radio",
      options: ["start", "center", "end"],
      description: "Alignment relative to the trigger",
    },
    delayDuration: {
      control: "number",
      description: "Delay before showing (ms)",
    },
    closeDelayDuration: {
      control: "number",
      description: "Delay before hiding (ms)",
    },
    size: {
      control: "radio",
      options: ["large", "small"],
      description: "Size variant of the tooltip",
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic tooltip with default positioning
 */
export const Basic: Story = {
  args: {
    content: "This is a helpful tooltip",
    side: "top",
    align: "center",
    delayDuration: 300,
    open: false,
    children: <Button>Hover me</Button>,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <Tooltip {...args} open={open} onOpenChange={setOpen} />;
  },
};

/**
 * Tooltip on each side
 */
export const Positions: Story = {
  args: {
    content: "",
    children: <></>,
  },
  render: () => (
    <div style={{ display: "flex", gap: "2rem", padding: "4rem" }}>
      <Tooltip content="Top tooltip" side="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

/**
 * Alignment variations
 */
export const Alignments: Story = {
  args: {
    content: "",
    children: <></>,
  },
  render: () => (
    <div style={{ display: "flex", gap: "2rem", padding: "4rem" }}>
      <Tooltip content="Aligned to start" side="bottom" align="start">
        <Button>Start</Button>
      </Tooltip>
      <Tooltip content="Aligned to center" side="bottom" align="center">
        <Button>Center</Button>
      </Tooltip>
      <Tooltip content="Aligned to end" side="bottom" align="end">
        <Button>End</Button>
      </Tooltip>
    </div>
  ),
};

/**
 * Custom delay values
 */
export const CustomDelay: Story = {
  args: {
    content: "This tooltip appears after 1 second",
    delayDuration: 1000,
    closeDelayDuration: 500,
    children: <Button>Slow tooltip</Button>,
  },
};

/**
 * Rich content in tooltip
 */
export const RichContent: Story = {
  args: {
    content: (
      <div>
        <strong>Pro tip:</strong>
        <br />
        You can include rich content in tooltips.
      </div>
    ),
    children: <Button>Rich content</Button>,
  },
};

/**
 * Disabled button with tooltip.
 * Note that you may need to wrap the trigger in a span if the disabled state blocks pointer/mouse events.
 */
export const DisabledTrigger: Story = {
  args: {
    content: "This action is currently unavailable",
    children: (
      <span style={{ display: "inline-block" }}>
        <Button disabled>Disabled</Button>
      </span>
    ),
  },
};

/**
 * Multiple tooltips with shared delay using TooltipProvider.
 * Hovering between buttons shows tooltips instantly without animations.
 * Note: Must use compound components (TooltipRoot) for TooltipProvider to work correctly.
 */
export const WithProvider: Story = {
  args: {
    content: "",
    children: <></>,
  },
  render: () => (
    <TooltipProvider delay={0} closeDelay={200}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <TooltipRoot>
          <TooltipTrigger render={<Button>Action 1</Button>} />
          <TooltipContent side="bottom">First action</TooltipContent>
        </TooltipRoot>
        <TooltipRoot>
          <TooltipTrigger render={<Button>Action 2</Button>} />
          <TooltipContent side="bottom">Second action</TooltipContent>
        </TooltipRoot>
        <TooltipRoot>
          <TooltipTrigger render={<Button>Action 3</Button>} />
          <TooltipContent side="bottom">Third action</TooltipContent>
        </TooltipRoot>
      </div>
    </TooltipProvider>
  ),
};

/**
 * Controlled tooltip state
 */
export const Controlled: Story = {
  args: {
    content: "",
    children: <Button>Hover</Button>,
  },
  render: ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Tooltip
          content="Controlled tooltip"
          open={open}
          onOpenChange={setOpen}
        >
          {children}
        </Tooltip>
        <Button variant="outlined" onClick={() => setOpen(!open)}>
          Toggle: {open ? "Open" : "Closed"}
        </Button>
      </div>
    );
  },
};

/**
 * Disabled RadioCard with tooltip explaining why it's disabled.
 * Demonstrates using tooltips to provide context for unavailable options.
 */
export const DisabledRadioCard: Story = {
  args: {
    content: "",
    children: <></>,
  },
  render: () => {
    const [value, setValue] = useState("option1");
    return (
      <RadioCardGroup
        value={value}
        onValueChange={(v) => setValue(v as string)}
        aria-label="Select an option"
      >
        <div style={{ display: "flex", gap: "16px" }}>
          <RadioCard value="option1">
            <strong>Option 1</strong>
            <p style={{ margin: "4px 0 0" }}>Available option</p>
          </RadioCard>
          <Tooltip content="This option is disabled">
            <span style={{ display: "inline-block" }}>
              <RadioCard value="option2" disabled>
                <strong>Option 2</strong>
                <p style={{ margin: "4px 0 0" }}>Unavailable option</p>
              </RadioCard>
            </span>
          </Tooltip>
          <RadioCard value="option3">
            <strong>Option 3</strong>
            <p style={{ margin: "4px 0 0" }}>Another available option</p>
          </RadioCard>
        </div>
      </RadioCardGroup>
    );
  },
};
