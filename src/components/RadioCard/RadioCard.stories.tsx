import * as React from "react";
import type { Meta } from "@storybook/react-vite";
import { RadioCard, RadioCardGroup } from "./RadioCard";

const meta = {
  title: "Components/RadioCard",
  component: RadioCardGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioCardGroup>;

export default meta;

export const Basic = {
  render: () => {
    const [value, setValue] = React.useState("option1");
    return (
      <RadioCardGroup
        value={value}
        onValueChange={(v) => setValue(v as string)}
        aria-label="Select an option"
      >
        <div style={{ display: "flex", gap: "16px" }}>
          <RadioCard value="option1">
            <strong>Option 1</strong>
            <p style={{ margin: "4px 0 0" }}>Description for option 1</p>
          </RadioCard>
          <RadioCard value="option2">
            <strong>Option 2</strong>
            <p style={{ margin: "4px 0 0" }}>Description for option 2</p>
          </RadioCard>
          <RadioCard value="option3">
            <strong>Option 3</strong>
            <p style={{ margin: "4px 0 0" }}>Description for option 3</p>
          </RadioCard>
        </div>
      </RadioCardGroup>
    );
  },
};

export const Vertical = {
  render: () => {
    const [value, setValue] = React.useState("b");
    return (
      <RadioCardGroup
        value={value}
        onValueChange={(v) => setValue(v as string)}
        aria-label="Vertical options"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "300px",
          }}
        >
          <RadioCard value="a">Option A</RadioCard>
          <RadioCard value="b">Option B</RadioCard>
          <RadioCard value="c">Option C</RadioCard>
        </div>
      </RadioCardGroup>
    );
  },
};

export const WithDisabled = {
  render: () => {
    const [value, setValue] = React.useState("enabled1");
    return (
      <RadioCardGroup
        value={value}
        onValueChange={(v) => setValue(v as string)}
        aria-label="Options with disabled"
      >
        <div style={{ display: "flex", gap: "16px" }}>
          <RadioCard value="enabled1">Enabled</RadioCard>
          <RadioCard value="disabled" disabled>
            Disabled
          </RadioCard>
          <RadioCard value="enabled2">Also Enabled</RadioCard>
        </div>
      </RadioCardGroup>
    );
  },
};

export const FlexGrid = {
  render: () => {
    const [value, setValue] = React.useState("1");
    return (
      <RadioCardGroup
        value={value}
        onValueChange={(v) => setValue(v as string)}
        aria-label="Grid selection"
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <RadioCard
              key={n}
              value={String(n)}
              style={{
                width: 280,
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
              }}
            >
              Card {n}
            </RadioCard>
          ))}
        </div>
      </RadioCardGroup>
    );
  },
};
