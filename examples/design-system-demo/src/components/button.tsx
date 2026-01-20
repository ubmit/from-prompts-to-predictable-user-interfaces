import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Button as BaseButton } from "@base-ui/react/button";

export interface ButtonProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof BaseButton>, "disabled">,
    VariantProps<typeof button> {}

const button = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "border",
    "font-body",
    "font-normal",
    "leading-none",
    "rounded-md",
    "transition-colors",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-bg-brand",
          "text-brand-on-brand",
          "border-border-primary",
          "hover:bg-bg-brand-hover",
        ],
        neutral: [
          "bg-bg-neutral",
          "text-default",
          "border",
          "border-border-neutral",
          "hover:bg-bg-neutral-hover",
        ],
        subtle: [
          "bg-transparent",
          "text-default",
          "border-0",
          "border-transparent",
          "hover:border-border-subtle",
          "hover:border",
          "disabled:border",
        ],
      },
      size: {
        small: ["h-8", "p-sm", "text-sm"],
        medium: ["h-10", "p-md", "text-base"],
      },
      disabled: {
        false: null,
        true: [
          "bg-bg-disabled",
          "text-disabled",
          "cursor-not-allowed",
          "border-border-disabled",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
      disabled: false,
    },
  },
);

export function Button({
  className,
  intent,
  size,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      className={button({ intent, size, disabled, className })}
      disabled={disabled || undefined}
      {...props}
    >
      {children}
    </BaseButton>
  );
}
