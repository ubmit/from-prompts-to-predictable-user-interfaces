# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Simple Next.js login form demonstrating visual validation with /agent-browser skill. Shows feedback loop pattern for talk Part 2: "Why feedback loops matter for predictable AI UIs".

**Stack:** Next.js 16 + React 19 + TypeScript + Tailwind CSS v4

## Development Commands

```bash
pnpm dev    # Start dev server on http://localhost:3001
pnpm build  # Build for production
pnpm lint   # Run ESLint
```

**Note:** Runs on port 3001 (json-render-demo uses 3000)

## Architecture

**Single page application:**
```
app/
├── globals.css   # Tailwind v4 globals
├── layout.tsx    # Root layout
└── page.tsx      # Login form (client component)

lib/
└── utils.ts      # cn() helper

validation/
└── workflow.md   # Feedback loop demo script
```

## Login Form Component

**Form fields:**
- Email (required, type=email)
- Password (required, type=password)
- Remember me (checkbox)
- Submit button (full-width, blue)
- Forgot password link
- Sign up link
- Demo purpose callout (blue info box)

**Styling:**
- Centered card layout (max-w-md)
- White card on gray-50 background
- Blue accent color (#3b82f6)
- Focus rings on inputs
- Responsive padding/spacing

**Behavior:**
- Client-side form validation (HTML5)
- Console logs form data on submit
- Alert shows (no actual auth logic)

## Feedback Loop Demo

**Purpose:** Show how /agent-browser provides natural language feedback for visual validation without bloating context window.

### Running the Demo

1. Start server: `pnpm dev` (localhost:3001)
2. Use /agent-browser skill to validate UI
3. Make intentional styling issue
4. Re-validate with /agent-browser
5. Fix issue based on feedback
6. Compare context usage vs Playwright MCP

### /agent-browser Validation Checklist

Validate these elements:
- [ ] Form card centered in viewport
- [ ] Email input visible with label
- [ ] Password input visible with label
- [ ] Submit button prominent and clickable
- [ ] Visual hierarchy clear (title → inputs → button)
- [ ] Proper spacing between elements
- [ ] Focus states visible on inputs
- [ ] Accessibility labels present

### Example Prompts

**Initial validation:**
```
Navigate to http://localhost:3001 and validate the login form layout.
Check if email input, password input, and submit button are all visible
and properly aligned.
```

**After making changes:**
```
Refresh http://localhost:3001 and verify the submit button is now more
prominent with better contrast.
```

### Comparison: /agent-browser vs Playwright MCP

**Context window impact:**
- /agent-browser: ~500 bytes (natural language description)
- Playwright MCP: ~50KB+ (snapshot + base64 screenshot)
- **100x difference** in context usage

**Use /agent-browser for:**
- Layout validation (centering, alignment)
- Element visibility checks
- Visual hierarchy assessment
- Quick iteration cycles
- Semantic UI validation

**Use Playwright MCP for:**
- Pixel-perfect measurements
- Screenshot comparisons
- Complex user flows
- Visual regression tests
- When you need the actual image

## Talk Demo Script

**Setup (before talk):**
1. Have server running on port 3001
2. Browser tab open to localhost:3001
3. Terminal visible with Claude

**Live demo flow:**
1. Show login form in browser
2. Prompt: "Use /agent-browser to validate this login form at localhost:3001"
3. Show natural language output from /agent-browser
4. Make deliberate issue: Hide submit button with `display: none`
5. Re-validate: /agent-browser catches missing button
6. Fix: Remove display:none, re-validate
7. Show: All checks pass
8. Explain context window benefit (text vs images)

**Talking points:**
- LLMs can't predict visual output from code alone
- Feedback loops catch layout/styling issues
- /agent-browser uses natural language → preserves context
- Playwright MCP returns screenshots → bloats context
- Choice depends on use case: semantic validation vs pixel precision
- For agentic workflows, context budget matters

## Important Notes

- Port 3001 avoids conflict with json-render-demo (port 3000)
- Form doesn't actually authenticate (demo only)
- Tailwind v4 uses global CSS file format
- Client component needed for form interactivity
- Blue accent matches standard auth UI patterns
- Demo callout educates audience about purpose
- validation/workflow.md has detailed comparison tables
