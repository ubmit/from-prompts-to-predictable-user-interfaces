import { ComponentRegistry } from "@json-render/react";

import { Button } from "./ui/button";

export const registry: ComponentRegistry = {
  Card: ({ element, children }) => (
    <article className="p-4 border-2 border-gray-500 rounded-md max-w-xs shadow bg-gray-800 text-gray-100">
      <header>
        <h2 className="font-bold text-xl">{element.props.title}</h2>
        {element.props.description && (
          <p className="text-gray-400">{element.props.description}</p>
        )}
      </header>
      <div className="space-y-4 pt-8">{children}</div>
    </article>
  ),
  Button,
  Text: ({ element }) => <p>{element.props.content}</p>,
};
