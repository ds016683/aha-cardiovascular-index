import { useState, useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts'
import { stateData, nationalStats } from '../../data/syntheticStates'

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
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px'
  },
  inputCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    padding: '32px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '28px'
  },
  formGroup: {
    marginBottom: '28px'
  },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: '8px'
  },
  labelValue: {
    fontWeight: '700'
  },
  labelValueRed: {
    color: '#C8102E'
  },
  labelValueGreen: {
    color: '#1A7A4A'
  },
  select: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    fontSize: '14px',
    color: '#1A1A1A',
    backgroundColor: '#FFFFFF',
    outline: 'none'
  },
  rangeLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '4px',
    fontSize: '12px',
    color: '#9CA3AF'
  },
  inputGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    fontSize: '14px',
    color: '#1A1A1A',
    backgroundColor: '#FFFFFF',
    outline: 'none'
  },
  payerSection: {
    marginBottom: '0'
  },
  payerItem: {
    marginBottom: '16px'
  },
  payerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    marginBottom: '4px'
  },
  payerLabel: {
    color: '#6B7280'
  },
  payerValue: {
    fontWeight: '600',
    color: '#1A1A1A'
  },
  progressBar: {
    width: '100%',
    height: '6px',
    borderRadius: '999px',
    backgroundColor: '#E5E7EB'
  },
  progressFill: {
    height: '6px',
    borderRadius: '999px',
    backgroundColor: '#9CA3AF'
  },
  outputSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  },
  metricCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    padding: '24px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  metricLabel: {
    fontSize: '12px',
    color: '#6B7280',
    marginBottom: '8px'
  },
  metricValue: {
    fontSize: '24px',
    fontWeight: '700'
  },
  savingsBox: {
    borderRadius: '12px',
    padding: '28px'
  },
  savingsBoxPositive: {
    backgroundColor: '#E8F5EE',
    border: '1px solid #A8DFC0'
  },
  savingsBoxNegative: {
    backgroundColor: '#FEF0EE',
    border: '1px solid #F5C6C0'
  },
  savingsLabel: {
    fontSize: '14px',
    color: '#6B7280',
    marginBottom: '8px'
  },
  savingsValue: {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '12px'
  },
  savingsText: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.6'
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    padding: '32px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  chartTitle: {
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '28px'
  },
  downloadBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 24px',
    borderRadius: '8px',
    backgroundColor: '#F5F5F5',
    color: '#1A1A1A',
    border: '1px solid #E5E7EB',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  methodologyBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    padding: '32px'
  },
  methodologyTitle: {
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '16px'
  },
  methodologyList: {
    listStyle: 'disc',
    listStylePosition: 'inside',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontSize: '14px',
    color: '#6B7280'
  }
}

