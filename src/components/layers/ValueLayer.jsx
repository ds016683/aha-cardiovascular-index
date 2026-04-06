import { useState, useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts'
import { stateData, nationalStats } from '../../data/syntheticStates'

function ValueLayer() {
  const [scope, setScope] = useState('National')
  const [currentAdoption, setCurrentAdoption] = useState(12)
  const [targetAdoption, setTargetAdoption] = useState(25)
  const [population, setPopulation] = useState(nationalStats.totalEligible)
  const [prevalence, setPrevalence] = useState(parseFloat(nationalStats.avgPrevalence))
  const [payerMix, setPayerMix] = useState({ commercial: 55, medicare: 35, medicaid: 10 })

  // Update values when scope changes
  const handleScopeChange = (newScope) => {
    setScope(newScope)
    if (newScope === 'National') {
      setPopulation(nationalStats.totalEligible)
      setPrevalence(parseFloat(nationalStats.avgPrevalence))
      setCurrentAdoption(nationalStats.avgAdoption)
    } else {
      const state = stateData.find(s => s.state_name === newScope)
      if (state) {
        setPopulation(state.eligible_population)
        setPrevalence(state.prevalence_rate)
        setCurrentAdoption(state.adoption_score)
      }
    }
  }

  // Calculate outputs
  const calculations = useMemo(() => {
    // Base calculation assumptions
    const atRiskPopulation = population * (prevalence / 100)
    const currentScreened = atRiskPopulation * (currentAdoption / 100)
    const targetScreened = atRiskPopulation * (targetAdoption / 100)
    const additionalScreened = targetScreened - currentScreened
    
    // CAC effectiveness assumptions
    const riskReclassificationRate = 0.25  // 25% get reclassified
    const maceReductionRate = 0.30         // 30% reduction in events for those appropriately treated
    const baselineMaceRate = 0.08          // 8% 10-year MACE rate for intermediate risk
    
    // Economic assumptions
    const costPerScan = 150                // Average cost per CAC scan
    const costPerMaceEvent = 35000         // Average cost of MACE event
    const qalyValuePerEvent = 0.3          // QALYs saved per event prevented
    
    // Calculations
    const patientsReclassified = additionalScreened * riskReclassificationRate
    const potentialMaceEvents = additionalScreened * baselineMaceRate
    const eventsPrevented = potentialMaceEvents * maceReductionRate
    
    const implementationCost = additionalScreened * costPerScan
    const savingsFromEventsPrevented = eventsPrevented * costPerMaceEvent
    const netSavings = savingsFromEventsPrevented - implementationCost
    const roi = implementationCost > 0 ? savingsFromEventsPrevented / implementationCost : 0
    const qalysSaved = eventsPrevented * qalyValuePerEvent

    return {
      livesImpacted: Math.round(additionalScreened),
      eventsPrevented: Math.round(eventsPrevented),
      totalSavings: Math.round(savingsFromEventsPrevented),
      implementationCost: Math.round(implementationCost),
      netSavings: Math.round(netSavings),
      roi: roi.toFixed(2),
      qalys: Math.round(qalysSaved * 10) / 10,
      currentBurden: Math.round(atRiskPopulation * baselineMaceRate * costPerMaceEvent)
    }
  }, [population, prevalence, currentAdoption, targetAdoption])

  // Chart data
  const chartData = [
    { name: 'Current Burden', value: calculations.currentBurden / 1000000, fill: '#DC2626' },
    { name: 'Implementation Cost', value: -calculations.implementationCost / 1000000, fill: '#F59E0B' },
    { name: 'Events Prevented', value: calculations.totalSavings / 1000000, fill: '#10B981' },
    { name: 'Net Savings', value: calculations.netSavings / 1000000, fill: '#C8102E' },
  ]

  const formatCurrency = (value) => {
    if (Math.abs(value) >= 1000000000) return `$${(value / 1000000000).toFixed(1)}B`
    if (Math.abs(value) >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
    if (Math.abs(value) >= 1000) return `$${(value / 1000).toFixed(0)}K`
    return `$${value.toLocaleString()}`
  }

  const handleDownloadAssumptions = () => {
    const assumptions = `
CARDIOVASCULAR PREVENTION INDEX - ESVA CALCULATOR ASSUMPTIONS
============================================================

GEOGRAPHIC SCOPE: ${scope}
Current Adoption Rate: ${currentAdoption}%
Target Adoption Rate: ${targetAdoption}%
Eligible Population: ${population.toLocaleString()}
Disease Prevalence: ${prevalence}%

PAYER MIX:
- Commercial: ${payerMix.commercial}%
- Medicare: ${payerMix.medicare}%
- Medicaid: ${payerMix.medicaid}%

KEY ASSUMPTIONS:
- Risk reclassification rate: 25% (based on MESA study)
- MACE reduction rate with appropriate treatment: 30%
- Baseline 10-year MACE rate for intermediate risk: 8%
- Average cost per CAC scan: $150
- Average cost per MACE event: $35,000
- QALYs saved per event prevented: 0.3

CALCULATED OUTPUTS:
- Lives Impacted: ${calculations.livesImpacted.toLocaleString()}
- MACE Events Prevented: ${calculations.eventsPrevented.toLocaleString()}
- Total Cost Savings: ${formatCurrency(calculations.totalSavings)}
- Implementation Cost: ${formatCurrency(calculations.implementationCost)}
- Net Savings: ${formatCurrency(calculations.netSavings)}
- ROI Ratio: ${calculations.roi}x
- QALYs Gained: ${calculations.qalys}

---
Generated by Cardiovascular Prevention Index
AHA + Third Horizon Strategies
For demonstration purposes only - synthetic data
    `.trim()

    alert(assumptions)
  }

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What's the value of closing the gap?</h2>
        <p className="text-gray-600">Economic and social value analysis of increasing CAC scoring adoption</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Controls */}
        <div className="bg-white rounded-xl border shadow-sm p-6 space-y-6">
          <h3 className="font-semibold text-gray-900 text-lg">Model Parameters</h3>

          {/* Geographic Scope */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Scope</label>
            <select
              value={scope}
              onChange={(e) => handleScopeChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent"
            >
              <option value="National">National</option>
              {stateData.map(state => (
                <option key={state.state_code} value={state.state_name}>{state.state_name}</option>
              ))}
            </select>
          </div>

          {/* Current Adoption Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Adoption Rate: <span className="text-[#C8102E] font-semibold">{currentAdoption}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="40"
              value={currentAdoption}
              onChange={(e) => setCurrentAdoption(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0%</span>
              <span>40%</span>
            </div>
          </div>

          {/* Target Adoption Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Adoption Rate: <span className="text-green-600 font-semibold">{targetAdoption}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="60"
              value={targetAdoption}
              onChange={(e) => setTargetAdoption(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0%</span>
              <span>60%</span>
            </div>
          </div>

          {/* Population & Prevalence */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Eligible Population</label>
              <input
                type="number"
                value={population}
                onChange={(e) => setPopulation(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CVD Prevalence (%)</label>
              <input
                type="number"
                step="0.1"
                value={prevalence}
                onChange={(e) => setPrevalence(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>

          {/* Payer Mix */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Payer Mix</label>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Commercial</span>
                  <span className="font-medium">{payerMix.commercial}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={payerMix.commercial}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    const remaining = 100 - val
                    setPayerMix({
                      commercial: val,
                      medicare: Math.min(payerMix.medicare, remaining),
                      medicaid: remaining - Math.min(payerMix.medicare, remaining)
                    })
                  }}
                  className="w-full h-2"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Medicare</span>
                  <span className="font-medium">{payerMix.medicare}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={100 - payerMix.commercial}
                  value={payerMix.medicare}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    setPayerMix({
                      ...payerMix,
                      medicare: val,
                      medicaid: 100 - payerMix.commercial - val
                    })
                  }}
                  className="w-full h-2"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Medicaid</span>
                  <span className="font-medium">{payerMix.medicaid}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-[#C8102E] rounded-full"
                    style={{ width: `${payerMix.medicaid}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Output Results */}
        <div className="space-y-4">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border shadow-sm p-5">
              <div className="text-sm text-gray-500 mb-1">Lives Impacted</div>
              <div className="text-2xl font-bold text-gray-900">{calculations.livesImpacted.toLocaleString()}</div>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-5">
              <div className="text-sm text-gray-500 mb-1">MACE Events Prevented</div>
              <div className="text-2xl font-bold text-[#C8102E]">{calculations.eventsPrevented.toLocaleString()}</div>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-5">
              <div className="text-sm text-gray-500 mb-1">Total Cost Savings</div>
              <div className="text-2xl font-bold text-green-600">{formatCurrency(calculations.totalSavings)}</div>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-5">
              <div className="text-sm text-gray-500 mb-1">Implementation Cost</div>
              <div className="text-2xl font-bold text-amber-600">{formatCurrency(calculations.implementationCost)}</div>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-5">
              <div className="text-sm text-gray-500 mb-1">ROI Ratio</div>
              <div className="text-2xl font-bold text-purple-600">{calculations.roi}x</div>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-5">
              <div className="text-sm text-gray-500 mb-1">QALYs Gained</div>
              <div className="text-2xl font-bold text-blue-600">{calculations.qalys.toLocaleString()}</div>
            </div>
          </div>

          {/* Net Savings Highlight */}
          <div className={`rounded-xl p-6 ${calculations.netSavings >= 0 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="text-sm text-gray-600 mb-1">Net Savings</div>
            <div className={`text-4xl font-bold ${calculations.netSavings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(calculations.netSavings)}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {calculations.netSavings >= 0 
                ? `For every dollar invested, ${calculations.roi}x is returned through prevented cardiac events.`
                : 'Implementation cost exceeds projected savings at current parameters.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Value Flow Analysis</h3>
        <div style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ top: 20, right: 30, left: 120, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis 
                type="number" 
                tickFormatter={(v) => `$${v}M`}
                domain={['auto', 'auto']}
              />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={110} />
              <Tooltip 
                formatter={(value) => [`$${Math.abs(value).toFixed(1)}M`, '']}
                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}
              />
              <ReferenceLine x={0} stroke="#9CA3AF" />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center">
        <button
          onClick={handleDownloadAssumptions}
          className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Assumptions
        </button>
      </div>

      {/* Methodology Note */}
      <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600">
        <h4 className="font-semibold text-gray-900 mb-2">Methodology Notes</h4>
        <ul className="space-y-1 list-disc list-inside">
          <li>Risk reclassification rate (25%) based on MESA and CAC Consortium studies</li>
          <li>MACE reduction (30%) assumes appropriate treatment of reclassified patients</li>
          <li>Baseline MACE rate (8% 10-year) reflects intermediate-risk population</li>
          <li>All figures are synthetic and for demonstration purposes only</li>
          <li>Actual implementation would require health plan claims data integration</li>
        </ul>
      </div>
    </div>
  )
}

export default ValueLayer
