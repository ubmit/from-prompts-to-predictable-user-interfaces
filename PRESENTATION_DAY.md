# Presentation Day Guide

Quick reference for running the talk "From prompts to predictable user interfaces"

## 🎯 Critical Pre-Talk Checklist

### Must Complete Before Talk

- [x] **Capture screenshots** (15 min) - See `slides/public/screenshots/README.md`
- [x] **Install dependencies** (20 min) - See commands below
- [x] **Test all demos** (10 min) - Ensure each runs without errors
- [ ] **Practice run** (1-2 hours) - Time yourself, aim for 28 min + 2 min Q&A

**Total critical work:** ~45 minutes minimum

---

## 🚀 Quick Start Commands

### Step 1: Install Dependencies (First Time Only)

```bash
# Install all dependencies
cd examples/json-render-demo && pnpm install && cd ..
cd examples/design-system-demo && pnpm install && cd ../..
cd examples/feedback-loop-demo && pnpm install && cd ../..
cd slides && pnpm install && cd ..
```

**Time:** ~5 minutes (downloads)

---

### Step 2: Start All Demos (4 Terminals)

Open 4 terminal windows/tabs and run:

**Terminal 1 - json-render demo:**
```bash
cd examples/json-render-demo
pnpm dev
```
→ http://localhost:3000

**Terminal 2 - feedback-loop demo:**
```bash
cd examples/feedback-loop-demo
pnpm dev
```
→ http://localhost:3001

**Terminal 3 - design-system demo:**
```bash
cd examples/design-system-demo
pnpm storybook
```
→ http://localhost:6006

**Terminal 4 - slides:**
```bash
cd slides
pnpm dev
```
→ http://localhost:3030 (presenter mode)

**Time:** ~2 minutes (startup)

---

### Step 3: Open Browser Tabs

```bash
# macOS
open http://localhost:3000  # json-render
open http://localhost:3001  # feedback-loop
open http://localhost:6006  # storybook
open http://localhost:3030  # slides (presenter mode)

# Linux
xdg-open http://localhost:3000
xdg-open http://localhost:3001
xdg-open http://localhost:6006
xdg-open http://localhost:3030
```

**Also open:**
- Figma file: https://www.figma.com/design/dHqyIhebbTxZSzOun8aAaA/
- Code editor with repo open
- Terminal ready for /agent-browser commands

---

## 📋 Demo Prompts (Ready to Paste)

### Part 1: json-render Demo

**Prompt for localhost:3000:**
```
Create a welcome card for the Frontend.OPO #9 event with a button that navigates to their website https://frontendporto.dev/
```

**Expected:** Card → Text → Button streaming in real-time

**Backup:** `backups/json-render/welcome-card.jsonl`

---

### Part 2: feedback-loop Demo

**Prompt for /agent-browser:**
```
Navigate to http://localhost:3001 and validate the login form layout. Check if the email input, password input, and submit button are all visible and properly positioned.
```

**Expected:** Natural language validation (~500 bytes)

**Backup:** `backups/feedback-loop/agent-browser-validation.txt`

---

### Part 3: design-system Demo

**No live demo needed** - Just show:
1. Figma file (Button component with 18 variants)
2. `src/tokens.ts` (extracted design tokens)
3. `src/components/button.tsx` (generated component)
4. Storybook at localhost:6006 (all Button stories)

**Explain:** Figma MCP workflow without running it live (rate limits)

---

## ⏱️ Presentation Timing

| Section | Slides | Time |
|---------|--------|------|
| Intro | 1-3 | 2 min |
| Part 1: json-render | 4-8 | 10 min |
| Part 2: Feedback loops | 9-14 | 10 min |
| Part 3: Design to code | 15-20 | 8 min |
| Wrap-up | 21-22 | 2 min |
| **Total** | **22 slides** | **30 min** |

**Target:** Finish at 28 min, leave 2 min for Q&A

---

## 🎬 Presentation Flow

### Part 1: json-render (10 min)

1. **Slides 4-6:** Explain architecture (catalog → system prompt → JSONL → React)
2. **Slide 7:** Show screenshot of example output
3. **Live Demo:** Switch to localhost:3000
   - Paste prompt
   - Show streaming UI generation
   - Explain: "Structured output = predictable results"
4. **Slide 8:** Transition to Part 2

---

### Part 2: Feedback Loops (10 min)

1. **Slides 9-12:** Explain why feedback matters, compare /agent-browser vs Playwright MCP
2. **Slide 13:** Show screenshot of login form
3. **Live Demo:** Switch to localhost:3001
   - Show form in browser
   - Run /agent-browser validation in terminal
   - Show natural language output
   - Explain: "No screenshots = context preserved"
