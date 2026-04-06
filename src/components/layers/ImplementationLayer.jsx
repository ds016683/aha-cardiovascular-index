import { useState, memo } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { stateData, nationalStats, getAdoptionColor, getPrevalenceColor } from '../../data/syntheticStates'

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

const fipsToState = {
  '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA',
  '08': 'CO', '09': 'CT', '10': 'DE', '11': 'DC', '12': 'FL',
  '13': 'GA', '15': 'HI', '16': 'ID', '17': 'IL', '18': 'IN',
  '19': 'IA', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME',
  '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '28': 'MS',
  '29': 'MO', '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH',
  '34': 'NJ', '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND',
  '39': 'OH', '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI',
  '45': 'SC', '46': 'SD', '47': 'TN', '48': 'TX', '49': 'UT',
  '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV', '55': 'WI',
  '56': 'WY'
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px'
  },
  sectionHeader: {
    marginBottom: '0'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: '12px'
  },
  sectionAccent: {
    width: '48px',
    height: '3px',
    backgroundColor: '#C8102E',
    marginBottom: '16px'
  },
  sectionSubtitle: {
    fontSize: '16px',
    color: '#6B7280',
    lineHeight: '1.6'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px'
  },
  mapCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    overflow: 'hidden',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  mapHeader: {
    backgroundColor: '#F5F5F5',
    borderBottom: '1px solid #E5E7EB',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  mapTitle: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#1A1A1A'
  },
  toggleWrapper: {
    display: 'flex',
    backgroundColor: '#E5E7EB',
    borderRadius: '6px',
    padding: '2px'
  },
  toggleBtn: {
    padding: '8px 16px',
    fontSize: '12px',
    fontWeight: '500',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  toggleBtnActive: {
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  toggleBtnInactive: {
    backgroundColor: 'transparent',
    color: '#6B7280'
  },
  mapContainer: {
    position: 'relative',
    height: '450px'
  },
  tooltip: {
    position: 'fixed',
    zIndex: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    pointerEvents: 'none',
    minWidth: '220px',
    border: '1px solid #E5E7EB',
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
    padding: '16px'
  },
  tooltipTitle: {
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '8px'
  },
  tooltipRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '4px',
    fontSize: '14px'
  },
  tooltipLabel: {
    color: '#9CA3AF'
  },
  tooltipValue: {
    fontWeight: '500',
    color: '#1A1A1A'
  },
  tooltipValueRed: {
    fontWeight: '500',
    color: '#C8102E'
  },
  tooltipValueGreen: {
    fontWeight: '500',
    color: '#1A7A4A'
  },
  legend: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: '8px',
    padding: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontSize: '12px'
  },
  legendTitle: {
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: '8px'
  },
  legendColors: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  legendColor: {
    width: '24px',
    height: '16px',
    borderRadius: '2px'
  },
  legendLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '4px',
    color: '#9CA3AF'
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    padding: '24px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  cardTitle: {
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '20px'
  },
  bigStat: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#C8102E'
  },
  statLabel: {
    fontSize: '14px',
    color: '#6B7280',
    marginTop: '4px'
  },
  statDivider: {
    borderTop: '1px solid #F3F4F6',
    paddingTop: '16px',
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  statRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px'
  },
  statRowLabel: {
    color: '#6B7280'
  },
  statRowValue: {
    fontWeight: '600',
    color: '#1A1A1A'
  },
  rankItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px'
  },
  rankNumber: {
    width: '20px',
    height: '20px',
    borderRadius: '999px',
    backgroundColor: '#F5F5F5',
    color: '#1A1A1A',
    fontSize: '12px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '8px',
    flexShrink: 0
  },
  rankName: {
    fontSize: '14px',
    color: '#4A5568'
  },
  rankValue: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#C8102E'
  },
  rankValueGray: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#9CA3AF'
  },
  bottomNote: {
    borderTop: '1px solid #F3F4F6',
    paddingTop: '16px',
    marginTop: '8px'
  },
  noteText: {
    fontSize: '12px',
    color: '#9CA3AF',
    lineHeight: '1.6'
  },
  insightsBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    padding: '32px'
  },
  insightsTitle: {
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '20px'
  },
  insightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px'
  },
  insightItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '14px',
    color: '#4A5568'
  },
  insightIcon: {
    flexShrink: 0,
    marginTop: '2px',
    width: '16px',
    height: '16px',
    borderRadius: '999px',
    backgroundColor: '#C8102E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

function ImplementationLayer() {
  const [viewMode, setViewMode] = useState('adoption')
  const [hoveredState, setHoveredState] = useState(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (geo, event) => {
    const stateCode = fipsToState[geo.id]
    const state = stateData.find(s => s.state_code === stateCode)
    if (state) {
      setHoveredState(state)
      setTooltipPosition({ x: event.clientX, y: event.clientY })
    }
  }

  const handleMouseMove = (event) => {
    setTooltipPosition({ x: event.clientX, y: event.clientY })
  }

  const handleMouseLeave = () => {
    setHoveredState(null)
  }

  const getColor = (geo) => {
    const stateCode = fipsToState[geo.id]
    const state = stateData.find(s => s.state_code === stateCode)
    if (!state) return '#E5E7EB'
    return viewMode === 'adoption'
      ? getAdoptionColor(state.adoption_score)
      : getPrevalenceColor(state.prevalence_rate)
  }

  const topStates = [...stateData].sort((a, b) => b.adoption_score - a.adoption_score).slice(0, 5)
  const bottomStates = [...stateData].sort((a, b) => a.adoption_score - b.adoption_score).slice(0, 5)

  return (
    <div style={styles.container}>
      {/* Section Header */}
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Where does the country stand today?</h2>
        <div style={styles.sectionAccent}></div>
        <p style={styles.sectionSubtitle}>Geographic variation in CAC scoring adoption and cardiovascular disease prevalence</p>
      </div>

      <div style={styles.grid}>
        {/* Map Section */}
        <div style={styles.mapCard}>
          {/* View Toggle */}
          <div style={styles.mapHeader}>
            <span style={styles.mapTitle}>
              {viewMode === 'adoption' ? 'CAC Adoption Index' : 'CVD Prevalence Rate'}
            </span>
            <div style={styles.toggleWrapper}>
              <button
                onClick={() => setViewMode('adoption')}
                style={{
                  ...styles.toggleBtn,
                  ...(viewMode === 'adoption' ? styles.toggleBtnActive : styles.toggleBtnInactive)
                }}
              >
                Adoption Rate
              </button>
              <button
                onClick={() => setViewMode('prevalence')}
                style={{
                  ...styles.toggleBtn,
                  ...(viewMode === 'prevalence' ? styles.toggleBtnActive : styles.toggleBtnInactive)
                }}
              >
                Disease Prevalence
              </button>
            </div>
          </div>

          {/* Map */}
          <div style={styles.mapContainer}>
            <ComposableMap projection="geoAlbersUsa" style={{ width: '100%', height: '100%' }}>
              <ZoomableGroup>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={getColor(geo)}
                        stroke="#FFFFFF"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: 'none' },
                          hover: { outline: 'none', stroke: '#C8102E', strokeWidth: 2 },
                          pressed: { outline: 'none' },
                        }}
                        onMouseEnter={(e) => handleMouseEnter(geo, e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      />
                    ))
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>

            {/* Tooltip */}
            {hoveredState && (
              <div style={{ ...styles.tooltip, left: tooltipPosition.x + 15, top: tooltipPosition.y - 10 }}>
                <div style={styles.tooltipTitle}>{hoveredState.state_name}</div>
                <div style={styles.tooltipRow}>
                  <span style={styles.tooltipLabel}>Adoption Score:</span>
                  <span style={styles.tooltipValueRed}>{hoveredState.adoption_score}%</span>
                </div>
                <div style={styles.tooltipRow}>
                  <span style={styles.tooltipLabel}>CVD Prevalence:</span>
                  <span style={styles.tooltipValue}>{hoveredState.prevalence_rate}%</span>
                </div>
                <div style={styles.tooltipRow}>
                  <span style={styles.tooltipLabel}>Eligible Population:</span>
                  <span style={styles.tooltipValue}>{(hoveredState.eligible_population / 1000000).toFixed(2)}M</span>
                </div>
                <div style={styles.tooltipRow}>
                  <span style={styles.tooltipLabel}>Coverage Mandate:</span>
                  <span style={hoveredState.coverage_mandate ? styles.tooltipValueGreen : styles.tooltipLabel}>
                    {hoveredState.coverage_mandate ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            )}

            {/* Color Legend */}
            <div style={styles.legend}>
              <div style={styles.legendTitle}>
                {viewMode === 'adoption' ? 'Adoption Score' : 'Prevalence Rate'}
              </div>
              <div style={styles.legendColors}>
                {viewMode === 'adoption' ? (
                  <>
                    <div style={{ ...styles.legendColor, backgroundColor: '#FECDD3' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#FCA5A5' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#F87171' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#EF4444' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#DC2626' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#C8102E' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#9B0E25' }}></div>
                  </>
                ) : (
                  <>
                    <div style={{ ...styles.legendColor, backgroundColor: '#FEE2E2' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#FECDD3' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#FCA5A5' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#F87171' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#EF4444' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#C8102E' }}></div>
                    <div style={{ ...styles.legendColor, backgroundColor: '#9B0E25' }}></div>
                  </>
                )}
              </div>
              <div style={styles.legendLabels}>
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div style={styles.sidebar}>
          {/* National Stats */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>National Overview</h3>
            <div style={styles.bigStat}>{nationalStats.avgAdoption}%</div>
            <div style={styles.statLabel}>National avg. CAC adoption</div>
            <div style={styles.statDivider}>
              <div style={styles.statRow}>
                <span style={styles.statRowLabel}>States above 20% adoption:</span>
                <span style={styles.statRowValue}>{nationalStats.statesAbove20}</span>
              </div>
              <div style={styles.statRow}>
                <span style={styles.statRowLabel}>States with coverage mandates:</span>
                <span style={styles.statRowValue}>{nationalStats.statesWithMandate}</span>
              </div>
              <div style={styles.statRow}>
                <span style={styles.statRowLabel}>Total eligible population:</span>
                <span style={styles.statRowValue}>{(nationalStats.totalEligible / 1000000).toFixed(1)}M</span>
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Highest Adoption</h3>
            {topStates.map((state, index) => (
              <div key={state.state_code} style={styles.rankItem}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={styles.rankNumber}>{index + 1}</span>
                  <span style={styles.rankName}>{state.state_name}</span>
                </div>
                <span style={styles.rankValue}>{state.adoption_score}%</span>
              </div>
            ))}
          </div>

          {/* Lowest Performers */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Lowest Adoption</h3>
            {bottomStates.map((state) => (
              <div key={state.state_code} style={styles.rankItem}>
                <span style={styles.rankName}>{state.state_name}</span>
                <span style={styles.rankValueGray}>{state.adoption_score}%</span>
              </div>
            ))}
            <div style={styles.bottomNote}>
              <p style={styles.noteText}>
                Lowest adoption regions: Deep South, Rural Midwest.
                These areas often have higher CVD prevalence and lower access to imaging centers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div style={styles.insightsBox}>
        <h3 style={styles.insightsTitle}>Key Insights</h3>
        <div style={styles.insightsGrid}>
          {[
            'States with coverage mandates (CA, MA) show 2x higher adoption rates on average',
            'Areas with highest CVD prevalence often have lowest CAC adoption - an opportunity gap',
            'Texas leads adoption despite lack of mandate - driven by major health systems',
            'Minnesota\'s high adoption correlates with strong integrated health system presence'
          ].map((insight, i) => (
            <div key={i} style={styles.insightItem}>
              <div style={styles.insightIcon}>
                <svg width="10" height="10" fill="white" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>{insight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImplementationLayer
