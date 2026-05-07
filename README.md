# MuraInk — Стенен печат

Marketing site for **MuraInk**, a Bulgarian wall-printing service. Single-page, static, no build step.

## What's here

- `index.html` — content (Bulgarian) with hero, services, process, surfaces, pricing, FAQ, contact
- `styles.css` — design system + the robot-drawing-on-wall hero animation (pure CSS/SVG)
- `script.js` — small interactions (scroll reveals, dynamic year)

## Open locally

Just open `index.html` in a browser. No dependencies, no Node, no build.

```bash
xdg-open index.html      # linux
open index.html          # mac
```

Or serve it for cleaner reload:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Pricing model (BGN, per m²)

Mirrors the typical Bulgarian wall-print market:

| Tier | Area      | Price   |
| ---- | --------- | ------- |
| 1    | 1st m²    | 200 lv  |
| 2    | 2nd m²    | 150 lv  |
| 3    | 3+ m²     | 110 lv  |

## Things to plug in before shipping

- Real phone, email, Facebook URL (currently the share link the owner sent)
- Real project photos in `.gallery` (replace the placeholder gradient `figure` blocks)
- Hook the contact form to Formspree / a webhook / your own backend (currently shows a thank-you message client-side only)
- Replace `og:image` and add a `favicon.ico`
- If targeting English visitors too, add a `/en` mirror or a language toggle
