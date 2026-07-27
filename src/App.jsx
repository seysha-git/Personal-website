import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { HomePage } from './pages/HomePage.jsx'
import { Events } from './pages/Events.jsx'
import { Sports } from './pages/Sports.jsx'
import { Projects } from './pages/Projects.jsx'

function App() {
  const location = useLocation()
  const [isPageLoading, setIsPageLoading] = useState(false)

  useEffect(() => {
    setIsPageLoading(true)

    const timer = window.setTimeout(() => {
      setIsPageLoading(false)
    }, 220)

    return () => window.clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <div className={`page-loader ${isPageLoading ? 'page-loader-active' : ''}`} />
      <div key={location.pathname} className="page-transition">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="events" element={<Events />} />
          <Route path="sports" element={<Sports />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App
