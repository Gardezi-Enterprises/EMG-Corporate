import { useEffect, useMemo, useState } from 'react'
import parse, { domToReact } from 'html-react-parser'
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

function isInsideNav(node) {
  let current = node?.parent
  while (current) {
    if (current.type === 'tag' && current.name === 'nav') {
      return true
    }
    current = current.parent
  }
  return false
}

function collectText(node) {
  if (!node) {
    return ''
  }

  if (node.type === 'text') {
    return node.data || ''
  }

  if (!node.children || node.children.length === 0) {
    return ''
  }

  return node.children.map(collectText).join(' ')
}

function toReactProps(attribs = {}) {
  const props = { ...attribs }

  if (Object.hasOwn(props, 'class')) {
    props.className = props.class
    delete props.class
  }

  return props
}

function StitchPage({ source }) {
  const navigate = useNavigate()
  const [html, setHtml] = useState('')
  const [bodyClassName, setBodyClassName] = useState('')
  const [pageTitle, setPageTitle] = useState('Lumina AI')
  const [styles, setStyles] = useState([])
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

        if (!isMounted) {
          return
        }

        setHtml(documentNode.body.innerHTML)
        setBodyClassName(documentNode.body.getAttribute('class') || '')
        setPageTitle(documentNode.title || 'Lumina AI')
        setStyles(Array.from(documentNode.querySelectorAll('style')).map((style) => style.textContent || ''))
        setStatus('ready')
      } catch (error) {
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

  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])

  const parseOptions = useMemo(
    () => ({
      replace: (domNode) => {
        if (domNode.type !== 'tag' || !isInsideNav(domNode)) {
          return undefined
        }

        const route = NAV_ROUTE_MAP[normalizeText(collectText(domNode))]
        if (!route) {
          return undefined
        }

        if (domNode.name === 'a') {
          const props = toReactProps(domNode.attribs)

          return (
            <a {...props} href={route}>
              {domToReact(domNode.children || [], parseOptions)}
            </a>
          )
        }

        if (domNode.name === 'button') {
          const props = toReactProps(domNode.attribs)

          return (
            <button
              {...props}
              type={props.type || 'button'}
              onClick={() => navigate(route)}
            >
              {domToReact(domNode.children || [], parseOptions)}
            </button>
          )
        }

        if (domNode.name === 'div') {
          const props = toReactProps(domNode.attribs)

          return (
            <a {...props} href={route}>
              {domToReact(domNode.children || [], parseOptions)}
            </a>
          )
        }

        return undefined
      },
    }),
    [navigate],
  )

  const renderedHtml = useMemo(() => parse(html, parseOptions), [html, parseOptions])

  if (status === 'loading') {
    return <div className="stitch-loader">Loading page design...</div>
  }

  if (status === 'error') {
    return <div className="stitch-loader">Unable to load this Stitch page.</div>
  }

  return (
    <div className={bodyClassName}>
      {styles.map((styleText, index) => (
        <style key={`${source}-${index}`}>{styleText}</style>
      ))}
      {renderedHtml}
    </div>
  )
}

export default StitchPage
