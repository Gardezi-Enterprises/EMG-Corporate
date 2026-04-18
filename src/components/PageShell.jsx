import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

function PageShell({ title, children }) {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default PageShell
