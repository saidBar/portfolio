# Portfolio

Personal portfolio site, built with [Astro](https://astro.build) and published to
GitHub Pages at **https://saidbar.github.io/portfolio/**.

## Adding or editing a project

Projects are plain Markdown files in [`projects/`](projects/). The site builds one page per file.

1. Copy an existing file, e.g. `projects/marvelpedia.md`, to `projects/<your-project>.md`.
2. Update the header (between the `---` lines): `title`, `summary`, `type`, `role`, `status`,
   `startDate`, `endDate`, `order` (lower shows first), `repo`, `confidential`, `cover`, `tech`.
3. Put screenshots in `projects/images/<your-project>/` and reference them as
   `images/<your-project>/screen.png` in the text, and `./images/<your-project>/cover.png` for `cover`.
4. Push to `main`. GitHub Actions rebuilds and redeploys the site automatically.

`projects/other-work.md` feeds the "More Projects & Experience" section: each `## Heading`
becomes a card on the home page.

The hero text (name, role, intro, stack) lives in [`src/site.config.ts`](src/site.config.ts).

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # outputs to dist/
```
