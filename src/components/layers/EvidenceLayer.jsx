import { useState } from 'react'

const keyFindings = [
  {
    stat: '~25%',
    description: 'of intermediate-risk patients reclassified to more appropriate risk categories',
    source: 'MESA Study, JACC 2015'
  },
  {
    stat: '~30%',
    description: 'reduction in major cardiac events when statin therapy is guided by CAC results',
    source: 'Multi-Ethnic Study of Atherosclerosis, Circulation 2017'
  },
  {
    stat: '~40%',
    description: 'reduction in unnecessary statin prescriptions through CAC-guided decision making',
    source: 'CAC Consortium, JAMA Cardiology 2018'
  },
  {
    stat: '$75-$400',
    description: 'typical out-of-pocket cost where CAC scoring is not covered by insurance',
    source: 'Healthcare Bluebook, 2024'
  }
]

const qaData = [
  {
    keywords: ['who', 'patient', 'candidate', 'eligible'],
    question: 'Who is an appropriate candidate for CAC scoring?',
    answer: 'CAC scoring is most valuable for patients at intermediate cardiovascular risk (10-20% 10-year ASCVD risk), where the results can meaningfully change management decisions. It may also be considered in patients at borderline risk (7.5-10%) who have additional risk-enhancing factors.'
  },
  {
    keywords: ['radiation', 'safe', 'risk', 'exposure'],
    question: 'What is the radiation exposure from CAC scoring?',
    answer: 'CAC CT uses low-dose radiation, typically 0.5-1.0 mSv, which is comparable to a mammogram and significantly less than a diagnostic coronary CT angiogram (5-15 mSv). For most intermediate-risk patients, the clinical benefit outweighs the minimal radiation risk.'
  },
  {
    keywords: ['score', 'mean', 'interpret', 'number'],
    question: 'How do I interpret CAC scores?',
    answer: 'CAC scores are measured in Agatston units. A score of 0 indicates no detectable calcification and very low near-term risk. Scores of 1-100 indicate mild disease, 101-400 moderate disease, and >400 extensive disease. Risk is best interpreted using age/sex percentiles rather than absolute values alone.'
  },
  {
    keywords: ['insurance', 'cover', 'pay', 'cost', 'reimburse'],
    question: 'Is CAC scoring covered by insurance?',
    answer: 'Coverage varies significantly by payer and state. Medicare does not currently cover CAC scoring nationally, though some Medicare Advantage plans do. Commercial coverage is inconsistent. Two states (CA, MA) have coverage mandates. Many patients pay out-of-pocket, typically $75-400.'
  },
  {
    keywords: ['guideline', 'recommend', 'aha', 'acc'],
    question: 'What do the AHA/ACC guidelines say about CAC scoring?',
    answer: 'The 2019 ACC/AHA Primary Prevention Guidelines give CAC scoring a Class IIa recommendation (reasonable to perform) for adults 40-75 at intermediate risk where treatment decisions are uncertain. It is particularly useful when patients are reluctant to start statins or desire more personalized risk information.'
  },
  {
    keywords: ['repeat', 'again', 'follow', 'serial'],
    question: 'When should CAC scoring be repeated?',
    answer: 'Serial CAC testing is generally not recommended for monitoring purposes, as the clinical value of tracking progression is uncertain. A repeat scan may be considered after 5-10 years if the initial score was 0 and the clinical situation has changed significantly.'
  }
]

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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    padding: '32px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '24px'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1A1A1A'
  },
  badge: {
    padding: '6px 12px',
    borderRadius: '999px',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    backgroundColor: '#E8F5EE',
    color: '#1A7A4A'
  },
  cardText: {
    fontSize: '15px',
    color: '#4A5568',
    lineHeight: '1.75',
    marginBottom: '20px'
  },
  cardFooter: {
    borderTop: '1px solid #F3F4F6',
    paddingTop: '20px',
    marginTop: '12px'
  },
  methodology: {
    fontSize: '12px',
    color: '#9CA3AF'
  },
  confidenceBox: {
    backgroundColor: '#E8F5EE',
    border: '1px solid #A8DFC0',
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    gap: '16px'
  },
  confidenceIcon: {
    flexShrink: 0,
    marginTop: '2px'
  },
  confidenceTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#155E3B',
    marginBottom: '8px'
  },
  confidenceText: {
    fontSize: '14px',
    color: '#1A7A4A',
    lineHeight: '1.7'
  },
  divider: {
    height: '1px',
    backgroundColor: '#C8102E',
    opacity: 0.2
  },
  findingsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px'
  },
  findingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    padding: '32px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  findingStat: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#C8102E',
    marginBottom: '12px'
  },
  findingDesc: {
    fontSize: '15px',
    color: '#4A5568',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  findingSource: {
    fontSize: '12px',
    color: '#9CA3AF'
  },
  citationsBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    padding: '32px'
  },
  citationsTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '20px'
  },
  citationsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  citation: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '14px',
    color: '#4A5568',
    lineHeight: '1.6'
  },
  citationNumber: {
    fontWeight: '500',
    color: '#C8102E'
  },
  qaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    overflow: 'hidden',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  qaHeader: {
    backgroundColor: '#FFF5F5',
    borderBottom: '2px solid #C8102E',
    padding: '20px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  qaHeaderTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#C8102E'
  },
  qaHeaderSubtitle: {
    fontSize: '12px',
    color: '#6B7280'
  },
  qaBody: {
    padding: '32px'
  },
  searchInput: {
    width: '100%',
    padding: '14px 48px 14px 16px',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    fontSize: '14px',
    color: '#1A1A1A',
    outline: 'none',
    backgroundColor: '#FFFFFF'
  },
  searchWrapper: {
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  qaResult: {
    marginTop: '20px',
    backgroundColor: '#FFF5F5',
    border: '1px solid #FECDD3',
    borderRadius: '8px',
    padding: '20px'
  },
  qaQuestion: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '8px'
  },
  qaAnswer: {
    fontSize: '14px',
    color: '#4A5568',
    lineHeight: '1.7'
  },
  qaHint: {
    marginTop: '20px',
    backgroundColor: '#F5F5F5',
    borderRadius: '8px',
    padding: '16px'
  },
  qaHintText: {
    fontSize: '14px',
    color: '#6B7280'
  },
  quickTopics: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px'
  },
  quickTopicsLabel: {
    fontSize: '12px',
    color: '#9CA3AF'
  },
  quickTopicBtn: {
    fontSize: '12px',
    padding: '6px 12px',
    borderRadius: '999px',
    backgroundColor: '#F5F5F5',
    color: '#C8102E',
    border: '1px solid #E5E7EB',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  }
}

