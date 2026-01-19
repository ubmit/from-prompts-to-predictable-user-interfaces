import { ComponentRenderProps } from "@json-render/react";

type Props = {
  description: string;
  title: string;
};

export function Card({ element, children }: ComponentRenderProps) {
  const { title, description } = element.props as Props;

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="font-bold">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
      {children}
    </div>
  );
}
