export async function GET({ params, request, url, site }) {
  const posts = import.meta.glob("../data/blog-posts/*.mdx");
  const newPosts = [];
  for (const post of Object.values(posts)) {
    const p = await post();
    newPosts.push({
      slug: `${p.file.split("/").pop().split(".").shift()}`,
      ...p.frontmatter,
    });
  }
  return new Response(
    JSON.stringify({
      site,
      posts: newPosts,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
