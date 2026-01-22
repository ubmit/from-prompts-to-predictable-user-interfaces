"use client";

import { useState } from "react";
import {
  DataProvider,
  ActionProvider,
  VisibilityProvider,
  Renderer,
  useUIStream,
} from "@json-render/react";
import { ArrowRight } from "lucide-react";

import { registry } from "@/components/registry";

const suggestions = [
  "Create a FE.OPO #9 card",
  "Build a welcome card",
  "Create an error card",
  "Generate an outline submit button",
];

export default function Page() {
  const [description, setDescription] = useState("");

  const { tree, isStreaming, send } = useUIStream({
    api: "/api/generate",
  });

  const handleSuggestionClick = (suggestion: string) => {
    setDescription(suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(description);
    setDescription("");
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
          <div className="h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
            <div className="flex-1 grid grid-cols-[320px_1fr_1fr] divide-x divide-[#262626] overflow-hidden">
              {/* Left Panel - Prompts */}
              <div className="flex flex-col">
                <div className="flex flex-col flex-1 p-6 overflow-y-auto items-center justify-center">
                  <p className="text-[#a1a1a1] text-sm mb-6 leading-relaxed text-center">
                    Describe what you want to build
                  </p>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        disabled={isStreaming}
                        className="shrink-0 py-1 px-2 text-xs text-left border border-[#262626] rounded hover:bg-[#1a1a1a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="border-t border-[#262626] py-6 px-4">
                  <form
                    onSubmit={handleSubmit}
                    className="flex gap-2 items-center"
                  >
                    <input
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe changes..."
                      disabled={isStreaming}
                      className="flex-1 bg-[#0a0a0a] border border-[#262626] rounded-md px-3 py-2.5 text-sm placeholder:text-[#525252] focus:outline-none focus:border-[#404040] disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isStreaming || !description.trim()}
                      className="flex items-center justify-center w-10 h-10 bg-[#262626] rounded-md hover:bg-[#404040] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ArrowRight />
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Panel - Preview */}
              <div className="flex flex-col">
                <div className="border-b border-[#262626] px-4 py-2 flex gap-2">
                  <button className="px-3 py-1 text-sm rounded bg-[#1a1a1a] text-[#ededed]">
                    preview
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  {!tree ? (
                    <div className="text-[#525252] text-cente font-mono text-sm">
                      // enter a prompt to generate UI
                    </div>
                  ) : (
                    <Renderer tree={tree} registry={registry} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </ActionProvider>
      </VisibilityProvider>
    </DataProvider>
  );
}
