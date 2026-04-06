import { Outlet, Link, useLocation } from 'react-router-dom'

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F5F5F5'
  },
  header: {
    backgroundColor: '#C8102E',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
  },
  headerContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px'
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    color: '#FFFFFF'
  },
  logoText: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#FFFFFF'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  },
  navLink: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    padding: '4px 0',
    borderBottom: '2px solid transparent',
    transition: 'all 0.2s'
  },
  navLinkActive: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    padding: '4px 0',
    borderBottom: '2px solid #FFFFFF'
  },
  contactBtn: {
    backgroundColor: '#FFFFFF',
    color: '#C8102E',
    padding: '10px 20px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'opacity 0.2s'
  },
  main: {
    flex: 1
  },
  footer: {
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
    padding: '64px 0'
  },
  footerContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '48px'
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px'
  },
  footerLogoText: {
    fontWeight: '600',
    color: '#FFFFFF'
  },
  footerText: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: '14px',
    lineHeight: '1.7'
  },
  footerHeading: {
    fontWeight: '600',
    marginBottom: '16px',
    color: '#FFFFFF'
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  footerListItem: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: '14px',
    marginBottom: '8px'
  },
  footerBottom: {
    borderTop: '1px solid rgba(200,16,46,0.25)',
    marginTop: '48px',
    paddingTop: '32px',
    textAlign: 'center'
  },
  footerCopyright: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '14px'
  }
}

function Layout() {
  const location = useLocation()

  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <Link to="/" style={styles.logoLink}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFFFFF">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span style={styles.logoText}>Cardiovascular Prevention Index</span>
          </Link>
          <nav style={styles.nav}>
            <Link
              to="/"
              style={location.pathname === '/' ? styles.navLinkActive : styles.navLink}
            >
              Guidelines
            </Link>
            <a href="#about" style={styles.navLink}>
              About
            </a>
            <a
              href="mailto:info@heart.org"
              style={styles.contactBtn}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerGrid}>
            <div>
              <div style={styles.footerLogo}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#C8102E">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span style={styles.footerLogoText}>Cardiovascular Prevention Index</span>
              </div>
              <p style={styles.footerText}>
                An evidence-based guideline acceleration platform developed by the American Heart Association.
              </p>
            </div>
            <div>
              <h4 style={styles.footerHeading}>About This Platform</h4>
              <ul style={styles.footerList}>
                <li style={styles.footerListItem}>Prototype demonstration</li>
                <li style={styles.footerListItem}>Synthetic data for illustration</li>
                <li style={styles.footerListItem}>Not for clinical decision-making</li>
              </ul>
            </div>
            <div>
              <h4 style={styles.footerHeading}>Platform</h4>
              <ul style={styles.footerList}>
                <li style={styles.footerListItem}>American Heart Association</li>
              </ul>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.footerCopyright}>
              &copy; 2026 Cardiovascular Prevention Index. Prototype demonstration only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
