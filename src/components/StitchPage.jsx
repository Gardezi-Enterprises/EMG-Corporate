import { useEffect, useState } from 'react'

const NAV_ROUTE_MAP = {
  home: '/homepage',
  lumina_ai: '/homepage',
  'lumina ai': '/homepage',
  services: '/services-solutions',
  industries: '/industry-specific-ai',
  portfolio: '/case-studies',
  about: '/about-us',
  blog: '/blog-insights',
  contact: '/contact',
  'consult ai': '/contact',
}

function normalizeText(text) {
  return text.replace(/\s+/g, ' ').trim().toLowerCase()
}

function toHashRoute(route) {
  return `/#${route}`
}

function injectRouteBehavior(documentNode) {
  const nav = documentNode.querySelector('nav')
  if (!nav) {
    return
  }

  const candidates = nav.querySelectorAll('a, button, div')
  candidates.forEach((element) => {
    const route = NAV_ROUTE_MAP[normalizeText(element.textContent || '')]
    if (!route) {
      return
    }

    if (element.tagName.toLowerCase() === 'a') {
      element.setAttribute('href', toHashRoute(route))
      element.setAttribute('target', '_top')
      return
    }

    if (element.tagName.toLowerCase() === 'button') {
      element.setAttribute('data-route', route)
      element.setAttribute('type', 'button')
      return
    }

    if (element.tagName.toLowerCase() === 'div') {
      const anchor = documentNode.createElement('a')
      anchor.innerHTML = element.innerHTML

      const attributes = Array.from(element.attributes)
      attributes.forEach((attribute) => {
        anchor.setAttribute(attribute.name, attribute.value)
      })

      anchor.setAttribute('href', toHashRoute(route))
      anchor.setAttribute('target', '_top')
      element.replaceWith(anchor)
    }
  })
}

function injectTopNavigationScript(documentNode) {
  const script = documentNode.createElement('script')
  script.textContent = `
    document.addEventListener('click', function (event) {
      var routeTarget = event.target.closest('[data-route]');
      if (!routeTarget) {
        return;
      }

      event.preventDefault();
      var route = routeTarget.getAttribute('data-route');
      if (route) {
        window.top.location.assign('/#' + route);
      }
    });
  `

  documentNode.body.appendChild(script)
}

function StitchPage({ source }) {
  const [iframeHtml, setIframeHtml] = useState('')
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let isMounted = true

    const loadHtml = async () => {
      setStatus('loading')

      try {
        const response = await fetch(source)
        if (!response.ok) {
          throw new Error(`Failed to load page: ${source}`)
        }

        const markup = await response.text()
        const documentNode = new DOMParser().parseFromString(markup, 'text/html')
        injectRouteBehavior(documentNode)
        injectTopNavigationScript(documentNode)

        if (!isMounted) {
          return
        }

        setIframeHtml(documentNode.documentElement.outerHTML)
        setStatus('ready')
      } catch {
        if (isMounted) {
          setStatus('error')
        }
      }
    }

    loadHtml()

    return () => {
      isMounted = false
    }
  }, [source])

  if (status === 'loading') {
    return <div className="stitch-loader">Loading page design...</div>
  }

  if (status === 'error') {
    return <div className="stitch-loader">Unable to load this Stitch page.</div>
  }

  return (
    <iframe
      key={source}
      title="Stitch Page"
      srcDoc={iframeHtml}
      style={{ width: '100%', minHeight: '100vh', height: '100vh', border: '0' }}
    />
  )
}

export default StitchPage
