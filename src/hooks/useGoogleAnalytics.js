import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Put your GA4 measurement ID here, e.g. 'G-XXXXXXXXXX'.
// While it is empty the hook does nothing: no script, no requests.
const GA_MEASUREMENT_ID = ''

const loadGA = () => {
  if (document.getElementById('ga-script')) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }

  // --- GDPR: uncomment to deny storage until the visitor agrees ---
  // window.gtag('consent', 'default', {
  //   analytics_storage: 'denied',
  //   ad_storage: 'denied'
  // })
  // --- end GDPR ---

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

  // Page views on route change
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return
    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search
    })
  }, [location])
}

// --- GDPR: uncomment and call from your consent banner ---
// export const grantAnalyticsConsent = () => {
//   window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
// }
//
// export const denyAnalyticsConsent = () => {
//   window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
// }
// --- end GDPR ---
