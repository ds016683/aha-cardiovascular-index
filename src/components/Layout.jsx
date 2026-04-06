import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#C8102E] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <div>
                <span className="text-lg font-bold tracking-tight">Cardiovascular Prevention Index</span>
                <span className="hidden sm:inline text-sm font-light ml-2 opacity-80">| AHA + Third Horizon</span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium hover:text-red-200 transition-colors">
                Guidelines
              </Link>
              <a href="#about" className="text-sm font-medium hover:text-red-200 transition-colors">
                About
              </a>
              <a 
                href="mailto:david.smith@thirdhorizon.com" 
                className="bg-white text-[#C8102E] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-50 transition-colors"
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
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#C8102E">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span className="font-semibold">Cardiovascular Prevention Index</span>
              </div>
              <p className="text-gray-400 text-sm">
                An evidence-based guideline acceleration platform developed in partnership with the American Heart Association and Third Horizon Strategies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About This Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Prototype demonstration</li>
                <li>Synthetic data for illustration</li>
                <li>Not for clinical decision-making</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Partners</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>American Heart Association</li>
                <li>Third Horizon Strategies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 Cardiovascular Prevention Index. Prototype demonstration only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
