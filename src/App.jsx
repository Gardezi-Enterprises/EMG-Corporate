import { Navigate, Route, Routes } from 'react-router-dom'
import StitchPage from './components/StitchPage'
import homepageMarkup from './stitch_html/homepage.html?raw'
import aboutUsMarkup from './stitch_html/about_us.html?raw'
import servicesMarkup from './stitch_html/services_solutions.html?raw'
import industryMarkup from './stitch_html/industry_specific_ai.html?raw'
import fullStackMarkup from './stitch_html/full_stack_web_development.html?raw'
import caseStudiesMarkup from './stitch_html/case_studies.html?raw'
import blogMarkup from './stitch_html/blog_insights.html?raw'
import contactMarkup from './stitch_html/contact.html?raw'

function App() {
  const pageMap = [
    {
      path: '/homepage',
      markup: homepageMarkup,
    },
    {
      path: '/about-us',
      markup: aboutUsMarkup,
    },
    {
      path: '/services-solutions',
      markup: servicesMarkup,
    },
    {
      path: '/industry-specific-ai',
      markup: industryMarkup,
    },
    {
      path: '/full-stack-web-development',
      markup: fullStackMarkup,
    },
    {
      path: '/case-studies',
      markup: caseStudiesMarkup,
    },
    {
      path: '/blog-insights',
      markup: blogMarkup,
    },
    {
      path: '/contact',
      markup: contactMarkup,
    },
  ]

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/homepage" />} />
      {pageMap.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={<StitchPage markup={page.markup} />}
        />
      ))}
      <Route path="*" element={<Navigate replace to="/homepage" />} />
    </Routes>
  )
}

export default App
