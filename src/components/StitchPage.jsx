import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

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
  return `#${route}`
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

function StitchPage({ markup }) {
  const navigate = useNavigate()

  const page = useMemo(() => {
    const documentNode = new DOMParser().parseFromString(markup, 'text/html')
    injectRouteBehavior(documentNode)

    return {
      title: documentNode.title || 'Lumina AI',
      bodyClassName: documentNode.body.getAttribute('class') || '',
      html: documentNode.body.innerHTML,
    }
  }, [markup])

  useEffect(() => {
    document.title = page.title
  }, [page.title])

  const handleClick = (event) => {
    const routeTarget = event.target.closest('[data-route]')
    if (!routeTarget) {
      return
    }

    const route = routeTarget.getAttribute('data-route')
    if (!route) {
      return
    }

    event.preventDefault()
    navigate(route)
  }

  return (
    <div
      className={page.bodyClassName}
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: page.html }}
    />
  )
}

export default StitchPage
