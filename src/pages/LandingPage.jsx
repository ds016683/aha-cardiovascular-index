import React from 'react'
import { Link } from 'react-router-dom'

const guidelines = [
  {
    id: 'cac',
    name: 'Coronary Artery Calcium (CAC) Scoring',
    description: 'A noninvasive CT scan measuring calcium buildup in coronary arteries to identify subclinical atherosclerosis and refine cardiovascular risk for intermediate-risk patients â€” informing statin therapy and lifestyle decisions.',
    keyStat: 'Only 12% of eligible patients receive CAC scoring',
    coverage: 'Many plans treat it as elective; $100â€“$400 out-of-pocket. Few states mandate coverage.',
    guidelineStatus: 'AHA/ACC Class IIa Recommendation (2019 Primary Prevention Guidelines)',
    active: true,
    path: '/cac-scoring'
  },
  {
    id: 'abpm',
    name: 'Ambulatory Blood Pressure Monitoring (ABPM)',
    description: 'A wearable device records blood pressure over 24 hours, enabling accurate diagnosis of hypertension, white-coat syndrome, and masked hypertension that standard office readings miss.',
    keyStat: 'Guideline gold standard for hypertension diagnosis â€” used in <5% of cases',
    coverage: 'Many plans restrict reimbursement to narrow scenarios or pay rates too low for clinics to offer the service sustainably.',
    guidelineStatus: 'AHA/ACC Endorsed â€” Gold Standard for Hypertension Diagnosis',
    active: false,
    comingSoon: true
  },
  {
    id: 'genetic',
    name: 'Cardiovascular Genetic Testing',
    description: 'Genetic panels for familial hypercholesterolemia (FH), cardiomyopathies, and arrhythmia syndromes enable early identification of inherited risk â€” dramatically reducing lifetime cardiovascular events through early intervention.',
    keyStat: '90% of the 1.3M Americans with FH remain undiagnosed',
    coverage: 'Many commercial insurers classify cardiovascular genetic panels as investigational, leaving patients to pay full cost out-of-pocket.',
    guidelineStatus: 'ACC/AHA Supported â€” Clinically Actionable and Cost-Effective',
    active: false,
    comingSoon: true
  },
  {
    id: 'cardiac-rehab',
    name: 'Cardiac Rehabilitation',
    description: 'Structured, supervised exercise and education programs for post-MI, post-CABG, and heart failure patients â€” proven to reduce mortality and hospitalizations, yet chronically underutilized.',
    keyStat: 'Only 24% of eligible post-MI patients participate nationally',
    coverage: 'Coverage exists but access is limited by geographic gaps, scheduling barriers, and low reimbursement rates.',
    guidelineStatus: 'AHA/ACC Class I Recommendation â€” Highest Level of Evidence',
    active: false,
    comingSoon: true
  },
  {
    id: 'future-1',
    name: 'Hypertension Management Protocols',
    description: 'Standardized treat-to-target protocols for blood pressure management in high-risk populations, including digital health monitoring and pharmacist-led interventions.',
    keyStat: 'Nearly half of U.S. adults have hypertension; only 1 in 4 have it controlled',
    guidelineStatus: 'AHA 2026 Scientific Sessions â€” Q3 2026',
    active: false,
    isFuture: true
  },
  {
    id: 'future-2',
    name: 'Preventive Statin Therapy Access',
    description: 'Analysis of coverage gaps and access barriers for guideline-recommended statin therapy across commercial, Medicare, and Medicaid populations using TiC reimbursement data.',
    keyStat: 'Up to 30% of high-risk patients who qualify for statins are untreated',
    guidelineStatus: 'AHA 2026 Scientific Sessions â€” Q4 2026',
    active: false,
    isFuture: true
  }
]

