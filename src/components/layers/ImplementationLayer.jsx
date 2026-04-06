import { useState, useEffect, memo } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { stateData, nationalStats, getAdoptionColor, getPrevalenceColor } from '../../data/syntheticStates'

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

// State FIPS to abbreviation mapping
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
  const [viewMode, setViewMode] = useState('adoption') // 'adoption' or 'prevalence'
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
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Where does the country stand today?</h2>
        <p className="text-gray-600">Geographic variation in CAC scoring adoption and cardiovascular disease prevalence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2 bg-white rounded-xl border shadow-sm overflow-hidden">
          {/* View Toggle */}
          <div className="border-b px-4 py-3 flex items-center justify-between bg-gray-50">
            <span className="font-medium text-gray-700">
              {viewMode === 'adoption' ? 'CAC Adoption Index' : 'CVD Prevalence Rate'}
            </span>
            <div className="flex bg-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('adoption')}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  viewMode === 'adoption' 
                    ? 'bg-white text-[#C8102E] shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Adoption Rate
              </button>
              <button
                onClick={() => setViewMode('prevalence')}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  viewMode === 'prevalence' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
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
              <div
                className="fixed z-50 bg-white rounded-lg shadow-xl border p-4 pointer-events-none"
                style={{
                  left: tooltipPosition.x + 15,
                  top: tooltipPosition.y - 10,
                  minWidth: '220px'
                }}
              >
                <div className="font-semibold text-gray-900 mb-2">{hoveredState.state_name}</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Adoption Score:</span>
                    <span className="font-medium text-[#C8102E]">{hoveredState.adoption_score}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">CVD Prevalence:</span>
                    <span className="font-medium text-blue-600">{hoveredState.prevalence_rate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Eligible Population:</span>
                    <span className="font-medium">{(hoveredState.eligible_population / 1000000).toFixed(2)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Coverage Mandate:</span>
                    <span className={`font-medium ${hoveredState.coverage_mandate ? 'text-green-600' : 'text-gray-400'}`}>
                      {hoveredState.coverage_mandate ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Color Legend */}
            <div className="absolute bottom-4 left-4 bg-white/95 rounded-lg shadow-md p-3 text-xs">
              <div className="font-medium mb-2">
                {viewMode === 'adoption' ? 'Adoption Score' : 'Prevalence Rate'}
              </div>
              <div className="flex items-center space-x-1">
                {viewMode === 'adoption' ? (
                  <>
                    <div className="w-6 h-4 bg-[#FEE2E2] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#FECACA] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#FCA5A5] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#F87171] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#EF4444] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#DC2626] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#B91C1C] rounded-sm"></div>
                  </>
                ) : (
                  <>
                    <div className="w-6 h-4 bg-[#DBEAFE] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#BFDBFE] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#93C5FD] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#60A5FA] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#3B82F6] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#2563EB] rounded-sm"></div>
                    <div className="w-6 h-4 bg-[#1D4ED8] rounded-sm"></div>
                  </>
                )}
              </div>
              <div className="flex justify-between mt-1 text-gray-500">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-4">
          {/* National Stats */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">National Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-[#C8102E]">{nationalStats.avgAdoption}%</div>
                <div className="text-sm text-gray-500">National avg. CAC adoption</div>
              </div>
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">States above 20% adoption:</span>
                  <span className="font-medium">{nationalStats.statesAbove20}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">States with coverage mandates:</span>
                  <span className="font-medium">{nationalStats.statesWithMandate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total eligible population:</span>
                  <span className="font-medium">{(nationalStats.totalEligible / 1000000).toFixed(1)}M</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Highest Adoption</h3>
            <div className="space-y-2">
              {topStates.map((state, index) => (
                <div key={state.state_code} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs flex items-center justify-center mr-2 font-medium">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-700">{state.state_name}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#C8102E]">{state.adoption_score}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lowest Performers */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Lowest Adoption</h3>
            <div className="space-y-2">
              {bottomStates.map((state) => (
                <div key={state.state_code} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{state.state_name}</span>
                  <span className="text-sm font-semibold text-gray-500">{state.adoption_score}%</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs text-gray-500">
                Lowest adoption regions: Deep South, Rural Midwest. 
                These areas often have higher CVD prevalence and lower access to imaging centers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-gradient-to-r from-[#C8102E]/5 to-transparent rounded-xl p-6 border border-[#C8102E]/10">
        <h3 className="font-semibold text-gray-900 mb-3">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="flex items-start space-x-2">
            <svg className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>States with coverage mandates (CA, MA) show 2x higher adoption rates on average</span>
          </div>
          <div className="flex items-start space-x-2">
            <svg className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Areas with highest CVD prevalence often have lowest CAC adoption - an opportunity gap</span>
          </div>
          <div className="flex items-start space-x-2">
            <svg className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Texas leads adoption despite lack of mandate - driven by major health systems</span>
          </div>
          <div className="flex items-start space-x-2">
            <svg className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Minnesota's high adoption correlates with strong integrated health system presence</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImplementationLayer
