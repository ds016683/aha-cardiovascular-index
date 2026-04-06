const implementationCards = [
  {
    title: 'Clinical Infrastructure',
    icon: '🏥',
    timeline: '6-18 months',
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
      { phase: 'Implementation', duration: '6-12 mo', desc: 'Equipment procurement and training' },
    ]
  },
  {
    title: 'Coverage & Reimbursement',
    icon: '💳',
    timeline: '12-24 months',
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
    timeline: '6-12 months',
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
      { phase: 'Deployment', duration: '6-8 mo', desc: 'CME, EHR alerts, practice tools' },
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
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What would it take to move the needle here?</h2>
        <p className="text-gray-600">Implementation pathways for accelerating CAC scoring adoption</p>
      </div>

      {/* Implementation Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {implementationCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl border shadow-sm overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{card.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{card.title}</h3>
                    <span className="text-sm text-[#C8102E]">Timeline: {card.timeline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 space-y-4">
              <p className="text-gray-600 text-sm">{card.description}</p>

              {/* Key Actors */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Actors</h4>
                <div className="flex flex-wrap gap-2">
                  {card.keyActors.map((actor, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              {/* TH Role */}
              <div className="bg-[#C8102E]/5 rounded-lg p-4 border border-[#C8102E]/10">
                <h4 className="text-xs font-semibold text-[#C8102E] uppercase tracking-wide mb-1">Third Horizon Role</h4>
                <p className="text-sm text-gray-700">{card.thRole}</p>
              </div>

              {/* Milestones */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Implementation Phases</h4>
                <div className="space-y-2">
                  {card.milestones.map((milestone, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-24 flex-shrink-0">
                        <span className="text-xs font-medium text-gray-900">{milestone.phase}</span>
                        <span className="text-xs text-gray-400 block">{milestone.duration}</span>
                      </div>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden ml-3">
                        <div 
                          className="h-full bg-[#C8102E] rounded-full"
                          style={{ width: i === 0 ? '33%' : i === 1 ? '66%' : '100%' }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 ml-3 w-40 flex-shrink-0">{milestone.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ecosystem Opportunity Callout */}
      <div className="bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] rounded-2xl p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center bg-[#C8102E]/20 border border-[#C8102E]/40 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-[#C8102E] mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="text-[#C8102E] text-sm font-medium">The Ecosystem Opportunity</span>
          </div>
          
          <h3 className="text-3xl font-bold mb-4">
            From 17 Years to 5 Years
          </h3>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            CAC scoring is just one example. The Cardiovascular Prevention Index can be deployed for 
            <span className="text-white font-medium"> every evidence-based guideline</span> the American Heart Association advances. 
            By combining health plan transparency data, disease prevalence intelligence, and implementation science, 
            we can compress the adoption timeline for life-saving interventions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-[#C8102E] mb-1">17 years</div>
              <div className="text-sm text-gray-400">Traditional guideline adoption</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">5-7 years</div>
              <div className="text-sm text-gray-400">With Prevention Index platform</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:david.smith@thirdhorizon.com?subject=Custom%20Analysis%20Request%20-%20Cardiovascular%20Prevention%20Index"
              className="inline-flex items-center justify-center bg-[#C8102E] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A00D24] transition-colors"
            >
              Request a Custom Analysis
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Guidelines Preview */}
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Ready for the Next Guideline?</h3>
        <p className="text-gray-600 mb-6">
          The same four-layer framework demonstrated here for CAC scoring can be applied to any 
          evidence-based clinical guideline. Coming soon to the Prevention Index:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Ambulatory BP Monitoring', desc: 'Detecting masked and white-coat hypertension' },
            { name: 'Cardiovascular Genetic Testing', desc: 'Familial hypercholesterolemia screening' },
            { name: 'Cardiac Rehabilitation', desc: 'Post-event recovery programs' }
          ].map((guideline, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">Coming Soon</span>
              </div>
              <h4 className="font-medium text-gray-900">{guideline.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{guideline.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">
          Interested in partnering on the Cardiovascular Prevention Index?
        </p>
        <a 
          href="mailto:david.smith@thirdhorizon.com?subject=Partnership%20Inquiry%20-%20Cardiovascular%20Prevention%20Index"
          className="text-[#C8102E] font-semibold hover:underline"
        >
          Contact david.smith@thirdhorizon.com
        </a>
      </div>
    </div>
  )
}

export default PathwayLayer
