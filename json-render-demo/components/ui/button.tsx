import { ComponentRenderProps } from "@json-render/react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cn } from "@/lib/utils";

type Props = {
  action: string;
  label: string;
  params?: Record<string, unknown>;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
};

export function Button({ element, onAction }: ComponentRenderProps) {
  const {
    action,
    label,
    params,
    variant = "default",
    size = "default",
  } = element.props as Props;

  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-input bg-background hover:bg-accent",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizeStyles = {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3 text-xs",
    lg: "h-10 px-8",
  };

  return (
    <BaseButton
      onClick={() => onAction?.({ name: action, params: params ?? {} })}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
      )}
    >
      {label}
    </BaseButton>
  );
}
