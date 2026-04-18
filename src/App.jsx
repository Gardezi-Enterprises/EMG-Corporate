import { Navigate, Route, Routes } from 'react-router-dom'
import StitchPage from './components/StitchPage'

function App() {
  const pageMap = [
    {
      path: '/homepage',
      source: '/stitch_pages/homepage/code.html',
    },
    {
      path: '/about-us',
      source: '/stitch_pages/about_us/code.html',
    },
    {
      path: '/services-solutions',
      source: '/stitch_pages/services_solutions/code.html',
    },
    {
      path: '/industry-specific-ai',
      source: '/stitch_pages/industry_specific_ai/code.html',
    },
    {
      path: '/full-stack-web-development',
      source: '/stitch_pages/full_stack_web_development/code.html',
    },
    {
      path: '/case-studies',
      source: '/stitch_pages/case_studies/code.html',
    },
    {
      path: '/blog-insights',
      source: '/stitch_pages/blog_insights/code.html',
    },
    {
      path: '/contact',
      source: '/stitch_pages/contact/code.html',
    },
  ]

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/homepage" />} />
      {pageMap.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={<StitchPage source={page.source} />}
        />
      ))}
      <Route path="*" element={<Navigate replace to="/homepage" />} />
    </Routes>
  )
}

export default App
