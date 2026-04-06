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
    if (!state) return '#D1DBE8'
    return viewMode === 'adoption'
      ? getAdoptionColor(state.adoption_score)
      : getPrevalenceColor(state.prevalence_rate)
  }

  const topStates = [...stateData].sort((a, b) => b.adoption_score - a.adoption_score).slice(0, 5)
  const bottomStates = [...stateData].sort((a, b) => a.adoption_score - b.adoption_score).slice(0, 5)

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#224057' }}>Where does the country stand today?</h2>
        <div style={{ height: '2px', width: '48px', backgroundColor: '#F8C762', marginBottom: '12px' }}></div>
        <p style={{ color: '#6F7072' }}>Geographic variation in CAC scoring adoption and cardiovascular disease prevalence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2 bg-white rounded-lg overflow-hidden" style={{ border: '1px solid #D1DBE8', boxShadow: '0 2px 8px rgba(34,64,87,0.07)' }}>
          {/* View Toggle */}
          <div className="px-5 py-3 flex items-center justify-between" style={{ backgroundColor: '#E8F0F8', borderBottom: '1px solid #D1DBE8' }}>
            <span className="font-medium text-sm" style={{ color: '#224057' }}>
              {viewMode === 'adoption' ? 'CAC Adoption Index' : 'CVD Prevalence Rate'}
            </span>
            <div className="flex rounded p-0.5" style={{ backgroundColor: '#D1DBE8' }}>
              <button
                onClick={() => setViewMode('adoption')}
                className="px-4 py-1.5 text-xs font-medium rounded transition-colors"
                style={{
                  backgroundColor: viewMode === 'adoption' ? 'white' : 'transparent',
                  color: viewMode === 'adoption' ? '#224057' : '#6F7072',
                  boxShadow: viewMode === 'adoption' ? '0 1px 3px rgba(34,64,87,0.15)' : 'none'
                }}
              >
                Adoption Rate
              </button>
              <button
                onClick={() => setViewMode('prevalence')}
                className="px-4 py-1.5 text-xs font-medium rounded transition-colors"
                style={{
                  backgroundColor: viewMode === 'prevalence' ? 'white' : 'transparent',
                  color: viewMode === 'prevalence' ? '#224057' : '#6F7072',
                  boxShadow: viewMode === 'prevalence' ? '0 1px 3px rgba(34,64,87,0.15)' : 'none'
                }}
              >
                Disease Prevalence
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="relative" style={{ height: '450px' }}>
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
                          hover: { outline: 'none', stroke: '#F8C762', strokeWidth: 2 },
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
              <div
                className="fixed z-50 bg-white rounded-lg pointer-events-none"
                style={{
                  left: tooltipPosition.x + 15,
                  top: tooltipPosition.y - 10,
                  minWidth: '220px',
                  border: '1px solid #D1DBE8',
                  boxShadow: '0 4px 16px rgba(34,64,87,0.15)',
                  padding: '16px'
                }}
              >
                <div className="font-semibold mb-2" style={{ color: '#224057' }}>{hoveredState.state_name}</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: '#9BAABB' }}>Adoption Score:</span>
                    <span className="font-medium" style={{ color: '#234D8B' }}>{hoveredState.adoption_score}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#9BAABB' }}>CVD Prevalence:</span>
                    <span className="font-medium" style={{ color: '#224057' }}>{hoveredState.prevalence_rate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#9BAABB' }}>Eligible Population:</span>
                    <span className="font-medium" style={{ color: '#224057' }}>{(hoveredState.eligible_population / 1000000).toFixed(2)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#9BAABB' }}>Coverage Mandate:</span>
                    <span className="font-medium" style={{ color: hoveredState.coverage_mandate ? '#1A7A4A' : '#9BAABB' }}>
                      {hoveredState.coverage_mandate ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Color Legend */}
            <div className="absolute bottom-4 left-4 rounded-lg p-3 text-xs" style={{ backgroundColor: 'rgba(255,255,255,0.95)', boxShadow: '0 2px 8px rgba(34,64,87,0.12)' }}>
              <div className="font-medium mb-2" style={{ color: '#224057' }}>
                {viewMode === 'adoption' ? 'Adoption Score' : 'Prevalence Rate'}
              </div>
              <div className="flex items-center space-x-1">
                {viewMode === 'adoption' ? (
                  <>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#DBEAFE' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#BFDBFE' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#93C5FD' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#5B9FD8' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#3574B5' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#234D8B' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#224057' }}></div>
                  </>
                ) : (
                  <>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#FFF4CC' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#FDEAA0' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#FBD966' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#F8C762' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#E5A830' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#C48818' }}></div>
                    <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: '#9A6A0A' }}></div>
                  </>
                )}
              </div>
              <div className="flex justify-between mt-1" style={{ color: '#9BAABB' }}>
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-4">
          {/* National Stats */}
          <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #D1DBE8', boxShadow: '0 2px 8px rgba(34,64,87,0.07)' }}>
            <h3 className="font-semibold mb-4" style={{ color: '#224057' }}>National Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="text-4xl font-bold" style={{ color: '#234D8B' }}>{nationalStats.avgAdoption}%</div>
                <div className="text-sm mt-0.5" style={{ color: '#6F7072' }}>National avg. CAC adoption</div>
              </div>
              <div className="pt-4 space-y-3" style={{ borderTop: '1px solid #E8F0F8' }}>
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#6F7072' }}>States above 20% adoption:</span>
                  <span className="font-semibold" style={{ color: '#224057' }}>{nationalStats.statesAbove20}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#6F7072' }}>States with coverage mandates:</span>
                  <span className="font-semibold" style={{ color: '#224057' }}>{nationalStats.statesWithMandate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#6F7072' }}>Total eligible population:</span>
                  <span className="font-semibold" style={{ color: '#224057' }}>{(nationalStats.totalEligible / 1000000).toFixed(1)}M</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #D1DBE8', boxShadow: '0 2px 8px rgba(34,64,87,0.07)' }}>
            <h3 className="font-semibold mb-4" style={{ color: '#224057' }}>Highest Adoption</h3>
            <div className="space-y-3">
              {topStates.map((state, index) => (
                <div key={state.state_code} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span
                      className="w-5 h-5 rounded-full text-xs flex items-center justify-center mr-2 font-semibold flex-shrink-0"
                      style={{ backgroundColor: '#E8F0F8', color: '#224057' }}
                    >
                      {index + 1}
                    </span>
                    <span className="text-sm" style={{ color: '#4A5568' }}>{state.state_name}</span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#234D8B' }}>{state.adoption_score}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lowest Performers */}
          <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #D1DBE8', boxShadow: '0 2px 8px rgba(34,64,87,0.07)' }}>
            <h3 className="font-semibold mb-4" style={{ color: '#224057' }}>Lowest Adoption</h3>
            <div className="space-y-3">
              {bottomStates.map((state) => (
                <div key={state.state_code} className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: '#4A5568' }}>{state.state_name}</span>
                  <span className="text-sm font-semibold" style={{ color: '#9BAABB' }}>{state.adoption_score}%</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid #E8F0F8' }}>
              <p className="text-xs leading-relaxed" style={{ color: '#9BAABB' }}>
                Lowest adoption regions: Deep South, Rural Midwest.
                These areas often have higher CVD prevalence and lower access to imaging centers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="rounded-lg p-6" style={{ backgroundColor: '#E8F0F8', border: '1px solid #D1DBE8' }}>
        <h3 className="font-semibold mb-4" style={{ color: '#224057' }}>Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" style={{ color: '#4A5568' }}>
          {[
            'States with coverage mandates (CA, MA) show 2x higher adoption rates on average',
            'Areas with highest CVD prevalence often have lowest CAC adoption — an opportunity gap',
            'Texas leads adoption despite lack of mandate — driven by major health systems',
            'Minnesota\'s high adoption correlates with strong integrated health system presence'
          ].map((insight, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F8C762' }}>
                <svg className="w-2.5 h-2.5" fill="#224057" viewBox="0 0 20 20">
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
