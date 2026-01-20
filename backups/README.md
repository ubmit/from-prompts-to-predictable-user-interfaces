# Backup Materials

Pre-generated outputs for live demo safety during the talk presentation.

## Purpose

Live coding demos can fail due to:
- Network issues (Claude API)
- Environment problems (ports in use)
- Rate limits (Figma MCP)
- Browser quirks
- Murphy's Law

These backups ensure the talk can continue smoothly even if live demos fail.

## Contents

### json-render/

Pre-generated JSONL patches for common prompts:

- `welcome-card.jsonl` - Welcome card with button example
- Shows structured output format
- Can be manually streamed or displayed

**Fallback strategy:**
1. If API fails, show this file in editor
2. Explain: "This is what Claude would generate"
3. Can manually paste into demo UI if needed

### feedback-loop/

Pre-captured /agent-browser validation outputs:

- `agent-browser-validation.txt` - Full validation report for login form
- Shows natural language feedback
- Demonstrates context efficiency

**Fallback strategy:**
1. If /agent-browser unavailable, show this file
2. Explain: "This is what /agent-browser returns"
3. Point out: no screenshots, just ~800 bytes of text

### design-system/

Pre-extracted Figma design context and generated components:

- (Created during talk prep with Figma MCP calls)
- Component code snapshots
- Design token exports
- Storybook story examples

**Fallback strategy:**
1. If Figma MCP rate limited, show extracted code
2. If Storybook won't start, show screenshots
3. Have component code ready in editor

## Usage During Talk

**Best case:** All live demos work
- Don't mention backups
- Show real-time generation

**Backup scenario:** Demo fails
- Acknowledge: "Live demo having issues"
- Pivot: "Here's what it would have generated"
- Show backup file
- Continue smoothly

**Key principle:** Audience doesn't need to see live generation to understand the concept. Pre-generated outputs are equally educational.

## Creating Additional Backups

Before the talk, run each demo and capture:

**json-render:**
```bash
cd examples/json-render-demo
pnpm dev
# Test various prompts
# Copy JSONL from network tab to backups/
```

**feedback-loop:**
```bash
cd examples/feedback-loop-demo
pnpm dev
# Run /agent-browser validation
# Copy output to backups/
```

**design-system:**
```bash
cd examples/design-system-demo
pnpm storybook
# Take screenshots of Button variants
# Save to backups/design-system/screenshots/
```

## Presentation Day Checklist

- [ ] All backup files present and up-to-date
- [ ] Backup files open in editor tabs (hidden)
- [ ] Screenshots easily accessible
- [ ] Know which backup to use for each demo
- [ ] Practice smooth transition to backups
- [ ] Test loading backup content quickly

## Recovery Time

Practice these until each takes <30 seconds:
- Show backup JSONL file
- Navigate to backup validation output
- Display backup component code
- Switch to backup screenshots

Time is precious in a 30-minute talk. Smooth backup transitions maintain momentum.
