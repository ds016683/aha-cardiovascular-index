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
      case 'evidence':
        return <EvidenceLayer />
      case 'implementation':
        return <ImplementationLayer />
      case 'value':
        return <ValueLayer />
      case 'pathway':
        return <PathwayLayer />
      default:
        return <EvidenceLayer />
    }
  }

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb & Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-[#C8102E]">Guidelines</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900">CAC Scoring</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Coronary Artery Calcium (CAC) Scoring
              </h1>
              <p className="text-gray-600 mt-1">
                Evidence-based cardiovascular risk refinement for intermediate-risk patients
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                AHA/ACC Class IIa Recommendation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Layer Navigation */}
      <div className="bg-gray-50 border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {layers.map((layer, index) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex items-center px-4 lg:px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeLayer === layer.id
                    ? 'border-[#C8102E] text-[#C8102E]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{layer.icon}</span>
                <span className="hidden sm:inline">Layer {index + 1}:</span>
                <span className="ml-1">{layer.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Layer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderLayer()}
      </div>

      {/* Quick Nav */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-white rounded-lg shadow-lg border p-2 flex space-x-1">
          {layers.map((layer, index) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-colors ${
                activeLayer === layer.id
                  ? 'bg-[#C8102E] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
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
