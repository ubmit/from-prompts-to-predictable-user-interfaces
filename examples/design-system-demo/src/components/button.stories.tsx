import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "neutral", "subtle"],
    },
    size: {
      control: "select",
      options: ["medium", "small"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary intent stories
export const PrimaryDefaultMedium: Story = {
  args: {
    intent: "primary",
    size: "medium",
    children: "Button",
  },
};

export const PrimaryHoverMedium: Story = {
  args: {
    intent: "primary",
    size: "medium",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const PrimaryDisabledMedium: Story = {
  args: {
    intent: "primary",
    size: "medium",
    children: "Button",
    disabled: true,
  },
};

// Neutral intent stories
export const NeutralDefaultMedium: Story = {
  args: {
    intent: "neutral",
    size: "medium",
    children: "Button",
  },
};

export const NeutralHoverMedium: Story = {
  args: {
    intent: "neutral",
    size: "medium",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const NeutralDisabledMedium: Story = {
  args: {
    intent: "neutral",
    size: "medium",
    children: "Button",
    disabled: true,
  },
};

// Subtle intent stories
export const SubtleDefaultMedium: Story = {
  args: {
    intent: "subtle",
    size: "medium",
    children: "Button",
  },
};

export const SubtleHoverMedium: Story = {
  args: {
    intent: "subtle",
    size: "medium",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const SubtleDisabledMedium: Story = {
  args: {
    intent: "subtle",
    size: "medium",
    children: "Button",
    disabled: true,
  },
};

// Primary small intents
export const PrimarySmall: Story = {
  args: {
    intent: "primary",
    size: "small",
    children: "Button",
  },
};

export const PrimaryHoverSmall: Story = {
  args: {
    intent: "primary",
    size: "small",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const PrimaryDisabledSmall: Story = {
  args: {
    intent: "primary",
    size: "small",
    children: "Button",
    disabled: true,
  },
};

// Neutral small intents
export const NeutralSmall: Story = {
  args: {
    intent: "neutral",
    size: "small",
    children: "Button",
  },
};

export const NeutralHoverSmall: Story = {
  args: {
    intent: "neutral",
    size: "small",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const NeutralDisabledSmall: Story = {
  args: {
    intent: "neutral",
    size: "small",
    children: "Button",
    disabled: true,
  },
};

// Subtle small intents
export const SubtleSmall: Story = {
  args: {
    intent: "subtle",
    size: "small",
    children: "Button",
  },
};

export const SubtleHoverSmall: Story = {
  args: {
    intent: "subtle",
    size: "small",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const SubtleDisabledSmall: Story = {
  args: {
    intent: "subtle",
    size: "small",
    children: "Button",
    disabled: true,
  },
};