4. **Slide 14:** Transition to Part 3

---

### Part 3: Design to Code (8 min)

1. **Slides 15-18:** Explain design-dev gap, Figma MCP workflow, tools
2. **Slide 19:** Show Figma vs Storybook screenshots side-by-side
3. **Live Demo:**
   - Show Figma file (Button with 18 variants)
   - Show `src/tokens.ts` in editor
   - Show `src/components/button.tsx` in editor
   - Open Storybook (localhost:6006)
   - Navigate through Button stories
   - Explain: "Design system as source of truth"
4. **Slide 20:** Transition to wrap-up

---

### Wrap-up (2 min)

1. **Slide 21:** Key takeaways (3 constraints)
2. **Slide 22:** Thank you + Q&A

---

## 🆘 Troubleshooting

### Demo Failures

**If json-render API fails:**
- Show `backups/json-render/welcome-card.jsonl` in editor
- Explain: "This is what Claude would generate"
- Continue smoothly

**If /agent-browser unavailable:**
- Show `backups/feedback-loop/agent-browser-validation.txt`
- Explain: "This is the natural language output"
- Emphasize ~500 bytes vs ~50KB

**If Storybook won't start:**
- Show screenshots of Button variants
- Walk through component code in editor

### Port Conflicts

If ports are in use:
```bash
# Find and kill processes
lsof -ti:3000 | xargs kill -9  # json-render
lsof -ti:3001 | xargs kill -9  # feedback-loop
lsof -ti:6006 | xargs kill -9  # storybook
lsof -ti:3030 | xargs kill -9  # slides
```

### Missing Dependencies

If demos won't start:
```bash
# Re-install in specific demo
cd examples/json-render-demo  # or other demo
rm -rf node_modules
pnpm install
```

---

## 📸 Screenshot Checklist

Before the talk, capture these in `slides/public/screenshots/`:

- [x] `json-render-streaming.png` - json-render demo output
- [x] `feedback-loop-form.png` - Login form
- [x] `figma-button-variants.png` - Figma Button variants
- [x] `design-system-storybook.png` - Storybook UI

**See:** `slides/public/screenshots/README.md` for detailed capture guide

**Note:** Slides work without screenshots but visuals help

---

## 🎤 Talking Points Cheatsheet

### Part 1: json-render
- "AI-generated UIs are unpredictable by nature"
- "Structured output constrains generation"
- "Component catalog = contract between AI and renderer"
- "JSONL patches = incremental updates, not full rewrites"

### Part 2: Feedback Loops
- "LLMs generate code, not pixels"
- "Visual validation catches what code review can't"
- "/agent-browser: natural language = context efficient"
- "Playwright MCP: screenshots = context expensive"
- "For agentic workflows, context budget matters"

### Part 3: Design to Code
- "Traditional handoff loses fidelity"
- "Figma MCP extracts design intent, not just pixels"
- "Design tokens become TypeScript constants"
- "Storybook = living documentation"
- "Design system as single source of truth"

---

## 📦 Backup Materials Locations

Quick access if live demos fail:

```
backups/
├── json-render/
│   └── welcome-card.jsonl              # Pre-generated JSONL
├── feedback-loop/
│   └── agent-browser-validation.txt    # Example validation output
└── README.md                           # Fallback strategies
```

---

## ✅ Final Checklist (5 min before talk)

- [x] All 4 terminals running demos
- [x] All browser tabs open (3000, 3001, 6006, 3030)
- [x] Figma file open
- [x] Code editor open to repo
- [x] Terminal ready for /agent-browser
- [ ] Backup files accessible
- [x] Demo prompts ready to paste
- [x] Presenter mode active (press 'P' in slides)
- [ ] Timer ready (30 min)
- [ ] Water nearby
- [ ] Deep breath 😊

---

## 🎯 Success Metrics

**Minimum viable talk:**
- ✅ Explain 3 constraints clearly
- ✅ Show at least 1 live demo (preferably json-render)
- ✅ Demonstrate context window difference
- ✅ Finish within 30 minutes

**Ideal talk:**
- ✅ All 3 live demos work
- ✅ Screenshots visible in slides
- ✅ Smooth transitions
- ✅ Engaging Q&A

---

## 📞 Emergency Contacts

**If something breaks:**
1. Stay calm
2. Use backup materials
3. Explain what would have happened
4. Audience cares about concepts, not perfect execution

**Repository:** https://github.com/ubmit/from-prompts-to-predictable-user-interfaces

Good luck! 🚀
