# From Prompts to Predictable User Interfaces

> AI generated UIs are naturally unpredictable. This talk demonstrates practical techniques for turning coding agents into predictable UI builders through feedback loops, MCP servers, skills, and libraries.

**Talk Duration:** 30 minutes
**Target Audience:** Intermediate developers
**Demo Style:** Live coding with backup materials

## Repository Structure

```
/
├── examples/
│   ├── examples/json-render-demo/      # Part 1: AI→JSON→UI streaming (Next.js)
│   ├── design-system-demo/    # Part 3: Figma MCP → Storybook (Vite + Storybook)
│   └── feedback-loop-demo/    # Part 2: Visual validation (Next.js)
├── slides/                    # Slidev presentation (22 slides)
├── backups/                   # Pre-generated outputs for live demo safety
└── CLAUDE.md                  # Instructions for Claude Code
```

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm 10+
- Claude Desktop (for MCP demos)
- Claude Code CLI (for /agent-browser demos)

### Setup All Demos

```bash
# Install dependencies for all packages
cd examples/json-render-demo && pnpm install && cd ..
cd examples/design-system-demo && pnpm install && cd ../..
cd examples/feedback-loop-demo && pnpm install && cd ../..
cd slides && pnpm install && cd ..
```

### Run Demos

**json-render demo (Part 1):**
```bash
cd examples/json-render-demo
pnpm dev  # http://localhost:3000
```

**feedback-loop demo (Part 2):**
```bash
cd examples/feedback-loop-demo
pnpm dev  # http://localhost:3001
```

**design-system demo (Part 3):**
```bash
cd examples/design-system-demo
pnpm storybook  # http://localhost:6006
```

**Slides:**
```bash
cd slides
pnpm dev  # http://localhost:3030 (presenter mode)
```

## Talk Outline

### Part 1: json-render (10 min)

**Concept:** Structured output format constrains AI generation
**Demo:** Text prompt → JSONL patches → React components streaming in real-time

**Key Points:**
- Component catalog defines available components (Card, Button, Text)
- System prompt teaches Claude JSONL patch format
- Renderer applies patches to build component tree
- Structured output = predictable results

**Files to explore:**
- `examples/json-render-demo/lib/catalog.ts` - Component schemas
- `examples/json-render-demo/app/api/generate/route.ts` - System prompt
- `examples/json-render-demo/components/registry.tsx` - React implementations

### Part 2: Feedback Loops (10 min)

**Concept:** Visual validation enables iteration
**Demo:** /agent-browser validates login form UI

**Key Points:**
- LLMs generate code, not pixels
- Feedback loop: Generate → Validate → Fix
- /agent-browser: natural language output (~500 bytes)
- Playwright MCP: screenshots + snapshots (~50KB+)
- Context budget matters for agentic workflows

**Files to explore:**
- `examples/feedback-loop-demo/app/page.tsx` - Login form
- `examples/feedback-loop-demo/validation/workflow.md` - Comparison guide
- `backups/feedback-loop/agent-browser-validation.txt` - Example output

### Part 3: Design to Code (8 min)

**Concept:** Design system as source of truth
**Demo:** Extract Button from Figma → Generate Storybook stories

**Key Points:**
- Figma MCP extracts design context + tokens
- Generate React components from design
- Storybook documents all variants
- Design = code (single source of truth)

**Files to explore:**
- `examples/design-system-demo/src/tokens.ts` - Extracted design tokens
- `examples/design-system-demo/src/components/button.tsx` - Generated component
- `examples/design-system-demo/src/components/button.stories.tsx` - Storybook stories

## Three Constraints for Predictable UIs

| Constraint | Tool | Benefit |
|------------|------|---------|
| **Structured Output** | json-render | AI outputs JSONL patches instead of arbitrary code |
| **Feedback Loops** | /agent-browser | Visual validation without bloating context |
| **Design Contracts** | Figma MCP | Design system enforces consistency |

## Technologies Used

- **json-render** ([npm](https://www.npmjs.com/package/@json-render/react)) - Structured UI rendering library
- **Next.js 16** - React framework with App Router
- **React 19** - UI library with latest features
- **Tailwind CSS v4** - Utility-first styling
- **Storybook 8** - Component documentation
- **Slidev** - Markdown-based presentations
- **Base UI** - Accessible component primitives
- **Figma MCP** - Design extraction via Model Context Protocol
- **Claude Code /agent-browser skill** - Natural language browser automation

## Figma MCP Setup

The design-system demo uses [Figma MCP server](https://www.figma.com/mcp-catalog/) to extract components from Figma.

**Source file:** https://www.figma.com/design/dHqyIhebbTxZSzOun8aAaA/Simple-Design-System--Community-

**Rate limits:** Starter plan = 6 tool calls/month

**Key tools:**
- `get_design_context` - Extract component implementation
- `get_variable_defs` - Extract design tokens
- `get_screenshot` - Visual reference
- `get_metadata` - Component structure overview

## 🎤 Presentation Day

**See [PRESENTATION_DAY.md](./PRESENTATION_DAY.md) for complete day-of guide including:**
- Quick start commands
- Demo prompts ready to paste
- Timing breakdown
- Troubleshooting
- Backup strategies

## Presentation Tips

### Before the Talk

1. **Test all demos** - Ensure each runs without errors
2. **Capture screenshots** - See `slides/public/screenshots/README.md` for guide
3. **Open browser tabs** - One per demo (localhost:3000, :3001, Storybook)
4. **Prepare prompts** - Have test prompts ready to paste
5. **Review backups** - Know which files to use if demos fail
6. **Time yourself** - Practice to stay within 30 minutes

### During the Talk

1. **Start with slides** - Set context before diving into code
2. **Show, then explain** - Let audience see it work first
3. **Use backups smoothly** - Don't apologize if live demo fails
4. **Watch timing** - Each part is ~10 minutes
5. **Leave time for Q&A** - Aim to finish at 28 minutes

### Common Issues

- **json-render API fails** → Show `backups/json-render/welcome-card.jsonl`
- **/agent-browser unavailable** → Show `backups/feedback-loop/agent-browser-validation.txt`
- **Figma MCP rate limited** → Show pre-extracted component code
- **Storybook won't start** → Show screenshots of Button variants
- **Port conflicts** → json-render=3000, feedback-loop=3001, Storybook=6006

## Key Takeaways

1. **Constraints enable predictability** - Structure, feedback, and contracts guide AI generation
2. **Choose the right tool** - json-render for UI, /agent-browser for validation, Figma MCP for design
3. **Context budget matters** - Optimize for agentic workflows (text > images)

## Resources

- [json-render documentation](https://json-render.dev)
- [Figma MCP server](https://www.figma.com/mcp-catalog/)
- [Claude Code /agent-browser skill](https://claude.com/claude-code)
- [Slidev documentation](https://sli.dev)
- [This repository](https://github.com/ubmit/from-prompts-to-predictable-user-interfaces)

## License

MIT

## Author

Guilherme de Andrade
