# Feedback Loop Workflow

Demo for talk Part 2: Visual validation with /agent-browser skill

## Scenario

Validate a login form UI using /agent-browser, demonstrating how natural language feedback enables iterative refinement without bloating context.

## Steps

### 1. Initial Generation

Form already exists at `app/page.tsx` with:
- Email input field
- Password input field
- Remember me checkbox
- Submit button
- Sign up link
- Demo purpose callout

### 2. Visual Validation with /agent-browser

Start dev server:
```bash
cd examples/feedback-loop-demo
pnpm dev  # Runs on http://localhost:3001
```

Use /agent-browser skill:
```
Navigate to http://localhost:3001 and validate:
1. Form is centered on page
2. Email and password inputs are visible and labeled
3. Submit button is prominently displayed
4. Form has proper visual hierarchy
5. Elements are properly aligned
```

**Expected /agent-browser output:**
- Natural language description: "Form centered in viewport, white card on gray background, email field at top, password below, blue submit button, all elements properly aligned"
- Element visibility status: email input (visible), password input (visible), submit button (visible)
- Layout observations: "Good visual hierarchy, clear labels, adequate spacing"
- No screenshots bloating context

### 3. Iteration Based on Feedback

If /agent-browser reports issues:
- "Email field placeholder too subtle" → Adjust placeholder opacity
- "Submit button not prominent enough" → Increase size/contrast
- "Spacing between inputs cramped" → Add more gap

Make changes, re-validate with /agent-browser.

### 4. Comparison: Playwright MCP Approach

Same validation with Playwright MCP:
```typescript
// Would require:
mcp__playwright__browser_navigate({ url: "http://localhost:3001" })
mcp__playwright__browser_snapshot({ filename: "login-form.md" })
mcp__playwright__browser_take_screenshot({ filename: "login-form.png" })
```

**Playwright MCP output:**
- Full page snapshot (markdown with accessibility tree)
- Base64 PNG screenshot embedded in response
- ~50KB+ added to context window per screenshot
- Full browser control capability

## Key Differences

| Aspect | /agent-browser | Playwright MCP |
|--------|----------------|----------------|
| Output format | Natural language | Markdown + base64 images |
| Context impact | Low (~1KB) | High (~50KB+) |
| Use case | Quick visual checks | Deep inspection |
| Iteration speed | Fast (text-based) | Slower (image-heavy) |
| Precision | Semantic validation | Pixel-perfect validation |

## When to Use Each

**Use /agent-browser when:**
- Validating layout/positioning
- Checking element visibility
- Testing interaction states
- Iterating rapidly on visual design
- Context window preservation matters

**Use Playwright MCP when:**
- Pixel-perfect comparison needed
- Screenshot documentation required
- Complex multi-step flows
- Full browser automation needed
- Visual regression testing

## Talk Demo Script

1. Start: "Let's validate this login form using feedback loops"
2. Show form in browser (already running on localhost:3001)
3. Run /agent-browser validation
4. Show natural language output (highlight: no screenshots in context)
5. Make a deliberate issue (e.g., hide submit button CSS)
6. Re-validate, show /agent-browser catches it
7. Fix issue, validate again
8. Compare context window size vs Playwright approach
9. Explain: "For agentic workflows, /agent-browser preserves context budget for actual code changes"

## Example /agent-browser Session

```
Prompt: "Navigate to http://localhost:3001 and check if the login form is properly displayed"

/agent-browser output:
✓ Page loaded successfully
✓ Login form card visible at center
✓ Email input: visible, properly labeled, placeholder present
✓ Password input: visible, properly labeled, placeholder present
✓ Submit button: visible, blue background, prominent
✓ Visual hierarchy: excellent (title → inputs → button → footer)
✓ Accessibility: labels properly associated with inputs
⚠ Minor: "Forgot password" link small, could be more prominent

Overall: Form displays correctly with good UX
```

This natural language output:
- Validates all key elements
- Identifies minor improvement opportunity
- Uses ~500 bytes vs ~50KB for screenshots
- Enables 100+ iterations within typical context window
