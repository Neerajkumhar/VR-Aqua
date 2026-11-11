---
name: VR AQUA — Graphite Still Life
description: A matte graphite product monograph for custom-labelled bottled water.
colors:
  graphite: "#0C0E11"
  charcoal: "#12161B"
  paper: "#E9E9E7"
  steel: "#9299A1"
  steel-deep: "#7E8994"
  highlight: "#FFFFFF"
  water: "#258FC1"
  water-soft: "rgba(37, 143, 193, 0.13)"
  water-wash: "rgba(37, 143, 193, 0.1)"
  water-wash-soft: "rgba(37, 143, 193, 0.055)"
  hairline: "#30363D"
  hairline-soft: "rgba(48, 54, 61, 0.62)"
  danger: "#FFADAD"
  scrim: "rgba(6, 8, 11, 0.74)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 1.55rem + 2.4vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.022em"
  hero:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 4.65vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.028em"
  hero-stacked:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1.21rem + 0.7vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "IBM Plex Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
  input:
    fontFamily: "IBM Plex Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  logo:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.07em"
  menu-link:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.35rem, 6vw, 1.9rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  industry:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2.125rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  industry-mobile:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.4rem, 5.6vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  micro:
    fontFamily: "IBM Plex Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "64px"
  "9": "96px"
  "10": "128px"
  gutter: "clamp(20px, 4vw, 72px)"
  section: "clamp(72px, 8vw, 120px)"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14.4px 25.6px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.highlight}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.none}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14.4px 25.6px"
    height: "52px"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    size: "44px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 0"
  text-field:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.input}"
    rounded: "{rounded.none}"
    padding: "8.8px 0"
    height: "44px"
  radio-chip:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
    height: "44px"
---

# Design System: VR AQUA — Graphite Still Life

## Overview

**Creative North Star: "Graphite Still Life"**

A darkroom catalogue plate for real packaging: a matte graphite field, one bottle at a time, and type that behaves like a caption rather than a campaign. There are no lifestyle photographs, no slogans, and no decorative apparatus. The bottle is the subject; the page is the room around it.

The world is built from two close graphite tones, a single water blue, and two typefaces. Archivo gives the headings geometric authority; IBM Plex Sans keeps every paragraph, label and form control plain and legible. Surfaces stay flat, corners stay square, and rules are hairlines. The only atmospheric moment is the hero, where a soft water-refraction wash sits behind the bottle and then disappears for the rest of the page.

**Key Characteristics:**
- Tonal graphite bands instead of cards; no two consecutive sections share a background.
- Real bottle artwork at full scale, transparent and uncropped, arranged along a shallow arc and rotated through one exhibition track.
- Archivo display against IBM Plex Sans body, with one fluid scale and no micro-captions.
- One water blue used for state and light, never as a decorative theme.
- Square corners, hairline rules, and motion limited to entrances, reveals, and the carousel's steady rotation.

## Colors

A near-black neutral field with one cool blue and no second accent.

