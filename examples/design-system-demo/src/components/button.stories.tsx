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
    variant: {
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

// Primary variant stories
export const PrimaryDefaultMedium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
  },
};

export const PrimaryHoverMedium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const PrimaryDisabledMedium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
    disabled: true,
  },
};

// Neutral variant stories
export const NeutralDefaultMedium: Story = {
  args: {
    variant: "neutral",
    size: "medium",
    children: "Button",
  },
};

export const NeutralHoverMedium: Story = {
  args: {
    variant: "neutral",
    size: "medium",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const NeutralDisabledMedium: Story = {
  args: {
    variant: "neutral",
    size: "medium",
    children: "Button",
    disabled: true,
  },
};

// Subtle variant stories
export const SubtleDefaultMedium: Story = {
  args: {
    variant: "subtle",
    size: "medium",
    children: "Button",
  },
};

export const SubtleHoverMedium: Story = {
  args: {
    variant: "subtle",
    size: "medium",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const SubtleDisabledMedium: Story = {
  args: {
    variant: "subtle",
    size: "medium",
    children: "Button",
    disabled: true,
  },
};

// Primary small variants
export const PrimarySmall: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Button",
  },
};

export const PrimaryHoverSmall: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const PrimaryDisabledSmall: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Button",
    disabled: true,
  },
};

// Neutral small variants
export const NeutralSmall: Story = {
  args: {
    variant: "neutral",
    size: "small",
    children: "Button",
  },
};

export const NeutralHoverSmall: Story = {
  args: {
    variant: "neutral",
    size: "small",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const NeutralDisabledSmall: Story = {
  args: {
    variant: "neutral",
    size: "small",
    children: "Button",
    disabled: true,
  },
};

// Subtle small variants
export const SubtleSmall: Story = {
  args: {
    variant: "subtle",
    size: "small",
    children: "Button",
  },
};

export const SubtleHoverSmall: Story = {
  args: {
    variant: "subtle",
    size: "small",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const SubtleDisabledSmall: Story = {
  args: {
    variant: "subtle",
    size: "small",
    children: "Button",
    disabled: true,
  },
};
