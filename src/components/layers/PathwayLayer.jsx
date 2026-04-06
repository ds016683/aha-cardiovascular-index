const implementationCards = [
  {
    title: 'Clinical Infrastructure',
    icon: '🏥',
    timeline: '6–18 months',
    description: 'Building capacity for CAC scanning and interpretation across health systems.',
    keyActors: [
      'Health systems and imaging centers',
      'Cardiologists and radiologists',
      'Primary care networks',
      'Medical device manufacturers'
    ],
    thRole: 'Third Horizon provides market intelligence on imaging capacity gaps and optimal site selection using health plan transparency data.',
    milestones: [
      { phase: 'Assessment', duration: '3 mo', desc: 'Map existing capacity vs. demand' },
      { phase: 'Planning', duration: '3 mo', desc: 'Develop expansion roadmap' },
      { phase: 'Implementation', duration: '6–12 mo', desc: 'Equipment procurement and training' },
    ]
  },
  {
    title: 'Coverage & Reimbursement',
    icon: '💳',
    timeline: '12–24 months',
    description: 'Expanding insurance coverage and improving reimbursement pathways.',
    keyActors: [
      'Commercial health plans',
      'CMS and state Medicaid agencies',
      'State legislatures',
      'Employer coalitions'
    ],
    thRole: 'Third Horizon leverages payer analytics to identify coverage gaps and build evidence-based business cases for coverage expansion.',
    milestones: [
      { phase: 'Evidence Building', duration: '6 mo', desc: 'Compile ROI data for payers' },
      { phase: 'Payer Engagement', duration: '6 mo', desc: 'Direct negotiations with plans' },
      { phase: 'Policy Advocacy', duration: '12 mo', desc: 'State mandate campaigns' },
    ]
  },
  {
    title: 'Provider Education',
    icon: '📚',
    timeline: '6–12 months',
    description: 'Ensuring providers understand when and how to order and interpret CAC scores.',
    keyActors: [
      'Medical societies (AHA, ACC, ACP)',
      'CME providers',
      'Health system quality teams',
      'EHR vendors'
    ],
    thRole: 'Third Horizon identifies provider knowledge gaps through referral pattern analysis and supports targeted education campaigns.',
    milestones: [
      { phase: 'Needs Assessment', duration: '2 mo', desc: 'Survey provider knowledge gaps' },
      { phase: 'Curriculum Development', duration: '2 mo', desc: 'Create training materials' },
      { phase: 'Deployment', duration: '6–8 mo', desc: 'CME, EHR alerts, practice tools' },
    ]
  },
  {
    title: 'Patient Awareness',
    icon: '👥',
    timeline: 'Ongoing',
    description: 'Empowering patients to discuss CAC scoring with their providers.',
    keyActors: [
      'AHA and patient advocacy groups',
      'Health plans (member education)',
      'Digital health platforms',
      'Employers (workplace wellness)'
    ],
    thRole: 'Third Horizon supports population targeting using claims and socioeconomic data to reach highest-impact patient segments.',
    milestones: [
      { phase: 'Campaign Design', duration: '3 mo', desc: 'Develop messaging and materials' },
      { phase: 'Channel Activation', duration: '3 mo', desc: 'Launch across touchpoints' },
      { phase: 'Measurement', duration: 'Ongoing', desc: 'Track awareness and action' },
    ]
  }
]

