"use client";

import {
  DataProvider,
  ActionProvider,
  VisibilityProvider,
  Renderer,
  useUIStream,
} from "@json-render/react";
import { registry } from "@/components/registry";

export default function Page() {
  const { tree, isStreaming, send } = useUIStream({
    api: "/api/generate",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    send(formData.get("prompt") as string);
  };

  return (
    <DataProvider initialData={{}}>
      <VisibilityProvider>
        <ActionProvider
          handlers={{
            submit: (params) => console.log("Submit:", params),
            navigate: (params) => console.log("Navigate:", params),
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              name="prompt"
              placeholder="Describe what you want..."
              className="border p-2 rounded"
            />
            <button type="submit" disabled={isStreaming}>
              Generate
            </button>
          </form>

          <div className="mt-8">
            <Renderer tree={tree} registry={registry} />
          </div>
        </ActionProvider>
      </VisibilityProvider>
    </DataProvider>
  );
}
