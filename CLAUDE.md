# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Monorepo for talk "From prompts to predictable user interfaces" demonstrating techniques for building predictable AI-generated UIs through constraints: structured output formats, feedback loops, and design system contracts.

**Target:** 30-minute presentation for intermediate developers
**Demo style:** Live coding with backup materials

## Repository Structure

```
/
├── examples/json-render-demo/          # Part 1: AI→JSON→UI streaming demo (Next.js 16 + React 19)
├── examples/
│   ├── design-system-demo/    # Part 3: Figma MCP → Storybook workflow
│   └── feedback-loop-demo/    # Part 2: Visual validation with /agent-browser
├── slides/                    # Slidev presentation (minimalist black theme)
└── backups/                   # Pre-generated outputs for live demos
```

## Development Commands

**examples/json-render-demo:**
```bash
cd examples/json-render-demo
pnpm dev          # http://localhost:3000
pnpm build
pnpm lint
```

**design-system-demo:**
```bash
cd examples/design-system-demo
pnpm dev          # Vite dev server
pnpm storybook    # Storybook UI
pnpm build
```

**feedback-loop-demo:**
```bash
cd examples/feedback-loop-demo
pnpm dev          # Next.js dev server
```

**slides:**
```bash
cd slides
pnpm dev          # Slidev presenter mode
pnpm build
pnpm export       # Export to PDF
```

## Talk Structure (30 min)

1. **Part 1: json-render (10 min)** - Constraint #1: Structured output format
   - What: AI → JSONL patches → React components
   - Demo: Streaming UI generation from text prompts
   - Code walkthrough: `lib/catalog.ts` → `app/api/generate/route.ts` → `components/registry.tsx`

2. **Part 2: Feedback Loops (10 min)** - Constraint #2: Visual validation
   - Why: LLMs can't predict visual output
   - Demo: /agent-browser skill for natural language validation
   - Comparison: /agent-browser vs Playwright MCP (context window tradeoff)

3. **Part 3: Design to Code (8 min)** - Constraint #3: Design system as contract
   - Problem: Design-dev handoff gap
   - Demo: Figma MCP → extract design → generate components → Storybook stories

4. **Wrap-up (2 min)** - Key takeaways + Q&A

## Key Concepts

### json-render Architecture

**Data flow:**
```
User prompt
  ↓
POST /api/generate (Claude API)
  ↓
JSONL patches streamed ({"op":"set|add","path":"/root|/elements/key","value":{...}})
  ↓
useUIStream hook parses patches
  ↓
Renderer applies patches to tree
  ↓
Component registry maps types → React components
```

**Component catalog pattern:**
- Define components with Zod schemas in `lib/catalog.ts`
- Schemas used to:
  1. Generate system prompt teaching LLM the JSONL format
  2. Validate runtime props via `@json-render/core`
- System prompt includes: component list, props, actions, output format, rules, examples

**JSONL patch format:**
```jsonl
{"op":"set","path":"/root","value":"card-key"}
{"op":"add","path":"/elements/card-key","value":{"key":"card-key","type":"Card","props":{...},"children":["text-key"]}}
{"op":"add","path":"/elements/text-key","value":{"key":"text-key","type":"Text","props":{...}}}
```

**Key constraints:**
- Flat key-based structure (not nested objects)
- Only Card component supports children
- Keys must be unique across tree
- Children refs are string keys

### Feedback Loops

**Pattern:**
```
Generate → Validate → Iterate
```

**Tools comparison:**

| Tool | Output | Context Impact | Use Case |
|------|--------|----------------|----------|
| /agent-browser | Natural language descriptions | Low | Quick visual checks, layout validation |
| Playwright MCP | Base64 screenshots + full control | High | Deep inspection, pixel-perfect validation |

**When to use /agent-browser:**
- Validating element visibility/positioning
- Checking interactive states (hover, click)
- Iterative refinement with natural language feedback
- Context window preservation critical

**When to use Playwright MCP:**
- Precise pixel measurements needed
- Complex multi-step user flows
- Screenshot comparison tests
- Full browser automation required

### Figma MCP Workflow

