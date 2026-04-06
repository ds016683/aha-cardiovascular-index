import { useState } from 'react'
import { Link } from 'react-router-dom'
import EvidenceLayer from '../components/layers/EvidenceLayer'
import ImplementationLayer from '../components/layers/ImplementationLayer'
import ValueLayer from '../components/layers/ValueLayer'
import PathwayLayer from '../components/layers/PathwayLayer'

const layers = [
  { id: 'evidence', name: 'Evidence Base', icon: '📊' },
  { id: 'implementation', name: 'Implementation State', icon: '🗺️' },
  { id: 'value', name: 'Economic & Social Value', icon: '💰' },
  { id: 'pathway', name: 'Implementation Pathway', icon: '🛤️' }
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
      <div className="bg-white border-b" style={{ borderBottomColor: '#D1DBE8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center text-sm mb-3" style={{ color: '#9BAABB' }}>
            <Link to="/" className="hover:underline" style={{ color: '#234D8B' }}>Guidelines</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span style={{ color: '#224057' }}>CAC Scoring</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: '#224057' }}>
                Coronary Artery Calcium (CAC) Scoring
              </h1>
              <p className="mt-1 text-base" style={{ color: '#6F7072' }}>
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

      {/* Gold accent bar */}
      <div style={{ height: '2px', backgroundColor: '#F8C762' }}></div>

      {/* Layer Navigation */}
      <div className="border-b sticky top-0 z-10 bg-white" style={{ borderBottomColor: '#D1DBE8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {layers.map((layer, index) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className="flex items-center px-4 lg:px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors"
                style={{
                  borderBottomColor: activeLayer === layer.id ? '#234D8B' : 'transparent',
                  color: activeLayer === layer.id ? '#234D8B' : '#6F7072'
                }}
              >
                <span className="mr-2">{layer.icon}</span>
                <span className="hidden sm:inline" style={{ color: activeLayer === layer.id ? '#234D8B' : '#9BAABB' }}>
                  Layer {index + 1}:
                </span>
                <span className="ml-1">{layer.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Layer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {renderLayer()}
      </div>

      {/* Quick Nav */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-white rounded-lg shadow-lg border p-2 flex space-x-1" style={{ borderColor: '#D1DBE8' }}>
          {layers.map((layer, index) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className="w-10 h-10 rounded flex items-center justify-center text-sm font-semibold transition-colors"
              style={{
                backgroundColor: activeLayer === layer.id ? '#224057' : '#E8F0F8',
                color: activeLayer === layer.id ? 'white' : '#224057'
              }}
              title={`Layer ${index + 1}: ${layer.name}`}
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
