import { ComponentRenderProps } from "@json-render/react";

type Props = {
  action: string;
  label: string;
  params?: Record<string, unknown>;
};

export function Button({ element, onAction }: ComponentRenderProps) {
  const { action, label, params } = element.props as Props;

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={() => onAction?.({ name: action, params: params ?? {} })}
    >
      {label}
    </button>
  );
}
