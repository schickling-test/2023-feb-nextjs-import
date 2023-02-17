export default async function Home() {
  const mod = await import('./example.mjs');

  console.log(mod);
  
  return (
    <main>
      <h1>Testing await import</h1>
    </main>
  )
}