const CAC_QA = [
  {
    q: "What is CAC scoring and why does it matter?",
    a: "Coronary Artery Calcium (CAC) scoring is a noninvasive CT scan that detects and quantifies calcified plaque in the coronary arteries. It's one of the most powerful tools for identifying cardiovascular risk in intermediate-risk patients â€” helping doctors decide whether to start statin therapy. Studies show it reclassifies risk in ~25% of patients, prevents ~30% of MACE events when used to guide therapy, and avoids unnecessary statin use in ~40% of low-risk patients."
  },
  {
    q: "Why is CAC adoption so low?",
    a: "Despite strong guideline endorsement (AHA/ACC Class IIa), CAC scoring faces significant access barriers. Most commercial health plans do not cover it, leaving patients to pay $100â€“$400 out-of-pocket. Only a handful of states mandate coverage. Additionally, not all imaging centers offer the test, and many primary care physicians are unfamiliar with interpreting results or incorporating them into shared decision-making."
  },
  {
    q: "Which states have the highest adoption rates?",
    a: "Based on our synthetic adoption model, Texas leads nationally at 32% adoption â€” driven partly by state legislation requiring coverage for certain cardiac imaging. Minnesota (28%) and Massachusetts (26%) follow, both benefiting from strong academic medical center networks and progressive payer relationships. The lowest adoption is concentrated in the Southeast: Mississippi (4%), Alabama (5%), and West Virginia (5%) â€” states with limited imaging infrastructure and lower rates of preventive care utilization."
  },
  {
    q: "What would happen if adoption doubled?",
    a: "Using our ESVA model with national parameters: doubling CAC adoption from 12% to 24% would impact approximately 8.2 million additional eligible patients. This would prevent an estimated 287,000 major cardiovascular events over 10 years, generate $4.1 billion in net healthcare savings (after accounting for implementation costs), and yield roughly 412,000 quality-adjusted life years (QALYs). The ROI is approximately 3.2x â€” a compelling case for payer coverage expansion."
  },
  {
    q: "How does this platform support AHA advocacy?",
    a: "The Cardiovascular Prevention Index gives AHA three new evidence levers: First, real-time coverage mapping â€” showing exactly which health plans cover CAC scoring and at what rates. Second, geographic gap analysis â€” identifying where eligible patients have no in-network access to imaging. Third, economic modeling â€” quantifying the cost of inaction in terms insurers and employers understand. Together, these create a data-driven foundation for AHA's advocacy with CMS, state legislatures, and major health plans."
  },
  {
    q: "What does the data actually show about payer coverage?",
    a: "Our analysis of Transparency in Coverage (TiC) data reveals significant variation: only 31% of commercial health plans list CAC scoring as a covered service with contracted rates. Of those that do cover it, reimbursement rates vary from $45 to $180 per scan â€” a 4x range that directly affects imaging center participation and patient access. Medicare covers CAC scoring in limited circumstances, while Medicaid coverage is nearly nonexistent in most states."
  }
]

