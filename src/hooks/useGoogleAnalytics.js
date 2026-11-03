import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_MEASUREMENT_ID = ''

const loadGA = () => {
  if (document.getElementById('ga-script')) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }

  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)

  const script = document.createElement('script')
  script.id = 'ga-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export const useGoogleAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return
    loadGA()
  }, [])

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return
    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search
    })
  }, [location])
}
