# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Slidev presentation for "From prompts to predictable user interfaces" talk. 30-minute presentation with minimalist black theme covering json-render, feedback loops, and Figma MCP workflow.

**Stack:** Slidev (Vue-powered markdown presentations)

## Development Commands

```bash
pnpm dev      # Start presenter mode (http://localhost:3030)
pnpm build    # Build static site
pnpm export   # Export to PDF (requires Playwright)
```

## Presentation Structure

**22 slides, 30 minutes total:**

1. Title slide
2. Problem: AI UIs unpredictable
3. Solution: 3 constraints
4. Part 1 section: json-render
5. json-render architecture diagram
6. Code walkthrough (catalog + system prompt)
7. **Screenshot: json-render output example**
8. Demo transition (json-render)
9. Part 2 section: Feedback loops
10. Why feedback matters (can't predict visual)
11. Feedback loop diagram
12. /agent-browser vs Playwright MCP comparison
13. **Screenshot: login form example**
14. Demo transition (feedback loop)
15. Part 3 section: Design to code
16. Design-dev gap (traditional vs MCP)
17. Figma MCP workflow diagram
18. MCP tools + output
19. **Screenshot: Figma source vs Storybook output**
20. Demo transition (Figma → Storybook)
21. Key takeaways
22. Thank you + Q&A

## Timing Breakdown

- Part 1 (json-render): 10 min (slides 4-8)
- Part 2 (feedback loops): 10 min (slides 9-14)
- Part 3 (design to code): 8 min (slides 15-20)
- Intro/outro: 2 min (slides 1-3, 21-22)

## Theme Configuration

**Colors:**
- Background: `#0a0a0a` (near black)
- Text: `#fff` (white) / `#a3a3a3` (gray-400 for secondary)
- Accents: Blue (#3b82f6), Green (#22c55e), Red (#ef4444)

**Typography:**
- Sans: Inter (body text)
- Mono: JetBrains Mono (code blocks)

**Layout:**
- Most slides use `layout: center` for centered content
- Section dividers use `layout: section`
- Code comparisons use `layout: two-cols`

## Slide Features

**Mermaid diagrams:**
- json-render flow: User → Claude → JSONL → Renderer → React
- Feedback loop: Generate → Validate → Fix cycle
- Figma MCP: Design → Extract → Generate → Storybook

**Code blocks:**
- TypeScript for catalog/types
- JSONL for patch format
- Bash for tool invocation

**Click animations:**
- `<v-click>` for progressive disclosure
- Used on: problem/solution, feedback comparison, key takeaways

## Demo Integration Points

**Slide 7: json-render demo**
- Have json-render-demo running on localhost:3000
- Browser window ready
- Test prompt: "Create a welcome card with a get started button"

**Slide 12: feedback loop demo**
- Have feedback-loop-demo running on localhost:3001
- Terminal with Claude ready
- Prepare /agent-browser prompt

**Slide 17: Figma → Storybook demo**
- Have Storybook running (examples/design-system-demo)
- Figma file open in browser
- Show Button component with variants

## Presenter Notes

**Opening (slides 1-3):**
- Introduce problem: same prompt → different outputs
- Thesis: constraints enable predictability
- Preview 3 techniques

**Part 1 (slides 4-7):**
- Show catalog defines contract
- System prompt teaches format
- Demo streaming patches → UI
- Emphasize: structured output = predictable results

**Part 2 (slides 8-12):**
- LLMs generate code, not pixels
- Need validation loop
- /agent-browser: text output (efficient)
- Playwright MCP: images (expensive)
- Demo: validate login form, catch issue, fix

**Part 3 (slides 13-17):**
- Traditional handoff loses fidelity
- Figma MCP extracts design truth
- Generate components from design
- Storybook = living documentation
- Demo: Button component with variants

**Closing (slides 18-19):**
- Recap 3 constraints
- Context budget critical for agents
- Tools complement each other
- Q&A

## Important Notes

- Slidev uses Vue components (can embed interactive demos)
- Mermaid diagrams auto-themed with dark background
- Code syntax highlighting via Shiki
- Export to PDF requires Playwright (already in devDeps)
- Presenter mode shows notes + timer (press 'P' in dev mode)
- Can navigate with arrow keys or click
- Press 'O' for slide overview

## Customization

To adjust theme colors, create `style.css`:
```css
:root {
  --slidev-theme-primary: #3b82f6;
}
```

To add custom layouts, create `./layouts/custom.vue`

## Screenshots

Slides reference screenshots in `public/screenshots/`:
- `json-render-streaming.png` - json-render demo output
- `feedback-loop-form.png` - Login form UI
- `figma-button-variants.png` - Figma Button component frame
- `design-system-storybook.png` - Storybook with Button stories

**To capture:** See `public/screenshots/README.md` for detailed instructions

**Note:** Slides work without screenshots (fallback to diagrams), but visuals enhance presentation

## Presentation Day Checklist

- [ ] All demos running (ports 3000, 3001, + Storybook)
- [ ] Browser tabs open to each demo
- [ ] Terminal ready with Claude
- [ ] Figma file open
- [ ] **Screenshots captured** (see public/screenshots/README.md)
- [ ] Slides in presenter mode
- [ ] Timer started (30 min)
- [ ] Backup: screenshots in /backups if live demos fail
