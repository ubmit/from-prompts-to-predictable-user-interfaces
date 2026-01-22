import { ComponentRegistry } from "@json-render/react";

import { Button } from "./ui/button";

export const registry: ComponentRegistry = {
  Card: ({ element, children }) => (
    <div className="p-4 border rounded-lg">
      <h2 className="font-bold">{element.props.title}</h2>
      {element.props.description && (
        <p className="text-gray-600">{element.props.description}</p>
      )}
      {children}
    </div>
  ),
  Button,
  Text: ({ element }) => <p>{element.props.content}</p>,
};
