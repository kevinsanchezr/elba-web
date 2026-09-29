import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

// https://vite.dev/config/
const base = process.env["BASE_URL"] ?? "/";
const isGitHubPagesBuild = process.env["GITHUB_PAGES"] === "true";

export default defineConfig({
  base,
  resolve: {
    // Native Vite 8 replacement for the vite-tsconfig-paths plugin (handles the "@/*" alias).
    tsconfigPaths: true,
    // Avoid duplicate React / TanStack copies when SSR and client graphs resolve separately.
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  plugins: [
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      // nitro/vite builds from this.
      server: { entry: "server" },
      // GitHub Pages only serves static files. This single-page landing page
      // therefore uses Start's browser-only shell when publishing there.
      spa: isGitHubPagesBuild
        ? { enabled: true, prerender: { outputPath: "/index.html" } }
        : undefined,
    }),
    viteReact(),
    tailwindcss(),
    // The normal production target remains Nitro/Vercel. Pages uses the SPA
    // shell above, so it deliberately has no server bundle.
    !isGitHubPagesBuild && nitro({ preset: "vercel", baseURL: base }),
  ],
  server: { port: 8080 },
});