### Primary
- **Water** (#258FC1): focus rings, active size underlines, process numbers, field requirements, selection, and the soft radial light behind the hero bottle. It is a state and light color, not a fill.
- **Water Soft** (rgba(37, 143, 193, 0.13)): the selected radio chip ground only.
- **Water Wash** (rgba(37, 143, 193, 0.1)) and **Water Wash Soft** (rgba(37, 143, 193, 0.055)): the two documented hero refraction values. They exist once, in the hero wash, and are not reused elsewhere.

### Neutral
- **Graphite** (#0C0E11): page ground, hero, collection, categories, footer.
- **Charcoal** (#12161B): introduction, process, contact — one tonal step above the ground.
- **Paper** (#E9E9E7): display headings, product names, active controls, primary button ground.
- **Steel** (#9299A1): body copy, navigation at rest, secondary labels.
- **Steel Deep** (#7E8994): optional-field hints, footer copyright, placeholders.
- **Highlight** (#FFFFFF): hover text and the primary button hover ground.
- **Hairline** (#30363D): rules, field underlines, and the carousel's control divider.
- **Hairline Soft** (rgba(48, 54, 61, 0.62)): low-contrast dividers in the footer and mobile menu.
- **Danger** (#FFADAD): invalid field rules and validation messages after a failed submit.
- **Scrim** (rgba(6, 8, 11, 0.74)): the backdrop behind the mobile menu dialog.

### Named Rules
**The One Water Note Rule.** Blue never fills a section, a card, or a heading. It appears as light, focus, or a 1px state marker, and occupies less than 5% of any viewport.

**The No Second Accent Rule.** There is no secondary brand hue. Warm colors exist only as the danger state.

## Typography

**Display Font:** Archivo (with Helvetica Neue, Arial)
**Body Font:** IBM Plex Sans (with Helvetica Neue, Arial)
**Label Font:** IBM Plex Sans

**Character:** Industrial and quiet. Archivo carries short uppercase statements with tight tracking; IBM Plex Sans does all reading, navigation, metadata and form work. No third family, no italic editorial voice, no letter-spaced all-caps micro-labels.

### Hierarchy
- **Hero** (600, clamp 2.6–4.25rem, 0.98): the two-line hero statement; stacks to clamp 2.4–4rem below 1024px.
- **Display** (500, clamp 2.1–3.5rem, 1.02): every section heading. Tracking −0.022em, balanced wrapping, sentence case except where the supplied copy is uppercase.
- **Title** (500, clamp 1.375–1.75rem, 1.15): product names, process step titles.
- **Industry** (500, clamp 1.5–2.125rem, 1.15): the categories list, narrowing to clamp 1.4–1.75rem on small screens.
- **Body** (400, clamp 1–1.0625rem, 1.65): paragraphs, capped near 34ch in split layouts and 40ch in running text.
- **Label** (400, 0.875rem): navigation, buttons, form labels, metadata, footer. Never smaller than 0.875rem.
- **Input** (400, 1rem): typed values and selects.
- **Logo** (600, 1.0625rem, 0.07em): the two-word wordmark.

### Named Rules
**The Two Family Rule.** Archivo and IBM Plex Sans are the only typefaces. If a piece of text cannot be set in one of them, it does not belong on the page.

**The No Micro-Caption Rule.** No 10px uppercase captions, section indices, vertical labels, or decorative metadata. Small text starts at 0.875rem and must carry real information.

**The One Sentence Case Rule.** Copy is written in sentence case unless it is a supplied headline or an action label. Small caps, spaced capitals, and mixed tracking are not used to manufacture hierarchy.

## Layout

A 12-column grid inside a 90rem container with a fluid gutter of `clamp(1.25rem, 4vw, 4.5rem)`. Sections use `clamp(4.5rem, 8vw, 7.5rem)` of vertical padding. The page alternates three graphite tones: hero `#0C0E11`, introduction `#12161B`, collection `#0C0E11`, process `#12161B`, categories `#0C0E11`, contact `#12161B`, footer `#0C0E11`.

Every section has a different spatial idea. The hero is an 8/4 split: headline, lede and actions on the left, one tall bottle on the right. The introduction is a 7/5 statement spread. The collection is a single semi-circular exhibition track: one featured bottle at the centre, smaller neighbours riding up and outward, with the active product named below. Process is three equal numbered columns. Categories are a 5/7 heading-and-list spread. Contact is a 0.85/1.15 statement-and-form spread. The footer is a simple three-column index.

Breakpoints are 1024px (hero stacks; header CTA hides), 900px (collection heading and note stack; process, categories, introduction and footer collapse), 880px (carousel drops to two visible neighbours), 860px (desktop navigation becomes the full-screen menu), 620px (carousel drops to one neighbour; single-column form rows, full-width buttons), and 380px (the logo mark hides). Layouts adapt by changing columns; type is not shrunk to preserve a desktop arrangement.

**The No Repeated Layout Rule.** No two consecutive sections share the same split or the same background tone. The carousel is the only repeated module, and its arc is one continuous composition rather than a grid.

## Elevation & Depth

The system is flat at rest. Depth comes from three tonal bands, hairline rules, and the natural footprint beneath the bottle artwork. Nothing floats, lifts on hover, or carries a resting card shadow.

### Shadow Vocabulary
- **Bottle Footprint** (`drop-shadow(0 2.5rem 2rem rgba(0, 0, 0, 0.42))`): used once, on the hero bottle, to seat it on the page. Collection bottles are unshadowed so their transparency stays literal.

**The Flat At Rest Rule.** If an element needs separation, add a tonal field or a 1px rule. Do not add a panel shadow, glass blur, or glow.

## Shapes

Square is the only component corner. Buttons, inputs, chips, dialogs and cards all resolve to 0 radius. Borders are 1px and always `#30363D` or its soft variant. The single rounded value in the system is the browser scrollbar thumb.

**The Hairline Rule.** Structure is drawn with a 1px rule, never with a container outline or a 2px divider. The carousel has no frame at all: its bottles sit directly on the graphite ground, separated by space and scale alone.

## Components

### Buttons
- **Shape:** square, 52px minimum height, padding `0.9rem 1.6rem`.
- **Primary:** paper ground with graphite text; hover moves to pure white.
- **Outline:** transparent ground, hairline border, paper text; hover raises the border to steel.
- **Focus:** a 2px water outline with 3px offset; the primary button switches the outline to white.
- **Mobile:** buttons go full width below 520px, except compact header actions.

### Chips
- **Style:** the only chip is the bottle-size radio in the inquiry form — square, 44px tall, hairline border, steel text.
- **State:** selected chips take a water border and the water-soft ground; unselected chips lighten their border on hover.

### Cards / Containers
- **Corner Style:** square.
- **Background:** none. Products are not carded: each bottle file sits directly on the graphite ground, with its name and sizes in one line below the track. There is no tile, plate, border, shadow, or hover panel.
- **Shadow Strategy:** image-only bottle footprint in the hero; nothing in the collection.
- **Internal Padding:** none. The track is separated from the heading by `clamp(2.5rem, 5vw, 4.5rem)` and from the active product line by `clamp(1.6rem, 2.6vw, 2.1rem)`.

### Inputs / Fields
- **Style:** transparent ground, bottom hairline only, 44px minimum height, square corners.
- **Focus:** the underline turns water blue; there is no glow or filled state.
- **Error:** the underline and message turn danger (#FFADAD); the first invalid field receives focus.

### Navigation
- Fixed header, transparent until 28px of scroll, then a blurred graphite bar with a soft hairline.
- Four links in IBM Plex Sans at 0.875rem, steel at rest, paper when active, with a 1px water underline that scales in from the right.
- Mobile: a full-screen graphite dialog with Archivo links at clamp 1.35–1.9rem, scroll lock, Escape to close, and focus returned to the toggle.

### Bottle Carousel
The signature component. Every supplied bottle file appears once on a shallow semi-circular track, uncropped and transparent, with no study number, category, description, or price. The centre bottle is largest (280px on desktop) and upright; neighbours step down in size (210/168/148px) and lift up the arc, with the outermost pair fading toward the edges. Desktop shows three neighbours either side, tablet two, mobile one with partial side bottles.

- **Motion:** the track advances one position every 1.8s with a 700ms ease-out slide. Manual navigation re-arms the full interval, so a hand-off never accelerates. There are no visible slider controls, arrows, or pagination dots.
- **Hover:** pauses immediately; the hovered bottle scales 1.12, rises above its neighbours, and reveals its business name and format. Leaving restores the arc and resumes from the current position without resetting.
- **Input:** mouse drag and touch swipe move the arc continuously with the pointer and snap to the nearest position; a 2s cooldown follows a drag before autoplay resumes. The track responds to arrow keys when focused, without drawing visible controls.
- **Pause conditions:** hover, keyboard focus, active drag, off-viewport, and hidden tab all suspend autoplay. `prefers-reduced-motion` disables autoplay entirely and reduces transitions while keeping every manual control.
- **Information:** one line below the track names the active business in Archivo and lists only its available formats. No duplicate captions, counters, or collection imagery appear elsewhere.

### Inquiry Form
A ruled brief rather than a card: two-column rows on desktop, one column on mobile, bottom-rule inputs, sentence-case labels, square radio chips, and a paper submit button. Because no contact endpoint was supplied, a valid submit copies the completed brief to the clipboard and states that direct delivery is not yet configured; a configured email or WhatsApp channel would replace that fallback.

## Do's and Don'ts

### Do:
- **Do** alternate `#0C0E11` and `#12161B` between sections, keeping collection bottles straight on the graphite ground with no plate behind them.
- **Do** keep the hero to one bottle, one water wash, and the two supplied headline lines.
- **Do** let real product files determine scale: `object-fit: contain`, natural proportions, no crop or recolor.
- **Do** set every small label at 0.875rem or larger in IBM Plex Sans.
- **Do** use a 1px `#30363D` rule for structure and 0 radius for every control.
- **Do** pause the carousel for hover, focus, drag, off-screen, and hidden-tab states, and disable autoplay under `prefers-reduced-motion`.
- **Do** respect `prefers-reduced-motion` by removing entrances, reveals, and image transitions.

### Don't:
- **Don't** add slogans, testimonials, statistics, certifications, prices, or invented contact details.
- **Don't** add section indices, ghost numerals, vertical labels, micro-captions, or outlined footer wordmarks.
- **Don't** wrap bottles in tiles or panels, add category filters, or show more than the business name and available sizes.
- **Don't** rotate, tilt, crop, recolor, or shadow the collection artwork, or repeat collection images elsewhere on the page.
- **Don't** use stock water photography, large background images, glassmorphism, gradients beyond the hero wash, or a second accent color.
- **Don't** use a third typeface, italic editorial serif, spaced uppercase captions, or more than one weight per heading block.
