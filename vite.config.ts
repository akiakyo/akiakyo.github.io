import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // IMPORTANT: replace "my-portfolio" with your GitHub repo's exact name.
  // e.g. if your repo is github.com/yourname/portfolio-site, use "/portfolio-site/"
  // If you deploy to a custom domain or a <username>.github.io repo, use "/" instead.
  base: "/my-portfolio/",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
