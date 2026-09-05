# Toto — Donation Drive Site

A static, single-page fundraising site. No build step, no server — open
`index.html` in a browser, or upload the folder as-is to any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, or a plain web host).

## Before you publish, replace every `[bracketed]` placeholder

Open `index.html` and search for `[` — every bracket is a spot that needs
real information. In order of importance:

### 1. Money — done, one step left
- **Account details** (Bank/BPI, GCash, Maya) are filled in with the real
  account names and numbers.
- **QR codes**: the page already points at `assets/bank.jpg`, `assets/gcash.jpg`,
  and `assets/maya.jpg` — just drop the exported QR images into `assets/`
  with those exact filenames and they'll appear automatically, nothing else
  to change. Export each one from the source app so it actually works for
  payment:
  - GCash: app → **Receive Money** → save the QR image as `gcash.jpg`.
  - Maya: app → **Receive Money** / **My QR** → save the QR image as `maya.jpg`.
  - Bank: many Philippine banks support InstaPay QR Ph in-app; save that as
    `bank.jpg`, or if yours doesn't, a plain text/logo image is fine since
    the account details above already cover manual transfers.
- **Goal bar** (`#help` section): update `.goal-bar-fill`'s `width` and the
  raised-amount label periodically as donations come in.

### 2. Hospital / verification (`#verification` section)
- Hospital name, ward/room, case or admission reference number, attending
  physician.
- The embedded map: replace the placeholder text in both the `iframe src`
  and the "Open in Google Maps" link with the hospital's exact name and
  address (URL-encode spaces as `+` or `%20`).

### 3. Patient story (`#story-top` and `#story` sections)
- Full legal name, age, diagnosis, admission date, hospital name.
- Rewrite the two placeholder paragraphs in your own words — specific,
  honest details build more trust than generic appeals.
- Swap the family quote for a real one, or delete the `<blockquote>` block.

### 4. Photo and documents
- Hero photo is done — `assets/patient.jpg`. To swap it for a different photo
  later, just replace that file (same name) or update the `<img class="id-photo">`
  `src` in `index.html`. The crop is controlled by `object-position` on
  `.id-photo` in `style.css` if a new photo needs reframing.
- The three document cards (`#updates` section) link to PDFs, not images —
  `assets/medical-abstract.pdf`, `assets/medical-certificate.pdf`, and
  `assets/statement-of-account.pdf`. Add real PDFs with those exact filenames
  and the "View / download" links start working automatically; nothing else
  to change. **Redact anything sensitive** — other patients' names, insurance
  numbers, full addresses — before adding files here.
  - If you only have photos of the documents (not scans), most phones can
    save a photo as a PDF directly — iPhone Notes app → scan → share as PDF,
    or Google Drive's scan feature on Android — rather than uploading raw
    JPGs, which don't preview or print as cleanly.

### 5. Updates timeline (`#updates`)
- Fill in the three dated entries with real updates; add more `<li
  class="timeline-item">` entries as treatment continues.

### 6. Contact / footer (`#contact`)
- Family coordinator's name, phone number, email.
- The disclaimer paragraph is there deliberately — it's honest and it
  builds trust with people who don't know the family personally. Keep it,
  just adjust the wording if needed.

## Notes

- QR codes are generated on the fly via `api.qrserver.com` for the sample
  placeholders only — once you swap in real QR images from your banking/
  e-wallet apps, the page no longer depends on that service.
- The map uses a public Google Maps embed URL — no API key required.
- Fonts (Source Serif 4, Inter, IBM Plex Mono) load from Google Fonts, so the
  page needs internet access to render with the intended typefaces; it
  still degrades to system fonts if that request fails.
- The hero background watermark is `assets/hand-sil.avif` — a black-ink
  illustration blended into the page via `mix-blend-mode: multiply` so its
  white background disappears. AVIF is supported by all current major
  browsers; if you need to support very old browsers, convert it to PNG
  with a transparent background instead and drop the blend-mode rule.
- Everything is plain HTML/CSS/JS — no dependencies, no build tools.
