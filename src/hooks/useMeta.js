import { useEffect } from 'react'

const SITE = 'Avior'
const DEFAULT_TITLE = 'Avior — React + Rsbuild starter'

const rendered = { title: DEFAULT_TITLE, description: '' }

const fullTitle = (title) => (title ? `${title} — ${SITE}` : DEFAULT_TITLE)

const setMeta = (selector, value) => {
  const tag = document.head.querySelector(selector)
  if (tag && value) tag.setAttribute('content', value)
}

export const useMeta = (title, description) => {
  if (typeof document === 'undefined') {
    rendered.title = fullTitle(title)
    rendered.description = description || ''
  }

  useEffect(() => {
    document.title = fullTitle(title)
    setMeta('meta[property="og:title"]', document.title)
    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:description"]', description)
  }, [title, description])
}

export { rendered as renderedMeta }
