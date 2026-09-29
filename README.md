# ELBA

Landing page (Russian) for ELBA — a portable device for primary health
assessment in offline rural settings.

## Stack

TanStack Start + TanStack Router, React 19, Vite 8, Tailwind CSS 4 with
shadcn/ui components.

## Development

Requires Node.js 20+.

```sh
npm install
npm run dev
```

The dev server listens on <http://localhost:8080>.

## Commands

| Command             | Description                             |
| ------------------- | --------------------------------------- |
| `npm run dev`       | Start the dev server                    |
| `npm run build`     | Production build into `.vercel/output/` |
| `npm run build:pages` | Static bundle for GitHub Pages          |
| `npm run preview`   | Serve the production build              |
| `npm run typecheck` | `tsc --noEmit`                          |
| `npm run lint`      | ESLint                                  |
| `npm run format`    | Prettier write                          |

## Deploying to GitHub Pages

The included GitHub Actions workflow publishes every push to `main` to:

<https://kevinsanchezr.github.io/elba-web/>

In the repository, open **Settings → Pages** and select **GitHub Actions** as
the source. A custom domain can be added there later, once it has been bought.

## Project structure

| Path                    | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `src/routes/index.tsx`  | The single landing page (`/`)            |
| `src/routes/__root.tsx` | App shell, global meta, 404 and error UI |
| `src/styles.css`        | Tailwind 4 theme and design tokens       |
| `public/images/`        | Product imagery (WebP)                   |
| `src/components/ui/`    | shadcn/ui primitives                     |

See `src/routes/README.md` for the file-based routing conventions and
`AGENTS.md` for the project conventions.
