# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js-based UI generator demo that converts text prompts into dynamic React components using the `@json-render` library. Claude AI generates JSON patches that are streamed to the frontend and rendered in real-time.

**Key stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, `@json-render/core` & `@json-render/react`

## Development Commands

```bash
pnpm dev          # Start dev server (http://localhost:3000)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Architecture

**Component Catalog & API Contract**
- `lib/catalog.ts`: Defines available components (Card, Button, Text) with Zod schemas for props and actions (submit, navigate)
- This catalog is used to:
  - Generate the system prompt for the LLM (`app/api/generate/route.ts`)
  - Validate runtime component props via `@json-render/core`

**Data Flow**
1. User submits prompt via form in `app/page.tsx`
2. Frontend calls `/api/generate` with prompt text
3. API sends prompt to Claude with system prompt that teaches JSONL patch format
4. Claude streams JSONL patches (set root, add elements with props/children)
5. Frontend uses `useUIStream` hook to parse patches and render via `Renderer` component
6. `components/registry.tsx` maps component types to React implementations with Tailwind styling

**Rendering System**
- `Renderer` component from `@json-render/react` handles patch application and recursive rendering
- Providers wrap the tree:
  - `DataProvider`: Manages shared data state
  - `ActionProvider`: Routes component actions (submit/navigate) with console logging
  - `VisibilityProvider`: Manages element visibility state
- Components receive `element` (props), `children` (rendered kids), and `onAction` callback

## Key Files

- `app/page.tsx`: Main client component with form and streaming UI
- `app/api/generate/route.ts`: LLM endpoint, formats system prompt with component catalog
- `components/registry.tsx`: React component implementations mapped by type
- `lib/catalog.ts`: Component schema definitions and action types
- `app/layout.tsx`: Root layout with global styles

## Notes

- Patches use flat key-based structure: `/root` for root element key, `/elements/{key}` for adding components
- Only Card component supports children; Button/Text are leaf nodes
- Component keys must be unique across the tree; children refs are string keys, not nested objects
- Tailwind v4 uses global CSS file format (check `postcss.config.mjs`)
