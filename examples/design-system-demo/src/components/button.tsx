import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof BaseButton>, "disabled">,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border font-body font-normal leading-none rounded-md transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-bg-brand text-brand-on-brand",
        neutral: "bg-bg-neutral text-default",
        subtle: "bg-transparent text-default border-transparent",
      },
      size: {
        small: "h-8 p-sm text-sm",
        medium: "h-10 p-md text-base",
      },
      disabled: {
        false: null,
        true: "bg-bg-disabled text-disabled cursor-not-allowed border-border-disabled",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        disabled: false,
        className: "border-border-primary hover:bg-bg-brand-hover",
      },
      {
        variant: "neutral",
        disabled: false,
        className: "border-border-neutral hover:bg-bg-neutral-hover",
      },
      {
        variant: "subtle",
        disabled: false,
        className: "hover:border-border-subtle",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
      disabled: false,
    },
  },
);

export function Button({
  className,
  variant,
  size,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      className={buttonVariants({ variant, size, disabled, className })}
      disabled={disabled || undefined}
      {...props}
    >
      {children}
    </BaseButton>
  );
}
