import { fetchContent } from "./fetchContent"

export default async function Home() {
  // NOTE this doesn't seem to work with Next.js but works with Node
  // const mod = await import('./example.mjs');

  // console.log(mod);
  const { data, error } = await fetchContent('canary')

  return (
    <main>
      <h1>Testing await import {data.allPosts.length} posts</h1>
    </main>
  )
}
