import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'

const require = createRequire(import.meta.url)
const { render, routes } = require('../build-server/server.cjs')

const pages = [
  ...routes.map((url) => ({ url, file: url === '/' ? 'index.html' : `${url.slice(1)}/index.html` })),
  { url: '/404', file: '404.html', noindex: true },
]

const escape = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

const template = readFileSync('build/index.html', 'utf8')

const setContent = (html, pattern, value) => html.replace(pattern, (tag) => tag.replace(/content="[^"]*"/, `content="${escape(value)}"`))

for (const route of pages) {
  const { html, title, description } = render(route.url)

  let page = template
    .replace('<div id="root"></div>', `<div id="root" data-path="${route.url}">${html}</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
  page = setContent(page, /<meta\s+property="og:title"[^>]*>/, title)

  if (description) {
    page = setContent(page, /<meta\s+name="description"[^>]*>/, description)
    page = setContent(page, /<meta\s+property="og:description"[^>]*>/, description)
  }

  if (route.noindex) {
    page = setContent(page, /<meta\s+name="robots"[^>]*>/, 'noindex, follow')
  }

  const target = join('build', route.file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, page)
  console.log(`prerendered ${route.url} -> ${target}`)
}

rmSync('build-server', { recursive: true, force: true })
