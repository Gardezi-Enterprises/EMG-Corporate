import { Navigate, Route, Routes } from 'react-router-dom'
import HomepagePage from './pages/HomepagePage'
import AboutUsPage from './pages/AboutUsPage'
import ServicesSolutionsPage from './pages/ServicesSolutionsPage'
import IndustrySpecificAiPage from './pages/IndustrySpecificAiPage'
import FullStackWebDevelopmentPage from './pages/FullStackWebDevelopmentPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import BlogInsightsPage from './pages/BlogInsightsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/homepage" />} />
      <Route path="/homepage" element={<HomepagePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/services-solutions" element={<ServicesSolutionsPage />} />
      <Route path="/industry-specific-ai" element={<IndustrySpecificAiPage />} />
      <Route path="/full-stack-web-development" element={<FullStackWebDevelopmentPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/blog-insights" element={<BlogInsightsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate replace to="/homepage" />} />
    </Routes>
  )
}

export default App
