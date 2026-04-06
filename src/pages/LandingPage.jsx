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
      <section className="bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-[#C8102E]/20 border border-[#C8102E]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#C8102E] text-sm font-medium">AHA + Third Horizon Partnership</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Solving the <span className="text-[#C8102E]">17-Year Problem</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Evidence-based clinical guidelines take an average of 17 years to achieve widespread adoption. 
              The Cardiovascular Prevention Index accelerates this timeline by combining 
              <span className="text-white font-medium"> health plan transparency data</span>, 
              <span className="text-white font-medium"> disease prevalence intelligence</span>, and 
              <span className="text-white font-medium"> implementation science</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/cac-scoring"
                className="inline-flex items-center justify-center bg-[#C8102E] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A00D24] transition-colors"
              >
                Explore CAC Scoring Index
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a 
                href="#ecosystem"
                className="inline-flex items-center justify-center border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-colors"
              >
                View All Guidelines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">A Four-Layer Intelligence Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Evidence Base', desc: 'Synthesized clinical research and guideline recommendations' },
              { num: '2', title: 'Implementation State', desc: 'Real-time mapping of adoption rates across all 50 states' },
              { num: '3', title: 'Value Calculation', desc: 'Economic and social impact of closing adoption gaps' },
              { num: '4', title: 'Implementation Pathway', desc: 'Actionable roadmap for accelerating guideline adoption' }
            ].map((item) => (
              <div key={item.num} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#C8102E] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.num}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section id="ecosystem" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Evidence-Based Guideline Ecosystem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each guideline in the Prevention Index follows the same four-layer framework. 
              This scalable approach enables AHA to deploy comprehensive intelligence for every major clinical recommendation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidelines.map((guideline) => (
              <div 
                key={guideline.id}
                className={`rounded-xl border-2 transition-all duration-300 ${
                  guideline.active 
                    ? 'bg-white border-[#C8102E] shadow-lg hover:shadow-xl' 
                    : guideline.isFuture
                      ? 'bg-gray-100 border-dashed border-gray-300'
                      : 'bg-gray-100 border-gray-200'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      guideline.active 
                        ? 'bg-green-100 text-green-700' 
                        : guideline.isFuture
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-gray-200 text-gray-500'
                    }`}>
                      {guideline.active ? 'LIVE' : guideline.isFuture ? '2026' : 'COMING SOON'}
                    </div>
                    {guideline.active && (
                      <svg className="w-6 h-6 text-[#C8102E]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    )}
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${!guideline.active && 'text-gray-500'}`}>
                    {guideline.name}
                  </h3>
                  <p className={`text-sm mb-4 ${guideline.active ? 'text-gray-600' : 'text-gray-400'}`}>
                    {guideline.description}
                  </p>
                  <div className={`text-sm font-medium mb-4 ${guideline.active ? 'text-[#C8102E]' : 'text-gray-400'}`}>
                    {guideline.keyStat}
                  </div>
                  {guideline.active ? (
                    <Link 
                      to={guideline.path}
                      className="inline-flex items-center text-[#C8102E] font-semibold hover:underline"
                    >
                      Explore
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  ) : (
                    <span className="text-gray-400 text-sm">Coming in future release</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#C8102E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            From 17 Years to 5 Years
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            By combining transparency data, prevalence intelligence, and implementation science, 
            the Prevention Index creates a new paradigm for evidence-based guideline adoption. 
            Each guideline in this ecosystem represents an opportunity to save lives sooner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:david.smith@thirdhorizon.com?subject=Cardiovascular%20Prevention%20Index%20Partnership"
              className="inline-flex items-center justify-center bg-white text-[#C8102E] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-colors"
            >
              Partner With Us
            </a>
            <Link 
              to="/cac-scoring"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              See It In Action
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Platform Partners</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex items-center space-x-3">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#C8102E">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-xl font-semibold text-gray-800">American Heart Association</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="text-xl font-semibold text-gray-800">Third Horizon Strategies</div>
          </div>
          <p className="mt-8 text-gray-500 text-sm max-w-xl mx-auto">
            This is a prototype demonstration. All data shown is synthetic and for illustration purposes only. 
            Not intended for clinical decision-making.
          </p>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
