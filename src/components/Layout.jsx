import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header style={{ backgroundColor: '#C8102E' }} className="text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <div>
                <span className="text-base font-semibold tracking-tight text-white">Cardiovascular Prevention Index</span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                style={location.pathname === '/' ? { color: '#FFFFFF', borderBottomColor: '#FFFFFF' } : {}}
                className="text-sm font-medium text-white/80 hover:text-white border-b-2 border-transparent pb-0.5 transition-colors"
              >
                Guidelines
              </Link>
              <a
                href="#about"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="mailto:david.smith@thirdhorizon.com"
                style={{ backgroundColor: '#FFFFFF', color: '#C8102E' }}
                className="px-4 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1A1A1A' }} className="text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#C8102E">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span className="font-semibold text-white">Cardiovascular Prevention Index</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.55)' }} className="text-sm leading-relaxed">
                An evidence-based guideline acceleration platform developed in partnership with the American Heart Association.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">About This Platform</h4>
              <ul style={{ color: 'rgba(255,255,255,0.55)' }} className="space-y-2 text-sm">
                <li>Prototype demonstration</li>
                <li>Synthetic data for illustration</li>
                <li>Not for clinical decision-making</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Partners</h4>
              <ul style={{ color: 'rgba(255,255,255,0.55)' }} className="space-y-2 text-sm">
                <li>American Heart Association</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm" style={{ borderTopColor: 'rgba(200,16,46,0.25)', color: 'rgba(255,255,255,0.4)' }}>
            <p>&copy; 2026 Cardiovascular Prevention Index. Prototype demonstration only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
