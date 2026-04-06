import { Link } from 'react-router-dom'

const guidelines = [
  {
    id: 'cac',
    name: 'Coronary Artery Calcium (CAC) Scoring',
    description: 'Non-invasive imaging to quantify coronary atherosclerosis and refine cardiovascular risk assessment in intermediate-risk patients.',
    keyStat: 'Only 12% of eligible patients currently receive CAC scoring',
    active: true,
    path: '/cac-scoring'
  },
  {
    id: 'abpm',
    name: 'Ambulatory Blood Pressure Monitoring (ABPM)',
    description: '24-hour blood pressure measurement to detect white-coat hypertension, masked hypertension, and nocturnal patterns.',
    keyStat: 'Recommended by guidelines but used in <5% of hypertension diagnoses',
    active: false
  },
  {
    id: 'genetic',
    name: 'Cardiovascular Genetic Testing',
    description: 'Genetic screening for familial hypercholesterolemia and inherited cardiomyopathies.',
    keyStat: '90% of FH cases remain undiagnosed in the US',
    active: false
  },
  {
    id: 'cardiac-rehab',
    name: 'Cardiac Rehabilitation',
    description: 'Structured exercise and education programs for post-MI and post-CABG patients.',
    keyStat: 'Only 24% of eligible patients participate nationally',
    active: false
  },
  {
    id: 'future-1',
    name: '2026 Guideline Preview',
    description: 'Upcoming evidence-based guidelines to be added to the Prevention Index ecosystem.',
    keyStat: 'Coming in AHA 2026 Scientific Sessions',
    active: false,
    isFuture: true
  },
  {
    id: 'future-2',
    name: '2026 Guideline Preview',
    description: 'Additional forthcoming guidelines demonstrating the platform scalability.',
    keyStat: 'Expanding the ecosystem',
    active: false,
    isFuture: true
  }
]

function LandingPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#224057' }} className="text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div
              className="inline-flex items-center rounded-full px-4 py-1.5 mb-8"
              style={{ backgroundColor: 'rgba(248,199,98,0.15)', border: '1px solid rgba(248,199,98,0.4)' }}
            >
              <span style={{ color: '#F8C762' }} className="text-sm font-medium tracking-wide">AHA + Third Horizon Partnership</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white tracking-tight">
              Solving the{' '}
              <span style={{ color: '#F8C762' }}>17-Year Problem</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Evidence-based clinical guidelines take an average of 17 years to achieve widespread adoption.
              The Cardiovascular Prevention Index accelerates this timeline by combining{' '}
              <span className="text-white font-medium">health plan transparency data</span>,{' '}
              <span className="text-white font-medium">disease prevalence intelligence</span>, and{' '}
              <span className="text-white font-medium">implementation science</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/cac-scoring"
                style={{ backgroundColor: '#F8C762', color: '#224057' }}
                className="inline-flex items-center justify-center px-8 py-4 rounded font-semibold text-base hover:opacity-90 transition-opacity"
              >
                Explore CAC Scoring Index
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#ecosystem"
                style={{ border: '2px solid rgba(255,255,255,0.35)', color: 'white' }}
                className="inline-flex items-center justify-center px-8 py-4 rounded font-semibold text-base hover:border-white/70 transition-colors"
              >
                View All Guidelines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div style={{ height: '3px', backgroundColor: '#F8C762' }}></div>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-3"
              style={{ color: '#224057' }}
            >
              A Four-Layer Intelligence Platform
            </h2>
            <p style={{ color: '#6F7072' }} className="text-lg">
              Each guideline follows the same rigorous framework — from evidence to action.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Evidence Base', desc: 'Synthesized clinical research and guideline recommendations' },
              { num: '2', title: 'Implementation State', desc: 'Real-time mapping of adoption rates across all 50 states' },
              { num: '3', title: 'Value Calculation', desc: 'Economic and social impact of closing adoption gaps' },
              { num: '4', title: 'Implementation Pathway', desc: 'Actionable roadmap for accelerating guideline adoption' }
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-lg p-6"
                style={{ backgroundColor: '#E8F0F8', border: '1px solid #D1DBE8' }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center text-lg font-bold mb-4 text-white"
                  style={{ backgroundColor: '#224057' }}
                >
                  {item.num}
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#224057' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6F7072' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section id="ecosystem" style={{ backgroundColor: '#F5F8FB' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-3"
              style={{ color: '#224057' }}
            >
              Evidence-Based Guideline Ecosystem
            </h2>
            <p style={{ color: '#6F7072' }} className="text-lg max-w-2xl">
              Each guideline in the Prevention Index follows the same four-layer framework.
              This scalable approach enables AHA to deploy comprehensive intelligence for every major clinical recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidelines.map((guideline) => (
              <div
                key={guideline.id}
                className="rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: guideline.active ? 'white' : guideline.isFuture ? '#F5F8FB' : '#F5F8FB',
                  border: guideline.active
                    ? '2px solid #234D8B'
                    : guideline.isFuture
                      ? '2px dashed #C8D8E8'
                      : '1px solid #D1DBE8',
                  boxShadow: guideline.active ? '0 4px 16px rgba(35,77,139,0.10)' : 'none'
                }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                      style={{
                        backgroundColor: guideline.active ? '#E8F5EE' : guideline.isFuture ? '#EEE8F5' : '#E8EFF5',
                        color: guideline.active ? '#1A7A4A' : guideline.isFuture ? '#5A3A8A' : '#6F7072'
                      }}
                    >
                      {guideline.active ? 'LIVE' : guideline.isFuture ? '2026' : 'COMING SOON'}
                    </div>
                    {guideline.active && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#F8C762">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    )}
                  </div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: guideline.active ? '#224057' : '#9BAABB' }}
                  >
                    {guideline.name}
                  </h3>
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: guideline.active ? '#6F7072' : '#9BAABB' }}
                  >
                    {guideline.description}
                  </p>
                  <div
                    className="text-sm font-medium mb-5"
                    style={{ color: guideline.active ? '#234D8B' : '#9BAABB' }}
                  >
                    {guideline.keyStat}
                  </div>
                  {guideline.active ? (
                    <Link
                      to={guideline.path}
                      style={{ color: '#234D8B' }}
                      className="inline-flex items-center text-sm font-semibold hover:underline"
                    >
                      Explore Index
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  ) : (
                    <span className="text-xs" style={{ color: '#9BAABB' }}>Coming in future release</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div style={{ height: '3px', backgroundColor: '#F8C762' }}></div>

      {/* Vision CTA Section */}
      <section style={{ backgroundColor: '#224057' }} className="py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            From 17 Years to 5 Years
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
            By combining transparency data, prevalence intelligence, and implementation science,
            the Prevention Index creates a new paradigm for evidence-based guideline adoption.
            Each guideline in this ecosystem represents an opportunity to save lives sooner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:david.smith@thirdhorizon.com?subject=Cardiovascular%20Prevention%20Index%20Partnership"
              style={{ backgroundColor: '#F8C762', color: '#224057' }}
              className="inline-flex items-center justify-center px-8 py-4 rounded font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Partner With Us
            </a>
            <Link
              to="/cac-scoring"
              style={{ border: '2px solid rgba(248,199,98,0.5)', color: 'white' }}
              className="inline-flex items-center justify-center px-8 py-4 rounded font-semibold text-base hover:border-yellow-300/70 transition-colors"
            >
              See It In Action
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold mb-10 uppercase tracking-widest text-sm" style={{ color: '#9BAABB' }}>
            Platform Partners
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex items-center space-x-3">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="#C8102E">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-lg font-semibold" style={{ color: '#224057' }}>American Heart Association</span>
            </div>
            <div style={{ backgroundColor: '#F8C762', width: '2px', height: '40px' }} className="hidden md:block"></div>
            <div className="text-lg font-semibold" style={{ color: '#224057' }}>Third Horizon Strategies</div>
          </div>
          <p className="mt-10 text-sm max-w-xl mx-auto" style={{ color: '#9BAABB' }}>
            This is a prototype demonstration. All data shown is synthetic and for illustration purposes only.
            Not intended for clinical decision-making.
          </p>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
