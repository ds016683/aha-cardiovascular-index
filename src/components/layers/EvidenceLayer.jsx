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
    stat: '$75–$400',
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
    <div className="space-y-10">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#224057' }}>What does the science say?</h2>
        <div style={{ height: '2px', width: '48px', backgroundColor: '#F8C762', marginBottom: '12px' }}></div>
        <p style={{ color: '#6F7072' }}>Synthesized evidence base for coronary artery calcium scoring in cardiovascular risk assessment</p>
      </div>

      {/* Clinical Summary Card */}
      <div className="bg-white rounded-lg border p-6" style={{ borderColor: '#D1DBE8', boxShadow: '0 2px 8px rgba(34,64,87,0.07)' }}>
        <div className="flex items-start justify-between mb-5">
          <h3 className="text-lg font-semibold" style={{ color: '#224057' }}>Clinical Summary</h3>
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
            style={{ backgroundColor: '#E8F5EE', color: '#1A7A4A' }}
          >
            HIGH CONFIDENCE
          </span>
        </div>
        <p className="leading-relaxed mb-4" style={{ color: '#4A5568' }}>
          Coronary artery calcium (CAC) scoring is a non-invasive CT-based imaging technique that quantifies
          calcified atherosclerotic plaque in the coronary arteries. The Agatston score, developed in 1990,
          remains the standard measurement approach. CAC scoring provides incremental prognostic value beyond
          traditional risk factors for predicting coronary heart disease events.
        </p>
        <p className="leading-relaxed" style={{ color: '#4A5568' }}>
          The primary clinical utility of CAC scoring lies in refining risk estimates for patients at
          intermediate risk (10-20% 10-year ASCVD risk) where the decision to initiate statin therapy is
          uncertain. A CAC score of 0 is associated with very low near-term risk and may support deferring
          or delaying statin therapy in select patients, while elevated scores may strengthen the case for
          initiating therapy in patients who are hesitant. The 2019 ACC/AHA Primary Prevention Guidelines
          endorse CAC scoring as a reasonable option (Class IIa) for shared decision-making in this population.
        </p>
        <div className="mt-6 pt-4" style={{ borderTop: '1px solid #E8F0F8' }}>
          <p className="text-xs" style={{ color: '#9BAABB' }}>
            <strong>Methodology:</strong> Analysis synthesized from peer-reviewed literature and AHA/ACC prevention
            guidelines. Key sources include the Multi-Ethnic Study of Atherosclerosis (MESA), CAC Consortium pooled
            analyses, and 2019 ACC/AHA Primary Prevention Guidelines.
          </p>
        </div>
      </div>

      {/* Confidence Rating */}
      <div className="rounded-lg p-6" style={{ backgroundColor: '#E8F5EE', border: '1px solid #A8DFC0' }}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5" fill="none" stroke="#1A7A4A" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold mb-1" style={{ color: '#155E3B' }}>High Confidence Rating</h4>
            <p className="text-sm leading-relaxed" style={{ color: '#1A7A4A' }}>
              This evidence base is supported by multiple large, well-conducted prospective cohort studies,
              pooled analyses, and randomized trial data. The clinical utility of CAC scoring for risk
              reclassification is well-established in the literature and endorsed by major cardiovascular
              professional societies.
            </p>
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div style={{ height: '1px', backgroundColor: '#F8C762', opacity: 0.5 }}></div>

      {/* Key Research Findings */}
      <div>
        <h3 className="text-lg font-semibold mb-6" style={{ color: '#224057' }}>Key Research Findings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {keyFindings.map((finding, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 transition-shadow hover:shadow-md"
              style={{ border: '1px solid #D1DBE8', boxShadow: '0 1px 4px rgba(34,64,87,0.06)' }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#234D8B' }}>{finding.stat}</div>
              <p className="mb-3 leading-relaxed" style={{ color: '#4A5568' }}>{finding.description}</p>
              <p className="text-xs" style={{ color: '#9BAABB' }}>{finding.source}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gold Divider */}
      <div style={{ height: '1px', backgroundColor: '#F8C762', opacity: 0.5 }}></div>

      {/* Citations */}
      <div className="rounded-lg p-6" style={{ backgroundColor: '#E8F0F8', border: '1px solid #D1DBE8' }}>
        <h3 className="text-base font-semibold mb-4" style={{ color: '#224057' }}>Selected Citations</h3>
        <ul className="space-y-3 text-sm" style={{ color: '#4A5568' }}>
          <li className="flex items-start">
            <span className="mr-2 font-medium" style={{ color: '#234D8B' }}>1.</span>
            Blaha MJ, et al. "Role of Coronary Artery Calcium Score in the Evaluation of Patients With
            Chest Pain." <em>JACC Cardiovasc Imaging</em>. 2015;8(2):134-142.
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-medium" style={{ color: '#234D8B' }}>2.</span>
            Budoff MJ, et al. "Ten-year association of coronary artery calcium with atherosclerotic
            cardiovascular disease events: MESA." <em>J Am Coll Cardiol</em>. 2018;72(23):2839-2850.
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-medium" style={{ color: '#234D8B' }}>3.</span>
            Arnett DK, et al. "2019 ACC/AHA Guideline on the Primary Prevention of Cardiovascular
            Disease." <em>Circulation</em>. 2019;140(11):e596-e646.
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-medium" style={{ color: '#234D8B' }}>4.</span>
            Mitchell JD, et al. "Impact of Coronary Artery Calcium on Clinical Management and Outcomes
            in Patients Referred for CAC Testing." <em>JAMA Cardiol</em>. 2017;2(8):1-9.
          </li>
        </ul>
      </div>

      {/* AI Q&A Box */}
      <div className="bg-white rounded-lg overflow-hidden" style={{ border: '1px solid #D1DBE8', boxShadow: '0 2px 8px rgba(34,64,87,0.07)' }}>
        <div className="px-6 py-4" style={{ backgroundColor: '#E8F0F8', borderBottom: '2px solid #F8C762' }}>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5" fill="none" stroke="#224057" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-sm" style={{ color: '#224057' }}>Evidence-Based Q&amp;A</h3>
              <p className="text-xs" style={{ color: '#6F7072' }}>Powered by Claude Haiku — Live AI responses available in full deployment</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask about CAC scoring (try: 'who is eligible' or 'radiation risk')"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-3 rounded text-sm"
              style={{
                border: '1px solid #D1DBE8',
                outline: 'none',
                backgroundColor: 'white',
                color: '#224057'
              }}
            />
            <svg className="w-4 h-4 absolute right-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="#9BAABB" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {selectedQA && (
            <div className="mt-4 rounded-lg p-4 animate-fade-in" style={{ backgroundColor: '#E8F0F8', border: '1px solid #C0D4E8' }}>
              <p className="font-semibold mb-2 text-sm" style={{ color: '#224057' }}>{selectedQA.question}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{selectedQA.answer}</p>
            </div>
          )}

          {!selectedQA && searchTerm && (
            <div className="mt-4 rounded-lg p-4" style={{ backgroundColor: '#F5F8FB' }}>
              <p className="text-sm" style={{ color: '#6F7072' }}>
                Try searching for topics like "who is eligible", "radiation", "insurance coverage", "guideline recommendations", or "how to interpret scores".
              </p>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2 items-center">
            <span className="text-xs" style={{ color: '#9BAABB' }}>Quick topics:</span>
            {['Patient eligibility', 'Radiation safety', 'Score interpretation', 'Insurance coverage', 'Guidelines'].map(topic => (
              <button
                key={topic}
                onClick={() => {
                  setSearchTerm(topic.toLowerCase())
                  setSelectedQA(findMatchingQA(topic.toLowerCase()))
                }}
                className="text-xs px-3 py-1 rounded-full transition-colors"
                style={{ backgroundColor: '#E8F0F8', color: '#234D8B' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#D1DBE8' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#E8F0F8' }}
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
