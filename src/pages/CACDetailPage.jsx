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
    <div className="animate-fade-in">
      {/* Breadcrumb & Header */}
      <div className="bg-white border-b" style={{ borderBottomColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center text-sm mb-3" style={{ color: '#6B7280' }}>
            <Link to="/" className="hover:underline" style={{ color: '#C8102E' }}>Guidelines</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span style={{ color: '#1A1A1A' }}>CAC Scoring</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: '#1A1A1A' }}>
                Coronary Artery Calcium (CAC) Scoring
              </h1>
              <p className="mt-2 text-base" style={{ color: '#6B7280' }}>
                Evidence-based cardiovascular risk refinement for intermediate-risk patients
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: '#E8F5EE', color: '#1A7A4A' }}
              >
                AHA/ACC Class IIa Recommendation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Red accent bar */}
      <div style={{ height: '3px', backgroundColor: '#C8102E' }}></div>

      {/* Layer Navigation */}
      <div className="border-b sticky top-0 z-10 bg-white" style={{ borderBottomColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {layers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className="flex items-center px-5 lg:px-7 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors"
                style={{
                  borderBottomColor: activeLayer === layer.id ? '#C8102E' : 'transparent',
                  color: activeLayer === layer.id ? '#C8102E' : '#6B7280'
                }}
              >
                {layer.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Layer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderLayer()}
      </div>

      {/* Quick Nav */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-white rounded-lg shadow-lg border p-2 flex space-x-1" style={{ borderColor: '#E5E7EB' }}>
          {layers.map((layer, index) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className="w-10 h-10 rounded flex items-center justify-center text-sm font-semibold transition-colors"
              style={{
                backgroundColor: activeLayer === layer.id ? '#C8102E' : '#F8F8F8',
                color: activeLayer === layer.id ? 'white' : '#1A1A1A'
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
