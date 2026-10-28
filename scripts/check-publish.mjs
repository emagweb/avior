// Pre-publish check. Looks for placeholders that must be replaced with the real
// domain, and for Open Graph tags that crawlers cannot resolve.
//
//   yarn check
//
// Prints a report and always exits 0, so it never blocks a development build.

import { readFileSync, existsSync } from 'node:fs'

const PLACEHOLDER = 'example.com'

const files = [
  'public/robots.txt',
  'public/sitemap.xml',
  'public/index.html',
  'public/manifest.json',
  'README.md'
]

const findings = []

for (const file of files) {
  if (!existsSync(file)) continue
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (line.includes(PLACEHOLDER)) {
        findings.push({ file, line: i + 1, what: `placeholder domain`, text: line.trim() })
      }
    })
}

const html = existsSync('public/index.html') ? readFileSync('public/index.html', 'utf8') : ''

const relativeOg = [...html.matchAll(/<meta\s+property="(og:image|og:url)"\s+content="(\/[^"]*)"/g)]
for (const m of relativeOg) {
  findings.push({
    file: 'public/index.html',
    line: html.slice(0, m.index).split('\n').length,
    what: `${m[1]} is relative`,
    text: m[0]
  })
}

if (!/rel="canonical"/.test(html)) {
  findings.push({ file: 'public/index.html', line: 0, what: 'no canonical link', text: '' })
}

if (/content="noindex/.test(html)) {
  findings.push({ file: 'public/index.html', line: 0, what: 'robots is set to noindex', text: '' })
}

if (findings.length === 0) {
  console.log('\nReady to publish: no placeholders, Open Graph tags are absolute.\n')
  process.exit(0)
}

console.log(`\n${findings.length} thing(s) to fix before publishing:\n`)
for (const f of findings) {
  const at = f.line ? `${f.file}:${f.line}` : f.file
  console.log(`  ${f.what}`)
  console.log(`    ${at}${f.text ? `  ${f.text.slice(0, 90)}` : ''}`)
}
console.log(`
Replace ${PLACEHOLDER} with the real domain, make og:image and og:url absolute,
and add a canonical link. Crawlers do not resolve relative URLs in meta tags.
`)
