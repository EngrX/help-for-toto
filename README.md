# Toto — Donation Drive Site

A static, single-page fundraising site. No build step, no server — open
`index.html` in a browser, or upload the folder as-is to any static host.
This copy is already live at **github.com/EngrX/help-for-toto**, deployed via
GitHub Pages.

## Status: filled in and pushed — two things left

Everything below used to be a checklist of `[bracketed]` placeholders; almost
all of them are done. Search `index.html` for `[` and you'll only find two
left:

1. **The page's own URL**, in the "Verify before you send" note in the
   `#help` section. Once GitHub Pages gives you the live link (Settings →
   Pages → check the URL at the top), paste it in over
   `[this page's real web address]` in both the HTML comment and the text
   right below it.
2. **The Etsy shop link** — search for `href="#"` next to "Visit my Etsy
   shop" and replace it with the real shop URL. There's a `<!-- TODO -->`
   comment marking the spot.

Everything else — bank/GCash/Maya account details and QR codes, the hospital
verification card and map, the patient photo, the three document PDFs, the
story and family quote, the medical updates timeline, and the contact/footer
info — already has real content in it.

## Keeping it up to date

This is the stuff that will actually need touching as the situation changes:

- **Amount raised** — `.goal-bar-labels` in the `#help` section, and
  `.goal-bar-fill`'s inline `width` (roughly `raised ÷ current bill`, as a
  percentage).
- **Current bill / daily increase** — same goal bar, plus the September 4
  entry in the timeline and the Story section repeat this figure; keep them
  in sync when the bill is updated.
- **Guarantee letters** — the `.goal-bar-note` right under the goal bar, if
  new ones come in or amounts change.
- **Medical updates timeline** (`#updates`) — add a new `<li
  class="timeline-item">` for each update, following the existing entries'
  format (a `<span class="timeline-date">` plus a short `<p>`).
- **"Last updated" date** — appears in the hero status pill and the footer
  (`.footer-meta`); update both together so they don't fall out of sync.
- **Supporting documents** (`#updates` → Supporting documents) — if you get
  a newer medical abstract, certificate, or statement of account, just
  overwrite the existing PDF at the same filename in `assets/` and the
  "View / download" links keep working with no other changes.

## Publishing changes

The site is a normal git repo pushed to GitHub Pages, so any edit just needs:

```bash
git add -A
git commit -m "describe what changed"
git push
```

GitHub Pages rebuilds automatically within a minute or two of a push to
`main` — no separate deploy step.

## Notes

- The map uses a public Google Maps embed URL — no API key required.
- Fonts (Source Serif 4, Inter, IBM Plex Mono) load from Google Fonts, so the
  page needs internet access to render with the intended typefaces; it
  still degrades to system fonts if that request fails.
- Two background illustrations are blended into the page via
  `mix-blend-mode: multiply` so their white backgrounds disappear:
  `assets/hand-sil.avif` (praying hands, used as the hero watermark and the
  small icon above the family quote) and `assets/hand.jpg` (hands forming a
  heart, used as the watermark in the "How to Help" section). AVIF is
  supported by all current major browsers; convert to PNG with a transparent
  background instead if you need to support very old ones.
- Everything is plain HTML/CSS/JS — no dependencies, no build tools.