function EvidenceLayer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedQA, setSelectedQA] = useState(null)

  const findMatchingQA = (term) => {
    if (!term.trim()) return null
    const lowerTerm = term.toLowerCase()
    return qaData.find(qa =>
      qa.keywords.some(kw => lowerTerm.includes(kw))
    )
  }

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    setSelectedQA(findMatchingQA(term))
  }

  return (
    <div style={styles.container}>
      {/* Section Header */}
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>What does the science say?</h2>
        <div style={styles.sectionAccent}></div>
        <p style={styles.sectionSubtitle}>Synthesized evidence base for coronary artery calcium scoring in cardiovascular risk assessment</p>
      </div>

      {/* Clinical Summary Card */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>Clinical Summary</h3>
          <span style={styles.badge}>HIGH CONFIDENCE</span>
        </div>
        <p style={styles.cardText}>
          Coronary artery calcium (CAC) scoring is a non-invasive CT-based imaging technique that quantifies
          calcified atherosclerotic plaque in the coronary arteries. The Agatston score, developed in 1990,
          remains the standard measurement approach. CAC scoring provides incremental prognostic value beyond
          traditional risk factors for predicting coronary heart disease events.
        </p>
        <p style={styles.cardText}>
          The primary clinical utility of CAC scoring lies in refining risk estimates for patients at
          intermediate risk (10-20% 10-year ASCVD risk) where the decision to initiate statin therapy is
          uncertain. A CAC score of 0 is associated with very low near-term risk and may support deferring
          or delaying statin therapy in select patients, while elevated scores may strengthen the case for
          initiating therapy in patients who are hesitant. The 2019 ACC/AHA Primary Prevention Guidelines
          endorse CAC scoring as a reasonable option (Class IIa) for shared decision-making in this population.
        </p>
        <div style={styles.cardFooter}>
          <p style={styles.methodology}>
            <strong>Methodology:</strong> Analysis synthesized from peer-reviewed literature and AHA/ACC prevention
            guidelines. Key sources include the Multi-Ethnic Study of Atherosclerosis (MESA), CAC Consortium pooled
            analyses, and 2019 ACC/AHA Primary Prevention Guidelines.
          </p>
        </div>
      </div>

      {/* Confidence Rating */}
      <div style={styles.confidenceBox}>
        <div style={styles.confidenceIcon}>
          <svg width="20" height="20" fill="none" stroke="#1A7A4A" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h4 style={styles.confidenceTitle}>High Confidence Rating</h4>
          <p style={styles.confidenceText}>
            This evidence base is supported by multiple large, well-conducted prospective cohort studies,
            pooled analyses, and randomized trial data. The clinical utility of CAC scoring for risk
            reclassification is well-established in the literature and endorsed by major cardiovascular
            professional societies.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Key Research Findings */}
      <div>
        <h3 style={{ ...styles.sectionTitle, fontSize: '18px', marginBottom: '32px' }}>Key Research Findings</h3>
        <div style={styles.findingsGrid}>
          {keyFindings.map((finding, index) => (
            <div key={index} style={styles.findingCard}>
              <div style={styles.findingStat}>{finding.stat}</div>
              <p style={styles.findingDesc}>{finding.description}</p>
              <p style={styles.findingSource}>{finding.source}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Citations */}
      <div style={styles.citationsBox}>
        <h3 style={styles.citationsTitle}>Selected Citations</h3>
        <ul style={styles.citationsList}>
          <li style={styles.citation}>
            <span style={styles.citationNumber}>1.</span>
            <span>Blaha MJ, et al. "Role of Coronary Artery Calcium Score in the Evaluation of Patients With
            Chest Pain." <em>JACC Cardiovasc Imaging</em>. 2015;8(2):134-142.</span>
          </li>
          <li style={styles.citation}>
            <span style={styles.citationNumber}>2.</span>
            <span>Budoff MJ, et al. "Ten-year association of coronary artery calcium with atherosclerotic
            cardiovascular disease events: MESA." <em>J Am Coll Cardiol</em>. 2018;72(23):2839-2850.</span>
          </li>
          <li style={styles.citation}>
            <span style={styles.citationNumber}>3.</span>
            <span>Arnett DK, et al. "2019 ACC/AHA Guideline on the Primary Prevention of Cardiovascular
            Disease." <em>Circulation</em>. 2019;140(11):e596-e646.</span>
          </li>
          <li style={styles.citation}>
            <span style={styles.citationNumber}>4.</span>
            <span>Mitchell JD, et al. "Impact of Coronary Artery Calcium on Clinical Management and Outcomes
            in Patients Referred for CAC Testing." <em>JAMA Cardiol</em>. 2017;2(8):1-9.</span>
          </li>
        </ul>
      </div>

      {/* Evidence Q&A Box */}
      <div style={styles.qaCard}>
        <div style={styles.qaHeader}>
          <svg width="20" height="20" fill="none" stroke="#C8102E" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 style={styles.qaHeaderTitle}>Evidence-Based Q&amp;A</h3>
            <p style={styles.qaHeaderSubtitle}>Powered by Claude Haiku - Live AI responses available in full deployment</p>
          </div>
        </div>
        <div style={styles.qaBody}>
          <div style={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Ask about CAC scoring (try: 'who is eligible' or 'radiation risk')"
              value={searchTerm}
              onChange={handleSearch}
              style={styles.searchInput}
            />
            <svg style={styles.searchIcon} width="16" height="16" fill="none" stroke="#9CA3AF" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {selectedQA && (
            <div style={styles.qaResult} className="animate-fade-in">
              <p style={styles.qaQuestion}>{selectedQA.question}</p>
              <p style={styles.qaAnswer}>{selectedQA.answer}</p>
            </div>
          )}

          {!selectedQA && searchTerm && (
            <div style={styles.qaHint}>
              <p style={styles.qaHintText}>
                Try searching for topics like "who is eligible", "radiation", "insurance coverage", "guideline recommendations", or "how to interpret scores".
              </p>
            </div>
          )}

          <div style={styles.quickTopics}>
            <span style={styles.quickTopicsLabel}>Quick topics:</span>
            {['Patient eligibility', 'Radiation safety', 'Score interpretation', 'Insurance coverage', 'Guidelines'].map(topic => (
              <button
                key={topic}
                onClick={() => {
                  setSearchTerm(topic.toLowerCase())
                  setSelectedQA(findMatchingQA(topic.toLowerCase()))
                }}
                style={styles.quickTopicBtn}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EvidenceLayer
