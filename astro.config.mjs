import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import embeds from "astro-embed/integration";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.rhams.es",
  integrations: [embeds(), mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
    remarkPlugins: ["remark-gfm", "remark-smartypants"],
    rehypePlugins: [
      [
        "rehype-external-links",
        {
          target: "_blank",
        },
      ],
    ],
  },
});
