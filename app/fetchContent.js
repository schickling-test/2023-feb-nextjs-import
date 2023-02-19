export const fetchContent = async (sourceKey) => {
  const { Worker } = await import('node:worker_threads')
  const path = await import('node:path')

  // This is a worker-around (pun intended) for Next.js' limitation of still running via CJS.
  const workerFilePath = path.join(process.cwd(), 'app/dynamic-build-worker.mjs')
  // const fs = await import('node:fs')
  // const workerContent = fs.readFileSync(workerFilePath, 'utf-8')
  // console.log('workerContent', workerContent.slice(0, 100))
  const worker = new Worker(workerFilePath, { workerData: { sourceKey } })

  return new Promise((resolve, reject) => {
    worker.on('message', (data) => { 
      if (data.result) {
        resolve(data.result)
      } else if (data.fatalError) {
        reject(data.fatalError)
      } else {
        reject(new Error('This should not happen'))
      }
    })
    worker.on('error', reject)
  }).finally(() => worker.terminate())
}
    