function AIChatPanel({ isOpen, onClose }) {
  const [selected, setSelected] = React.useState(null)
  const [thinking, setThinking] = React.useState(false)
  const [answer, setAnswer] = React.useState('')

  const handleSelect = (qa) => {
    setSelected(qa)
    setAnswer('')
    setThinking(true)
    // Simulate thinking delay
    setTimeout(() => {
      setThinking(false)
      let i = 0
      const interval = setInterval(() => {
        setAnswer(qa.a.substring(0, i))
        i += 8
        if (i >= qa.a.length) {
          setAnswer(qa.a)
          clearInterval(interval)
        }
      }, 16)
    }, 800)
  }

  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed', top: 0, right: 0, bottom: 0, width: '380px',
      backgroundColor: '#FFFFFF', boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
      zIndex: 1000, display: 'flex', flexDirection: 'column',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{ backgroundColor: '#C8102E', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>Ask the Prevention Index</div>
          <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, marginTop: 2 }}>CAC Scoring â€” Synthetic Demo</div>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: 20, lineHeight: 1, padding: '4px 8px' }}>Ã—</button>
      </div>

      {/* Question list */}
      <div style={{ padding: '16px', borderBottom: '1px solid #F0F0F0' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Suggested Questions</div>
        {CAC_QA.map((qa, i) => (
          <button key={i} onClick={() => handleSelect(qa)} style={{
            display: 'block', width: '100%', textAlign: 'left',
            padding: '8px 12px', marginBottom: 6, borderRadius: 8,
            border: `1px solid ${selected === qa ? '#C8102E' : '#E5E5E5'}`,
            backgroundColor: selected === qa ? '#FFF5F5' : 'white',
            color: selected === qa ? '#C8102E' : '#1A1A1A',
            fontSize: 13, cursor: 'pointer', lineHeight: 1.4,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            transition: 'all 0.15s'
          }}>
            {qa.q}
          </button>
        ))}
      </div>

      {/* Answer area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
        {!selected && (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#9CA3AF' }}>
            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ margin: '0 auto 12px', display: 'block' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div style={{ fontSize: 13 }}>Select a question above to see a data-driven response from the Prevention Index.</div>
          </div>
        )}
        {selected && thinking && (
          <div style={{ padding: '20px 0' }}>
            <div style={{ fontSize: 11, color: '#6B7280', marginBottom: 12 }}>Searching Prevention Index...</div>
            {['Retrieving CAC adoption data...', 'Cross-referencing TiC coverage analysis...', 'Generating response...'].map((step, i) => (
              <div key={i} style={{ fontSize: 12, color: '#C8102E', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#C8102E', animation: 'pulse 1s infinite' }} />
                {step}
              </div>
            ))}
          </div>
        )}
        {selected && !thinking && answer && (
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#C8102E', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Prevention Index Response</div>
            <div style={{ fontSize: 14, color: '#1A1A1A', lineHeight: 1.7 }}>{answer}</div>
            <div style={{ marginTop: 16, padding: '10px 14px', backgroundColor: '#F5F5F5', borderRadius: 8, fontSize: 11, color: '#9CA3AF' }}>
              Based on synthetic demonstration data. Full deployment uses live TiC data and Claude AI.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  page: {
    backgroundColor: '#F5F5F5',
    minHeight: '100vh'
  },
  hero: {
    backgroundColor: '#C8102E',
    color: '#FFFFFF',
    padding: '96px 0 112px'
  },
  heroContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  },
  heroContent: {
    maxWidth: '900px'
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: '700',
    lineHeight: '1.1',
    marginBottom: '24px',
    color: '#FFFFFF'
  },
  heroSubtitle: {
    fontSize: '20px',
    lineHeight: '1.7',
    marginBottom: '40px',
    color: 'rgba(255,255,255,0.85)'
  },
  heroCta: {
    backgroundColor: '#FFFFFF',
    color: '#C8102E',
    padding: '16px 32px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginRight: '16px'
  },
  heroCtaSecondary: {
    border: '2px solid rgba(255,255,255,0.5)',
    color: '#FFFFFF',
    padding: '16px 32px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  section: {
    padding: '80px 0',
    backgroundColor: '#FFFFFF'
  },
  sectionAlt: {
    padding: '80px 0',
    backgroundColor: '#F5F5F5'
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  },
  sectionHeader: {
    marginBottom: '48px'
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: '8px'
  },
  sectionTitleAccent: {
    display: 'inline-block',
    width: '48px',
    height: '3px',
    backgroundColor: '#C8102E',
    marginBottom: '16px'
  },
  sectionSubtitle: {
    fontSize: '18px',
    color: '#6B7280',
    lineHeight: '1.6'
  },
  layerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px'
  },
  layerCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #E5E7EB'
  },
  layerNumber: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: '#C8102E',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '16px',
    marginBottom: '16px'
  },
  layerTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '8px'
  },
  layerDesc: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.6'
  },
  guidelineGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px'
  },
  guidelineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #E5E7EB',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  guidelineCardActive: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '24px',
    border: '2px solid #C8102E',
    boxShadow: '0 4px 16px rgba(200,16,46,0.12)'
  },
  guidelineCardFuture: {
    backgroundColor: '#F5F5F5',
    borderRadius: '12px',
    padding: '24px',
    border: '2px dashed #E5E7EB'
  },
  guidelineCardComingSoon: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #E5E7EB',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  badge: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    marginBottom: '16px'
  },
  badgeLive: {
    backgroundColor: '#E8F5EE',
    color: '#1A7A4A'
  },
  badgeSoon: {
    backgroundColor: '#FFF5F5',
    color: '#C8102E'
  },
  badgeFuture: {
    backgroundColor: '#F5F5F5',
    color: '#6B7280'
  },
  guidelineTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '8px'
  },
  guidelineTitleInactive: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: '8px'
  },
  guidelineTitleComingSoon: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '8px'
  },
  guidelineDesc: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  guidelineDescInactive: {
    fontSize: '14px',
    color: '#9CA3AF',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  guidelineDescComingSoon: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  guidelineStat: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#C8102E',
    marginBottom: '20px'
  },
  guidelineStatInactive: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#9CA3AF',
    marginBottom: '20px'
  },
  guidelineStatComingSoon: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#C8102E',
    marginBottom: '8px'
  },
  guidelineLink: {
    color: '#C8102E',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px'
  },
  ctaSection: {
    backgroundColor: '#C8102E',
    padding: '96px 0',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  ctaTitle: {
    fontSize: '40px',
    fontWeight: '700',
    marginBottom: '24px',
    color: '#FFFFFF'
  },
  ctaText: {
    fontSize: '18px',
    lineHeight: '1.7',
    marginBottom: '40px',
    color: 'rgba(255,255,255,0.85)',
    maxWidth: '700px',
    margin: '0 auto 40px'
  },
  ctaButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  partnersSection: {
    padding: '64px 0',
    backgroundColor: '#FFFFFF',
    textAlign: 'center'
  },
  partnersLabel: {
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '2px',
    color: '#9CA3AF',
    marginBottom: '32px',
    textTransform: 'uppercase'
  },
  partnersLogos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  },
  partnerName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1A1A1A'
  },
  disclaimer: {
    marginTop: '40px',
    fontSize: '13px',
    color: '#9CA3AF',
    maxWidth: '600px',
    margin: '40px auto 0'
  }
}

function LandingPage() {
  const [chatOpen, setChatOpen] = React.useState(false)

  return (
    <div style={styles.page} className="animate-fade-in">
      <AIChatPanel isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      {/* Floating Chat Trigger */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        style={{
          position: 'fixed', bottom: 32, right: chatOpen ? 412 : 32,
          backgroundColor: '#C8102E', color: 'white', border: 'none',
          borderRadius: 50, width: 56, height: 56, cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(200,16,46,0.4)', zIndex: 999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'right 0.3s ease', fontSize: 22
        }}
      >
        {chatOpen ? 'Ã—' : 'ðŸ’¬'}
      </button>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Solving the 17-Year Problem
            </h1>
            <p style={styles.heroSubtitle}>
              Evidence-based clinical guidelines take an average of 17 years to achieve widespread adoption.
              The Cardiovascular Prevention Index accelerates this timeline by combining{' '}
              <span style={{ color: '#FFFFFF', fontWeight: '500' }}>health plan transparency data</span>,{' '}
              <span style={{ color: '#FFFFFF', fontWeight: '500' }}>disease prevalence intelligence</span>, and{' '}
              <span style={{ color: '#FFFFFF', fontWeight: '500' }}>implementation science</span>.
            </p>
            <div>
              <Link to="/cac-scoring" style={styles.heroCta}>
                Explore CAC Scoring Index
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="#ecosystem" style={styles.heroCtaSecondary}>
                View All Guidelines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionTitleAccent}></div>
            <h2 style={styles.sectionTitle}>A Four-Layer Intelligence Platform</h2>
            <p style={styles.sectionSubtitle}>
              Each guideline follows the same rigorous framework - from evidence to action.
            </p>
          </div>
          <div style={styles.layerGrid}>
            {[
              { num: '1', title: 'Evidence Base', desc: 'Synthesized clinical research and guideline recommendations' },
              { num: '2', title: 'Implementation State', desc: 'Real-time mapping of adoption rates across all 50 states' },
              { num: '3', title: 'Economic Value', desc: 'Economic and social impact of closing adoption gaps' },
              { num: '4', title: 'Implementation Pathway', desc: 'Actionable roadmap for accelerating guideline adoption' }
            ].map((item) => (
              <div key={item.num} style={styles.layerCard}>
                <div style={styles.layerNumber}>{item.num}</div>
                <h3 style={styles.layerTitle}>{item.title}</h3>
                <p style={styles.layerDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section id="ecosystem" style={styles.sectionAlt}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionTitleAccent}></div>
            <h2 style={styles.sectionTitle}>Evidence-Based Guideline Ecosystem</h2>
            <p style={{ ...styles.sectionSubtitle, maxWidth: '700px' }}>
              Each guideline in the Prevention Index follows the same four-layer framework.
              This scalable approach enables AHA to deploy comprehensive intelligence for every major clinical recommendation.
            </p>
          </div>

          <div style={styles.guidelineGrid}>
            {guidelines.map((guideline) => (
              <div
                key={guideline.id}
                style={
                  guideline.active
                    ? styles.guidelineCardActive
                    : guideline.isFuture
                      ? styles.guidelineCardFuture
                      : guideline.comingSoon
                        ? styles.guidelineCardComingSoon
                        : styles.guidelineCard
                }
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <span style={{
                    ...styles.badge,
                    ...(guideline.active ? styles.badgeLive : guideline.isFuture ? styles.badgeFuture : styles.badgeSoon)
                  }}>
                    {guideline.active ? 'LIVE' : guideline.isFuture ? '2026' : 'COMING SOON'}
                  </span>
                  {guideline.active && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#C8102E">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  )}
                </div>
                <h3 style={
                  guideline.active 
                    ? styles.guidelineTitle 
                    : guideline.comingSoon 
                      ? styles.guidelineTitleComingSoon 
                      : styles.guidelineTitleInactive
                }>
                  {guideline.name}
                </h3>
                <p style={
                  guideline.active 
                    ? styles.guidelineDesc 
                    : guideline.comingSoon 
                      ? styles.guidelineDescComingSoon 
                      : styles.guidelineDescInactive
                }>
                  {guideline.description}
                </p>
                <div style={
                  guideline.active 
                    ? styles.guidelineStat 
                    : guideline.comingSoon 
                      ? styles.guidelineStatComingSoon 
                      : styles.guidelineStatInactive
                }>
                  {guideline.keyStat}
                </div>
                {guideline.comingSoon && guideline.guidelineStatus && (
                  <div style={{ fontSize: 11, color: '#C8102E', fontWeight: 600, marginTop: 8 }}>{guideline.guidelineStatus}</div>
                )}
                {guideline.comingSoon && guideline.coverage && (
                  <div style={{ fontSize: 12, color: '#6B7280', marginTop: 6, lineHeight: 1.5 }}>{guideline.coverage}</div>
                )}
                {guideline.active ? (
                  <Link to={guideline.path} style={styles.guidelineLink}>
                    Explore Index
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ) : (
                  <span style={{ fontSize: '12px', color: '#9CA3AF', marginTop: guideline.comingSoon ? 16 : 0, display: 'block' }}>
                    {guideline.isFuture ? guideline.guidelineStatus : 'Coming in future release'}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle}>From 17 Years to 5 Years</h2>
          <p style={styles.ctaText}>
            By combining transparency data, prevalence intelligence, and implementation science,
            the Prevention Index creates a new paradigm for evidence-based guideline adoption.
            Each guideline in this ecosystem represents an opportunity to save lives sooner.
          </p>
          <div style={styles.ctaButtons}>
            <a
              href="mailto:info@heart.org?subject=Cardiovascular%20Prevention%20Index%20Inquiry"
              style={styles.heroCta}
            >
              Learn More
            </a>
            <Link to="/cac-scoring" style={styles.heroCtaSecondary}>
              See It In Action
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="about" style={styles.partnersSection}>
        <div style={styles.container}>
          <h2 style={styles.partnersLabel}>Platform Partner</h2>
          <div style={styles.partnersLogos}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#C8102E">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span style={styles.partnerName}>American Heart Association</span>
          </div>
          <p style={styles.disclaimer}>
            This is a prototype demonstration. All data shown is synthetic and for illustration purposes only.
            Not intended for clinical decision-making.
          </p>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
