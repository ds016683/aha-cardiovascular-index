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
    backgroundColor: '#F5F5F5',
    color: '#6B7280'
  },
  badgeFuture: {
    backgroundColor: '#FFF5F5',
    color: '#C8102E'
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
  return (
    <div style={styles.page} className="animate-fade-in">
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
                <h3 style={guideline.active ? styles.guidelineTitle : styles.guidelineTitleInactive}>
                  {guideline.name}
                </h3>
                <p style={guideline.active ? styles.guidelineDesc : styles.guidelineDescInactive}>
                  {guideline.description}
                </p>
                <div style={guideline.active ? styles.guidelineStat : styles.guidelineStatInactive}>
                  {guideline.keyStat}
                </div>
                {guideline.active ? (
                  <Link to={guideline.path} style={styles.guidelineLink}>
                    Explore Index
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ) : (
                  <span style={{ fontSize: '12px', color: '#9CA3AF' }}>Coming in future release</span>
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
