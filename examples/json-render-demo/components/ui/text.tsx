import { ComponentRenderProps } from "@json-render/react";

type Props = { content: string };

export function Text({ element }: ComponentRenderProps) {
  const { content } = element.props as Props;

  return <p>{content}</p>;
}