**Steps:**
1. Extract design tokens: `get_variable_defs` → `tokens.ts`
2. Extract components: `get_design_context` (per component frame)
3. Generate React implementations (Base UI + Tailwind mapping)
4. Generate Storybook stories (one per variant)
5. Visual validation: `get_screenshot` for comparison

**Key MCP tools:**
- `mcp__figma__get_design_context` - Component structure/code
- `mcp__figma__get_variable_defs` - Design tokens (colors, spacing, typography)
- `mcp__figma__get_metadata` - Component tree (overview only, use sparingly)
- `mcp__figma__get_screenshot` - Visual reference for validation

**Figma source:** https://www.figma.com/design/dHqyIhebbTxZSzOun8aAaA/Simple-Design-System--Community-

**Extract fileKey from URL:**
- Pattern: `https://figma.com/design/:fileKey/:fileName`
- fileKey: `dHqyIhebbTxZSzOun8aAaA`

**Extract nodeId from URL:**
- Pattern: `?node-id=1-2` → nodeId: `1:2` (replace hyphen with colon)

## Important Implementation Notes

### examples/json-render-demo specifics
- Uses `@json-render/core` (v0.2.0) and `@json-render/react` (v0.2.0)
- System prompt in `app/api/generate/route.ts` teaches Claude JSONL format
- Providers: DataProvider (state), ActionProvider (button actions), VisibilityProvider (visibility)
- Components: Card (container), Button (action), Text (leaf)
- Actions: submit (params: formId), navigate (params: url)
- Tailwind v4 with global CSS file format

### design-system-demo specifics
- Vite + React + TypeScript
- Storybook 8 with dark theme
- Tailwind CSS v4 (match examples/json-render-demo setup)
- @base-ui/react for accessible primitives
- Extract 2-3 components from Figma: Button (variants), Input (states)

### feedback-loop-demo specifics
- Next.js 16 + React 19 (match examples/json-render-demo stack)
- Login form example (email, password, submit)
- Document /agent-browser workflow in `validation/workflow.md`
- Include context window size comparison data

### slides specifics
- Slidev with custom minimalist theme
- Colors: bg #0a0a0a (black) or #111 (dark gray), text #fff (white) or #e5e5e5 (light gray)
- 18 slides total (see plan for structure)
- Embed code snippets from examples
- Embed screenshots from demos
- Minimal animations

## Backup Materials

For live demo safety, maintain pre-generated outputs:

**examples/json-render-demo:**
- `/backups/json-render/patches-*.jsonl` - JSONL patches for common prompts
- `/backups/json-render/screenshots/` - Expected outputs

**design-system-demo:**
- `/backups/design-system/figma-context-*.json` - Extracted design context
- `/backups/design-system/components/` - Pre-generated component files

**feedback-loop-demo:**
- `/backups/feedback-loop/agent-browser-*.txt` - /agent-browser outputs
- `/backups/feedback-loop/screenshots/` - Before/after validation

## External Dependencies

- `@json-render/core` & `@json-render/react` - Core libraries for structured UI rendering
- `ai` SDK (v6.0.39) - Streaming from Claude API
- `@base-ui/react` - Accessible component primitives
- Tailwind CSS v4 - Styling (global CSS file format)
- Next.js 16 - App router, React Server Components
- React 19 - Latest features
- Storybook 8 - Component documentation
- Slidev - Markdown-based presentations

## Common Workflows

**Test json-render demo:**
```bash
cd examples/json-render-demo && pnpm dev
# Prompt: "Create a welcome card with a button to get started"
# Verify: Streams JSONL, renders Card + Text + Button
```

**Extract Figma component:**
```bash
# Use Figma MCP tools with fileKey=1380235722331273046
# Example nodeId for Button: check Figma URL after clicking component
```

**Run /agent-browser validation:**
```bash
# Start feedback-loop-demo: cd examples/feedback-loop-demo && pnpm dev
# Use /agent-browser skill to navigate to localhost and validate UI
```

**Build all demos:**
```bash
cd examples/json-render-demo && pnpm build
cd ../examples/design-system-demo && pnpm build && pnpm build-storybook
cd ../feedback-loop-demo && pnpm build
cd ../../slides && pnpm build
```
