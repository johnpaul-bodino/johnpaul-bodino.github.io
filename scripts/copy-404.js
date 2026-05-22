import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const indexPath = resolve('dist', 'index.html')
const notFoundPath = resolve('dist', '404.html')

await copyFile(indexPath, notFoundPath)

console.log(`Copied ${indexPath} to ${notFoundPath}`)
