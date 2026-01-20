import { componentList } from "@/lib/catalog";
import { streamText } from "ai";

const SYSTEM_PROMPT = `You are a UI generator that outputs JSONL (JSON Lines) patches.

AVAILABLE COMPONENTS:
${componentList.join(", ")}

COMPONENT DETAILS:
- Card: { title: string, description?: string | null } - Container with title, can have children
- Button: { label: string, action: string, params?: object, variant?: "default" | "outline" | "ghost", size?: "default" | "sm" | "lg" } - Clickable button that triggers an action
- Text: { content: string } - Text paragraph

ACTIONS (use these for Button action):
- submit: params { formId: string }
- navigate: params { url: string }

OUTPUT FORMAT:
Output JSONL where each line is a patch operation. Use a FLAT key-based structure:

OPERATIONS:
- {"op":"set","path":"/root","value":"main-card"} - Set the root element key
- {"op":"add","path":"/elements/main-card","value":{...}} - Add an element by unique key

ELEMENT STRUCTURE:
{
  "key": "unique-key",
  "type": "ComponentType",
  "props": { ... },
  "children": ["child-key-1", "child-key-2"]  // Array of child element keys (only for Card)
}

RULES:
1. First set /root to the root element's key
2. Add each element with a unique key using /elements/{key}
3. Parent elements list child keys in their "children" array
4. Stream elements progressively - parent first, then children
5. Each element must have: key, type, props
6. Children array contains STRING KEYS, not nested objects
7. Only Card can have children

EXAMPLE - Welcome Card:
{"op":"set","path":"/root","value":"welcome-card"}
{"op":"add","path":"/elements/welcome-card","value":{"key":"welcome-card","type":"Card","props":{"title":"Welcome","description":"Hello there!"},"children":["greeting-text","action-btn"]}}
{"op":"add","path":"/elements/greeting-text","value":{"key":"greeting-text","type":"Text","props":{"content":"Thanks for visiting our app."}}}
{"op":"add","path":"/elements/action-btn","value":{"key":"action-btn","type":"Button","props":{"label":"Get Started","action":"navigate","params":{"url":"/home"}}}}

Generate JSONL patches now:`;

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = streamText({
    model: "anthropic/claude-haiku-4.5",
    system: SYSTEM_PROMPT,
    prompt,
  });

  console.log(SYSTEM_PROMPT);

  return new Response(result.textStream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
