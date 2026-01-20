# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Storybook-based component library extracted from Figma design system. Demonstrates Figma MCP → Storybook workflow for talk Part 3: "Design to Code".

**Stack:** Vite + React 19 + TypeScript + Storybook 8 + Tailwind CSS v4 + Base UI

## Development Commands

```bash
pnpm dev          # Vite dev server
pnpm build        # Build for production
pnpm storybook    # Launch Storybook (main demo interface)
pnpm build-storybook  # Build static Storybook
pnpm lint         # Run ESLint
```

## Figma MCP Workflow

**Source:** https://www.figma.com/design/dHqyIhebbTxZSzOun8aAaA/Simple-Design-System--Community-
**fileKey:** `dHqyIhebbTxZSzOun8aAaA`

### Extraction Steps

1. **Get component metadata:**
   ```typescript
   mcp__figma__get_metadata(fileKey, nodeId)
   // Returns component structure with variant list
   ```

2. **Extract design context:**
   ```typescript
   mcp__figma__get_design_context(fileKey, nodeId)
   // Returns React+Tailwind code with design tokens
   ```

3. **Get visual reference:**
   ```typescript
   mcp__figma__get_screenshot(fileKey, nodeId)
   // Returns screenshot for validation
   ```

4. **Extract design tokens:**
   ```typescript
   mcp__figma__get_variable_defs(fileKey, nodeId)
   // Returns color/typography/spacing variables
   ```

### Conversion Process

1. Extract Figma component → React code with inline Tailwind
2. Map Figma variables to `tokens.ts` constants
3. Replace inline styles with token references
4. Adapt to @base-ui/react primitives for accessibility
5. Create Storybook stories for each variant

## Architecture

**Component pattern:**
```
src/
├── tokens.ts              # Design tokens from Figma variables
├── components/
│   ├── button.tsx         # Component implementation (Base UI + Tailwind)
│   └── button.stories.tsx # Storybook stories (one per variant)
└── lib/
    └── utils.ts           # cn() helper for class merging
```

**Button component:**
- Props: `variant`, `size`, `iconStart`, `iconEnd`, `children`, `disabled`
- Variants: primary (brand), neutral (gray), subtle (ghost)
- Sizes: medium (h-10, text-base), small (h-8, text-sm)
- States: default, hover, disabled
- Uses @base-ui/react for keyboard navigation and ARIA

**Storybook stories:**
- One story per Figma variant (PrimaryDefault, PrimaryHover, etc.)
- Interactive controls for variant/size/disabled props
- Dark background (matches talk slides)

## Figma Component Details

**Button (nodeId: 4185:3778):**
- 18 total variants across 3 dimensions:
  - Variant: Primary, Neutral, Subtle
  - State: Default, Hover, Disabled
  - Size: Medium, Small
- Design tokens used:
  - `--sds-color-text-brand-on-brand`: #f5f5f5
  - `--sds-typography-body-size-medium`: 16px
  - `--sds-typography-body-font-family`: Inter

**Extracted variants:**
- 4185:3779 - Primary/Default/Medium
- 4185:3783 - Primary/Hover/Medium
- 4185:3787 - Primary/Disabled/Medium
- ...and 15 more

## Rate Limits

Figma MCP on Starter plan: 6 tool calls/month
- Used for Button extraction: 3 calls (whoami, get_metadata, get_design_context)
- Remaining: 3 calls (can extract 1-2 more simple components)

For additional components, manually recreate following established patterns.

## Talk Demo Script

**Note:** Don't run Figma MCP live (rate limits). Show pre-extracted code instead.

1. Show Figma file in browser - Button component frame with 18 variants
2. Explain axes: "3 variants × 3 states × 2 sizes = 18 total"
3. Explain Figma MCP workflow (show slide diagram):
   - `get_design_context(fileKey, nodeId)` → React + Tailwind code
   - `get_variable_defs(fileKey, nodeId)` → Design tokens
   - `get_screenshot(fileKey, nodeId)` → Visual reference
4. Show pre-extracted output in `src/components/button.tsx`
5. Show design tokens in `src/tokens.ts`
6. Launch Storybook, demonstrate all variants working
7. Compare Storybook to Figma (visual parity achieved)

**Key talking points:**
- "Figma MCP extracts design intent, not just pixels"
- "Design tokens become TypeScript constants"
- "Generated code uses Base UI for accessibility"
- "Storybook stories = living documentation"
- "Design system as source of truth"

## Important Notes

- Tailwind v4 uses global CSS file format in `src/globals.css`
- @base-ui/react provides unstyled accessible primitives
- `cn()` utility merges Tailwind classes with proper precedence
- Design tokens centralized in `tokens.ts` (single source of truth)
- Storybook dark theme (#0a0a0a) matches presentation slides
- Component props match Figma variant properties (variant, size, state)
