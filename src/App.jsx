import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import CACDetailPage from './pages/CACDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="cac-scoring" element={<CACDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