function ValueLayer() {
  const [scope, setScope] = useState('National')
  const [currentAdoption, setCurrentAdoption] = useState(12)
  const [targetAdoption, setTargetAdoption] = useState(25)
  const [population, setPopulation] = useState(nationalStats.totalEligible)
  const [prevalence, setPrevalence] = useState(parseFloat(nationalStats.avgPrevalence))
  const [payerMix, setPayerMix] = useState({ commercial: 55, medicare: 35, medicaid: 10 })

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

  const calculations = useMemo(() => {
    const atRiskPopulation = population * (prevalence / 100)
    const currentScreened = atRiskPopulation * (currentAdoption / 100)
    const targetScreened = atRiskPopulation * (targetAdoption / 100)
    const additionalScreened = targetScreened - currentScreened

    const riskReclassificationRate = 0.25
    const maceReductionRate = 0.30
    const baselineMaceRate = 0.08

    const costPerScan = 150
    const costPerMaceEvent = 35000
    const qalyValuePerEvent = 0.3

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

  const chartData = [
    { name: 'Current Burden', value: calculations.currentBurden / 1000000, fill: '#9CA3AF' },
    { name: 'Implementation Cost', value: -calculations.implementationCost / 1000000, fill: '#6B7280' },
    { name: 'Events Prevented', value: calculations.totalSavings / 1000000, fill: '#C8102E' },
    { name: 'Net Savings', value: calculations.netSavings / 1000000, fill: '#1A1A1A' },
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
American Heart Association
For demonstration purposes only - synthetic data
    `.trim()

    alert(assumptions)
  }

  return (
    <div style={styles.container}>
      {/* Section Header */}
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>What's the value of closing the gap?</h2>
        <div style={styles.sectionAccent}></div>
        <p style={styles.sectionSubtitle}>Economic and social value analysis of increasing CAC scoring adoption</p>
      </div>

      <div style={styles.grid}>
        {/* Input Controls */}
        <div style={styles.inputCard}>
          <h3 style={styles.cardTitle}>Model Parameters</h3>

          {/* Geographic Scope */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Geographic Scope</label>
            <select
              value={scope}
              onChange={(e) => handleScopeChange(e.target.value)}
              style={styles.select}
            >
              <option value="National">National</option>
              {stateData.map(state => (
                <option key={state.state_code} value={state.state_name}>{state.state_name}</option>
              ))}
            </select>
          </div>

          {/* Current Adoption Rate */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Current Adoption Rate:{' '}
              <span style={{ ...styles.labelValue, ...styles.labelValueRed }}>{currentAdoption}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="40"
              value={currentAdoption}
              onChange={(e) => setCurrentAdoption(parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
            <div style={styles.rangeLabels}>
              <span>0%</span>
              <span>40%</span>
            </div>
          </div>

          {/* Target Adoption Rate */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Target Adoption Rate:{' '}
              <span style={{ ...styles.labelValue, ...styles.labelValueGreen }}>{targetAdoption}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="60"
              value={targetAdoption}
              onChange={(e) => setTargetAdoption(parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
            <div style={styles.rangeLabels}>
              <span>0%</span>
              <span>60%</span>
            </div>
          </div>

          {/* Population & Prevalence */}
          <div style={styles.formGroup}>
            <div style={styles.inputGrid}>
              <div>
                <label style={styles.label}>Eligible Population</label>
                <input
                  type="number"
                  value={population}
                  onChange={(e) => setPopulation(parseInt(e.target.value) || 0)}
                  style={styles.input}
                />
              </div>
              <div>
                <label style={styles.label}>CVD Prevalence (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={prevalence}
                  onChange={(e) => setPrevalence(parseFloat(e.target.value) || 0)}
                  style={styles.input}
                />
              </div>
            </div>
          </div>

          {/* Payer Mix */}
          <div style={styles.payerSection}>
            <label style={{ ...styles.label, marginBottom: '16px' }}>Payer Mix</label>
            {[
              { key: 'commercial', label: 'Commercial' },
              { key: 'medicare', label: 'Medicare' }
            ].map(({ key, label }) => (
              <div key={key} style={styles.payerItem}>
                <div style={styles.payerHeader}>
                  <span style={styles.payerLabel}>{label}</span>
                  <span style={styles.payerValue}>{payerMix[key]}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={key === 'medicare' ? 100 - payerMix.commercial : 100}
                  value={payerMix[key]}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    if (key === 'commercial') {
                      const remaining = 100 - val
                      setPayerMix({ commercial: val, medicare: Math.min(payerMix.medicare, remaining), medicaid: remaining - Math.min(payerMix.medicare, remaining) })
                    } else {
                      setPayerMix({ ...payerMix, medicare: val, medicaid: 100 - payerMix.commercial - val })
                    }
                  }}
                  style={{ width: '100%' }}
                />
              </div>
            ))}
            <div style={styles.payerItem}>
              <div style={styles.payerHeader}>
                <span style={styles.payerLabel}>Medicaid</span>
                <span style={styles.payerValue}>{payerMix.medicaid}%</span>
              </div>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: `${payerMix.medicaid}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Output Results */}
        <div style={styles.outputSection}>
          {/* Key Metrics Grid */}
          <div style={styles.metricsGrid}>
            {[
              { label: 'Lives Impacted', value: calculations.livesImpacted.toLocaleString(), color: '#1A1A1A' },
              { label: 'MACE Events Prevented', value: calculations.eventsPrevented.toLocaleString(), color: '#C8102E' },
              { label: 'Total Cost Savings', value: formatCurrency(calculations.totalSavings), color: '#1A7A4A' },
              { label: 'Implementation Cost', value: formatCurrency(calculations.implementationCost), color: '#6B7280' },
              { label: 'ROI Ratio', value: `${calculations.roi}x`, color: '#C8102E' },
              { label: 'QALYs Gained', value: calculations.qalys.toLocaleString(), color: '#1A1A1A' }
            ].map((metric, i) => (
              <div key={i} style={styles.metricCard}>
                <div style={styles.metricLabel}>{metric.label}</div>
                <div style={{ ...styles.metricValue, color: metric.color }}>{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Net Savings Highlight */}
          <div style={{
            ...styles.savingsBox,
            ...(calculations.netSavings >= 0 ? styles.savingsBoxPositive : styles.savingsBoxNegative)
          }}>
            <div style={styles.savingsLabel}>Net Savings</div>
            <div style={{
              ...styles.savingsValue,
              color: calculations.netSavings >= 0 ? '#1A7A4A' : '#C0392B'
            }}>
              {formatCurrency(calculations.netSavings)}
            </div>
            <p style={styles.savingsText}>
              {calculations.netSavings >= 0
                ? `For every dollar invested, ${calculations.roi}x is returned through prevented cardiac events.`
                : 'Implementation cost exceeds projected savings at current parameters.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div style={styles.chartCard}>
        <h3 style={styles.chartTitle}>Value Flow Analysis</h3>
        <div style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 130, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#F3F4F6" />
              <XAxis
                type="number"
                tickFormatter={(v) => `$${v}M`}
                domain={['auto', 'auto']}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: '#1A1A1A', fontSize: 12, fontWeight: 500 }}
                width={120}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(value) => [`$${Math.abs(value).toFixed(1)}M`, '']}
                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                labelStyle={{ color: '#1A1A1A', fontWeight: 600 }}
              />
              <ReferenceLine x={0} stroke="#E5E7EB" />
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
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleDownloadAssumptions} style={styles.downloadBtn}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Assumptions
        </button>
      </div>

      {/* Methodology Note */}
      <div style={styles.methodologyBox}>
        <h4 style={styles.methodologyTitle}>Methodology Notes</h4>
        <ul style={styles.methodologyList}>
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