function PathwayLayer() {
  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#224057' }}>What would it take to move the needle here?</h2>
        <div style={{ height: '2px', width: '48px', backgroundColor: '#F8C762', marginBottom: '12px' }}></div>
        <p style={{ color: '#6F7072' }}>Implementation pathways for accelerating CAC scoring adoption</p>
      </div>

      {/* Implementation Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {implementationCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden"
            style={{ border: '1px solid #D1DBE8', boxShadow: '0 2px 8px rgba(34,64,87,0.07)' }}
          >
            {/* Card Header */}
            <div className="px-6 py-4" style={{ backgroundColor: '#E8F0F8', borderBottom: '2px solid #F8C762' }}>
              <div className="flex items-center space-x-3">
                <span className="text-xl">{card.icon}</span>
                <div>
                  <h3 className="font-semibold" style={{ color: '#224057' }}>{card.title}</h3>
                  <span className="text-xs font-medium" style={{ color: '#234D8B' }}>Timeline: {card.timeline}</span>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 space-y-5">
              <p className="text-sm leading-relaxed" style={{ color: '#6F7072' }}>{card.description}</p>

              {/* Key Actors */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#9BAABB' }}>Key Actors</h4>
                <div className="flex flex-wrap gap-2">
                  {card.keyActors.map((actor, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: '#E8F0F8', color: '#224057' }}
                    >
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              {/* TH Role */}
              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#E8F0F8', border: '1px solid #D1DBE8', borderLeft: '3px solid #F8C762' }}
              >
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#234D8B' }}>Third Horizon Role</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{card.thRole}</p>
              </div>

              {/* Milestones */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#9BAABB' }}>Implementation Phases</h4>
                <div className="space-y-3">
                  {card.milestones.map((milestone, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-24 flex-shrink-0">
                        <span className="text-xs font-semibold" style={{ color: '#224057' }}>{milestone.phase}</span>
                        <span className="text-xs block" style={{ color: '#9BAABB' }}>{milestone.duration}</span>
                      </div>
                      <div className="flex-1 rounded-full overflow-hidden ml-3" style={{ height: '6px', backgroundColor: '#E8F0F8' }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: i === 0 ? '33%' : i === 1 ? '66%' : '100%',
                            backgroundColor: '#234D8B'
                          }}
                        ></div>
                      </div>
                      <span className="text-xs ml-3 w-40 flex-shrink-0" style={{ color: '#6F7072' }}>{milestone.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ecosystem Opportunity Callout */}
      <div className="rounded-xl p-10 text-white text-center" style={{ backgroundColor: '#224057' }}>
        <div
          className="inline-flex items-center rounded-full px-4 py-1.5 mb-6"
          style={{ backgroundColor: 'rgba(248,199,98,0.15)', border: '1px solid rgba(248,199,98,0.4)' }}
        >
          <svg className="w-4 h-4 mr-2" fill="#F8C762" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span style={{ color: '#F8C762' }} className="text-sm font-medium">The Ecosystem Opportunity</span>
        </div>

        <h3 className="text-4xl font-bold mb-5 text-white">
          From 17 Years to 5 Years
        </h3>

        <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.72)' }}>
          CAC scoring is just one example. The Cardiovascular Prevention Index can be deployed for{' '}
          <span className="text-white font-medium">every evidence-based guideline</span> the American Heart Association advances.
          By combining health plan transparency data, disease prevalence intelligence, and implementation science,
          we can compress the adoption timeline for life-saving interventions.
        </p>

        {/* Gold divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(248,199,98,0.3)', maxWidth: '400px', margin: '0 auto 32px' }}></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
          <div className="rounded-lg p-5" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="text-3xl font-bold mb-1" style={{ color: '#9BAABB' }}>17 years</div>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Traditional guideline adoption</div>
          </div>
          <div className="rounded-lg p-5 flex items-center justify-center" style={{ backgroundColor: 'rgba(248,199,98,0.08)', border: '1px solid rgba(248,199,98,0.2)' }}>
            <svg className="w-8 h-8" fill="none" stroke="#F8C762" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <div className="rounded-lg p-5" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="text-3xl font-bold mb-1" style={{ color: '#F8C762' }}>5–7 years</div>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>With Prevention Index platform</div>
          </div>
        </div>

        <a
          href="mailto:david.smith@thirdhorizon.com?subject=Custom%20Analysis%20Request%20-%20Cardiovascular%20Prevention%20Index"
          className="inline-flex items-center justify-center px-8 py-4 rounded font-semibold text-base transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#F8C762', color: '#224057' }}
        >
          Request a Custom Analysis
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Guidelines Preview */}
      <div className="bg-white rounded-lg p-6" style={{ border: '1px solid #D1DBE8', boxShadow: '0 2px 8px rgba(34,64,87,0.07)' }}>
        <h3 className="font-semibold mb-2" style={{ color: '#224057' }}>Ready for the Next Guideline?</h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: '#6F7072' }}>
          The same four-layer framework demonstrated here for CAC scoring can be applied to any
          evidence-based clinical guideline. Coming soon to the Prevention Index:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Ambulatory BP Monitoring', desc: 'Detecting masked and white-coat hypertension' },
            { name: 'Cardiovascular Genetic Testing', desc: 'Familial hypercholesterolemia screening' },
            { name: 'Cardiac Rehabilitation', desc: 'Post-event recovery programs' }
          ].map((guideline, index) => (
            <div
              key={index}
              className="rounded-lg p-4"
              style={{ backgroundColor: '#F5F8FB', border: '1px dashed #C0D4E8' }}
            >
              <div className="mb-2">
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ backgroundColor: '#EEE8F5', color: '#5A3A8A' }}
                >
                  Coming Soon
                </span>
              </div>
              <h4 className="font-semibold text-sm mb-1" style={{ color: '#224057' }}>{guideline.name}</h4>
              <p className="text-xs leading-relaxed" style={{ color: '#6F7072' }}>{guideline.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center py-6">
        <p className="text-sm mb-3" style={{ color: '#9BAABB' }}>
          Interested in partnering on the Cardiovascular Prevention Index?
        </p>
        <a
          href="mailto:david.smith@thirdhorizon.com?subject=Partnership%20Inquiry%20-%20Cardiovascular%20Prevention%20Index"
          className="font-semibold text-sm hover:underline"
          style={{ color: '#234D8B' }}
        >
          Contact david.smith@thirdhorizon.com
        </a>
      </div>
    </div>
  )
}

export default PathwayLayer
