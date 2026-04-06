import { useState } from 'react'
import { Link } from 'react-router-dom'
import EvidenceLayer from '../components/layers/EvidenceLayer'
import ImplementationLayer from '../components/layers/ImplementationLayer'
import ValueLayer from '../components/layers/ValueLayer'
import PathwayLayer from '../components/layers/PathwayLayer'

const layers = [
  { id: 'evidence', name: '1. Evidence Base' },
  { id: 'implementation', name: '2. Implementation State' },
  { id: 'value', name: '3. Economic Value' },
  { id: 'pathway', name: '4. Pathway' }
]

const styles = {
  page: {
    backgroundColor: '#F5F5F5',
    minHeight: '100vh'
  },
  breadcrumbSection: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E5E7EB'
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '24px'
  },
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#6B7280',
    marginBottom: '12px'
  },
  breadcrumbLink: {
    color: '#C8102E',
    textDecoration: 'none'
  },
  breadcrumbCurrent: {
    color: '#1A1A1A'
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  pageTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1A1A1A',
    margin: 0
  },
  pageSubtitle: {
    fontSize: '16px',
    color: '#6B7280',
    marginTop: '8px'
  },
  badge: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '999px',
    fontSize: '13px',
    fontWeight: '500',
    backgroundColor: '#E8F5EE',
    color: '#1A7A4A'
  },
  accentBar: {
    height: '3px',
    backgroundColor: '#C8102E'
  },
  tabNav: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E5E7EB',
    position: 'sticky',
    top: 0,
    zIndex: 10
  },
  tabContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    overflow: 'auto'
  },
  tab: {
    padding: '16px 28px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#6B7280',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '3px solid transparent',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s'
  },
  tabActive: {
    padding: '16px 28px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#C8102E',
    backgroundColor: '#FFFFFF',
    border: 'none',
    borderBottom: '3px solid #C8102E',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  content: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '48px 24px'
  },
  quickNav: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 20
  },
  quickNavInner: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
    border: '1px solid #E5E7EB',
    padding: '8px',
    display: 'flex',
    gap: '4px'
  },
  quickNavBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  quickNavBtnActive: {
    backgroundColor: '#C8102E',
    color: '#FFFFFF'
  },
  quickNavBtnInactive: {
    backgroundColor: '#F5F5F5',
    color: '#1A1A1A'
  }
}

function CACDetailPage() {
  const [activeLayer, setActiveLayer] = useState('evidence')

  const renderLayer = () => {
    switch (activeLayer) {
      case 'evidence':       return <EvidenceLayer />
      case 'implementation': return <ImplementationLayer />
      case 'value':          return <ValueLayer />
      case 'pathway':        return <PathwayLayer />
      default:               return <EvidenceLayer />
    }
  }

  return (
    <div style={styles.page} className="animate-fade-in">
      {/* Breadcrumb & Header */}
      <div style={styles.breadcrumbSection}>
        <div style={styles.container}>
          <div style={styles.breadcrumb}>
            <Link to="/" style={styles.breadcrumbLink}>Guidelines</Link>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ margin: '0 8px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span style={styles.breadcrumbCurrent}>CAC Scoring</span>
          </div>
          <div style={styles.headerRow}>
            <div>
              <h1 style={styles.pageTitle}>Coronary Artery Calcium (CAC) Scoring</h1>
              <p style={styles.pageSubtitle}>
                Evidence-based cardiovascular risk refinement for intermediate-risk patients
              </p>
            </div>
            <div>
              <span style={styles.badge}>AHA/ACC Class IIa Recommendation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Red accent bar */}
      <div style={styles.accentBar}></div>

      {/* Layer Navigation */}
      <div style={styles.tabNav}>
        <div style={styles.tabContainer}>
          {layers.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              style={activeLayer === layer.id ? styles.tabActive : styles.tab}
            >
              {layer.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active Layer Content */}
      <div style={styles.content}>
        {renderLayer()}
      </div>

      {/* Quick Nav */}
      <div style={styles.quickNav}>
        <div style={styles.quickNavInner}>
          {layers.map((layer, index) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              style={{
                ...styles.quickNavBtn,
                ...(activeLayer === layer.id ? styles.quickNavBtnActive : styles.quickNavBtnInactive)
              }}
              title={layer.name}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CACDetailPage
