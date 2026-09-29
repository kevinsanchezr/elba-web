# ELBA — landing page

Landing page for ELBA, a portable device for primary health assessment in
offline rural settings. Single Russian-language product page served at `/`.

## Project architecture

- Keep the ELBA site as a single Russian-language product page at `/`; this preserves a focused presentation for the concept-stage device.
- Product imagery lives in `public/images/` as WebP. Reference it by absolute
  path (`/images/<file>.webp`); do not import images as modules.
- TanStack Start uses file-based routing — see `src/routes/README.md`. The only
  root layout is `src/routes/__root.tsx`; `routeTree.gen.ts` is auto-generated.

## Stack

- TanStack Start + TanStack Router, React 19, Vite 8
- Tailwind CSS 4 (design tokens in `src/styles.css`), shadcn/ui components
- Nitro 3 with the `vercel` preset for production builds

## Commands

```sh
npm install       # install dependencies
npm run dev       # dev server
npm run build     # production build -> .vercel/output/
npm run preview   # serve the production build
npm run typecheck # tsc --noEmit
npm run lint      # eslint
npm run format    # prettier --write
```

## Deploying to Vercel

`npm run build` emits a Vercel Build Output API bundle to `.vercel/output/`,
with the Nitro SSR function and static assets. Connect the repo at vercel.com
and keep the defaults — Vercel detects the Nitro framework and runs
`npm run build`. No environment variables are required.
