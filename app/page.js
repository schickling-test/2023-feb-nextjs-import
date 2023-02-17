export default async function Home() {
  const mod = await import('./example.mjs');
  
  return (
    <main>
      <h1>Testing await import</h1>
      <p>{mod.example()}</p>
    </main>
  )
}
