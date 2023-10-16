import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import embeds from "astro-embed/integration";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rhams.es/blog",
  base: "/blog",
  integrations: [embeds(), mdx(), svelte(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "nord"
    },
    remarkPlugins: ["remark-gfm", "remark-smartypants"],
    rehypePlugins: [["rehype-external-links", {
      target: "_blank"
    }]]
  }
});