# Fonts

Self-hosted so the tool runs from disk as well as from GitHub Pages, and so
that opening `index.html` sends no request to any third party.

Latin subset only. Archivo and Literata are variable fonts: one file each
covers weights 400-700.

| File | Family | Weights | Used for |
|---|---|---|---|
| `literata-var.woff2` | Literata | 400-700 | Section headings |
| `archivo-var.woff2` | Archivo | 400-700 | Body and UI |
| `space-mono-400.woff2` | Space Mono | 400 | Figures, tables, readouts |
| `space-mono-700.woff2` | Space Mono | 700 | Figures, emphasis |
| `russo-one-400.woff2` | Russo One | 400 | Wordmark only |

All four families are licensed under the SIL Open Font License 1.1 and were
retrieved from Google Fonts. The full licence text for each is published with
its source:

- Literata: https://github.com/googlefonts/literata
- Archivo: https://github.com/Omnibus-Type/Archivo
- Space Mono: https://github.com/googlefonts/spacemono
- Russo One: https://github.com/googlefonts/russoone

To refresh a file, request the family from `fonts.googleapis.com/css2` with a
modern browser user agent and download the `latin` subset `woff2` it names.
