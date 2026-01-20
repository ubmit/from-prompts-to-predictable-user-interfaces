# Screenshots for Presentation

Capture these screenshots before the talk to embed in slides.

## Required Screenshots

### 1. json-render Demo

**File:** `json-render-streaming.png`
**Source:** http://localhost:3000
**Steps:**
1. Start json-render-demo: `cd json-render-demo && pnpm dev`
2. Enter prompt: "Create a welcome card with a get started button"
3. Wait for streaming to complete
4. Take screenshot showing:
   - Input form at top
   - Generated UI below (Card with title, text, button)
   - Clean, centered layout

**Recommended size:** 1280x800 (fits well in slides)
**What to highlight:** The streaming result showing structured UI

---

### 2. Feedback Loop - Login Form

**File:** `feedback-loop-form.png`
**Source:** http://localhost:3001
**Steps:**
1. Start feedback-loop-demo: `cd examples/feedback-loop-demo && pnpm dev`
2. Take screenshot showing:
   - Centered login form card
   - Email and password fields
   - Submit button
   - Blue demo callout at bottom

**Recommended size:** 1280x800
**What to highlight:** Professional login form layout

---

### 3. Design System - Storybook

**File:** `design-system-storybook.png`
**Source:** Storybook (http://localhost:6006)
**Steps:**
1. Start Storybook: `cd examples/design-system-demo && pnpm storybook`
2. Navigate to Components → Button
3. Show "Primary Default" story
4. Take screenshot showing:
   - Storybook UI with sidebar
   - Button component rendered
   - Controls panel visible
   - Dark background (#0a0a0a)

**Recommended size:** 1600x900 (capture full Storybook UI)
**What to highlight:** Component variants in sidebar

---

### 4. Figma Design System

**File:** `figma-button-variants.png`
**Source:** Figma file in browser
**Steps:**
1. Open: https://www.figma.com/design/dHqyIhebbTxZSzOun8aAaA/Simple-Design-System--Community-
2. Navigate to Button frame (nodeId: 4185:3778)
3. Take screenshot showing:
   - Button component frame
   - All 18 variants visible (grid layout)
   - Variant names visible
   - Figma UI showing properties panel

**Recommended size:** 1600x900
**What to highlight:** Grid of button variants

---

### 5. JSONL Patches (Optional)

**File:** `jsonl-patches-example.png`
**Source:** Code editor or terminal
**Steps:**
1. Open `backups/json-render/welcome-card.jsonl` in editor
2. Format nicely (one patch per line)
3. Take screenshot showing:
   - Clear JSONL format
   - Syntax highlighting (if possible)
   - Readable font size

**Recommended size:** 1280x600
**What to highlight:** Structured patch format

---

### 6. /agent-browser Output (Optional)

**File:** `agent-browser-output.png`
**Source:** Terminal or Claude interface
**Steps:**
1. Run /agent-browser validation on login form
2. Take screenshot showing:
   - Natural language output
   - Checkmarks for validated elements
   - Concise feedback

**Recommended size:** 1280x600
**What to highlight:** Text-based output (no images)

---

## Capture Settings

**Recommended tool:** macOS Screenshot (Cmd+Shift+4) or your favorite tool

**Quality:**
- Format: PNG (better for slides than JPG)
- Color profile: sRGB
- Resolution: 2x for retina displays

**Framing:**
- Center the important content
- Leave some padding around edges
- Ensure text is readable
- Dark mode for consistency

**Post-processing:**
- Crop to remove unnecessary chrome
- Ensure good contrast
- Compress if needed (keep under 500KB each)

## Adding to Slides

Screenshots are referenced in `slides.md`:

```md
---
# Slide with image

![Alt text](/screenshots/filename.png)
---
```

Slidev automatically serves files from `public/` directory.

## Backup Plan

If screenshots can't be captured:
- Slides work fine without them (text + diagrams sufficient)
- Can use code snippets instead
- Mermaid diagrams provide visual interest
- Live demos are the main visual element
