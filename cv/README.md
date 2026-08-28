# CV

Source of truth for my CV. Each variant is a single self-contained HTML file that
renders to a one-page A4 PDF.

| Variant | Source | For |
| --- | --- | --- |
| Full Stack Developer | `DinhQuocChuong_FullStackDeveloper_CV.html` | Product / SaaS roles. This is the one the portfolio serves. |
| Backend Engineer | `DinhQuocChuong_BackendEngineer_CV.html` | ERP, accounting and business-systems roles. |

`archive/` holds superseded versions kept only for reference.

## Editing

Edit the `.html` file, then re-render:

```bash
yarn cv:build                 # all variants
yarn cv:build FullStack       # just one
```

The script drives headless Chrome, so there is nothing to install. If Chrome is
not in a standard location, point at it:

```bash
CHROME_PATH="/path/to/chrome" yarn cv:build
```

## Conventions

- **File name:** `{FullNameNoSpaces}_{RoleNoSpaces}_CV.pdf` — ASCII only, no
  version numbers or dates. The role in the file name must match the title
  printed on the CV itself.
- **Vietnamese characters** are written as HTML entities (`&#272;inh`) so the
  file stays pure ASCII and cannot be corrupted by an editor guessing the wrong
  encoding.
- **One page.** Both columns are fixed-height with `overflow: hidden`, so content
  that does not fit is silently clipped rather than flowing onto page two.
  Always eyeball the rendered PDF after editing.
- **Leave ~10mm** of clear space at the bottom of both columns, so printers with
  a forced margin do not cut the last line.

## Portfolio link

`src/components/about/About.tsx` imports the Full Stack PDF from this folder and
serves it behind the *download CV* button. Renaming the file means updating that
import too.
