import { useEffect } from 'react'

const SITE = 'Avior'
const DEFAULT_TITLE = 'Avior — React + Rsbuild starter'

const setMeta = (selector, value) => {
  const tag = document.head.querySelector(selector)
  if (tag && value) tag.setAttribute('content', value)
}

export const useMeta = (title, description) => {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : DEFAULT_TITLE
    setMeta('meta[property="og:title"]', document.title)
    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:description"]', description)
  }, [title, description])
}
