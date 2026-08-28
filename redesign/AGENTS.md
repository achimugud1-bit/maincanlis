# Instructions for AI — Canlis Website Redesign

This file is the single source of truth for how to work on this project.  
When instructions here conflict with a guess, **follow this file**.

Cursor also loads `.cursor/rules/preserve-copy.mdc` automatically in every session.

---

## What this project is

A **visual redesign** of [Canlis Restaurant](https://canlis.com)'s website — layout, typography, colors, and code — **not** a content rewrite.

- **Active site:** `redesign/` (root `index.html` redirects here)
- **Original reference:** `canlis.com/` (HTTrack mirror — use for exact copy)
- **Earlier prototype:** `pick/` (superseded; do not extend unless asked)
- **Stack:** Static HTML, CSS, and vanilla JS — no build tool, no framework
- **Local preview:** Live Server on port `5502` (see `.vscode/settings.json`)

---

## Rule 1 — Never change visible copy

**Not a single word** that appears on the page may be edited, paraphrased, shortened, or “improved.”

This includes:

- Headlines, subheads, body text, captions
- Menu items, course names, descriptions, footnotes
- Navigation labels, button text, link text
- Footer text, address, phone number, awards, press quotes
- Text inside JS templates (`headerHTML`, `footerHTML`, etc.)
- `alt` text — keep original wording; only fix if restoring from the mirror

**When unsure:** compare against `canlis.com/` or the live site and restore the original wording.

### OK to change (design & code only)

- Layout, spacing, grids, section order (when requested)
- CSS: fonts, colors, animation, responsive behavior
- HTML structure and semantics (without altering visible text)
- Image/video placement and visual hierarchy
- Navigation **patterns** (dropdown, hamburger, etc.) — same labels, new structure
- JavaScript for interactivity, shared header/footer, accessibility

### Examples

```html
<!-- ❌ BAD -->
<h2>Welcome to our table</h2>

<!-- ✅ GOOD — same words, new styling -->
<h2 class="editorial-title">The opportunity to meet and serve you is one we don't take lightly.</h2>
```

```javascript
// ❌ BAD
<a class="btn-reserve">Book now</a>

// ✅ GOOD
<a class="btn-reserve">Reserve</a>
```

---

## Rule 2 — Use original links

Every `href`, form action, and external URL must match the **original site** — not guessed or invented.

1. Check the matching page in `canlis.com/` **first** — before any web search.
2. If the URL exists in the mirror, use it exactly and **do not** web-search for alternatives.
3. Copy the exact URL, including `target` and `rel` attributes when present.
4. If the mirror slot is empty (CMS-injected content), check [canlis.com](https://canlis.com) live or ask before substituting a link.
5. Internal redesign pages use `redesign/` filenames; everything else keeps original paths.

**Do not** swap in `#`, `#reservation`, or placeholder URLs when the original has a real link.

---

## Rule 3 — Redesign, don't rebuild

- Work inside `redesign/` unless explicitly told otherwise.
- Reuse assets from `canlis.com/uploads/` where possible; don't swap in placeholder copy or stock text.
- Pages not yet redesigned (e.g. private events, gift cards) may still link to the mirror — don't rewrite their content.
- Prefer evolving the existing header/footer injection in `redesign/script.js` over duplicating markup on every page.

---

## Rule 4 — Keep changes focused

- **Minimal scope** — smallest correct diff; don't touch unrelated files.
- **Match existing conventions** — naming, CSS variables, file layout, minified vs formatted HTML style per folder.
- **No over-engineering** — no frameworks, build steps, or abstractions unless asked.
- **Comments sparingly** — only for non-obvious logic.
- **No new markdown/docs** unless you ask for them (this file is the exception).

---

## Rule 5 — Git & commits

- This repo may not use git; if it does, **only commit when you explicitly ask**.
- Never push unless asked.
- Don't commit secrets (`.env`, credentials).

---

## Rule 6 — How to verify work

Before finishing a change:

1. Visible text matches `canlis.com/` (or live site) — word for word.
2. Layout/design intent is met; no broken asset paths where files exist locally.
3. Shared chrome (header/footer) still works via `script.js` on all pages touched.
4. Mobile and desktop navigation behave correctly.

---

## File map (quick reference)

| Path | Purpose |
|------|---------|
| `redesign/index.html` | Homepage |
| `redesign/menu.html` | Menu |
| `redesign/story.html` | Our story |
| `redesign/wine.html` | Wine |
| `redesign/lounge.html` | The lounge |
| `redesign/careers.html` | Careers |
| `redesign/style.css` | Main design system |
| `redesign/pages.css` | Inner-page layouts |
| `redesign/story.css` | Story page styles |
| `redesign/script.js` | Header/footer injection + nav behavior |
| `canlis.com/` | Original site mirror (copy reference) |

---

## Adding new rules

Edit this file when you want to add or change instructions.  
For rules that must always apply in Cursor, add a matching `.mdc` file under `.cursor/rules/`.

---

*Last updated: August 2026*
