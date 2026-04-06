const implementationCards = [
  {
    title: 'Clinical Infrastructure',
    timeline: '6-18 months',
    description: 'Building capacity for CAC scanning and interpretation across health systems.',
    keyActors: [
      'Health systems and imaging centers',
      'Cardiologists and radiologists',
      'Primary care networks',
      'Medical device manufacturers'
    ],
    platformRole: 'The Prevention Index provides market intelligence on imaging capacity gaps and optimal site selection using health plan transparency data.',
    milestones: [
      { phase: 'Assessment', duration: '3 mo', desc: 'Map existing capacity vs. demand' },
      { phase: 'Planning', duration: '3 mo', desc: 'Develop expansion roadmap' },
      { phase: 'Implementation', duration: '6-12 mo', desc: 'Equipment procurement and training' },
    ]
  },
  {
    title: 'Coverage & Reimbursement',
    timeline: '12-24 months',
    description: 'Expanding insurance coverage and improving reimbursement pathways.',
    keyActors: [
      'Commercial health plans',
      'CMS and state Medicaid agencies',
      'State legislatures',
      'Employer coalitions'
    ],
    platformRole: 'The Prevention Index leverages payer analytics to identify coverage gaps and build evidence-based business cases for coverage expansion.',
    milestones: [
      { phase: 'Evidence Building', duration: '6 mo', desc: 'Compile ROI data for payers' },
      { phase: 'Payer Engagement', duration: '6 mo', desc: 'Direct negotiations with plans' },
      { phase: 'Policy Advocacy', duration: '12 mo', desc: 'State mandate campaigns' },
    ]
  },
  {
    title: 'Provider Education',
    timeline: '6-12 months',
    description: 'Ensuring providers understand when and how to order and interpret CAC scores.',
    keyActors: [
      'Medical societies (AHA, ACC, ACP)',
      'CME providers',
      'Health system quality teams',
      'EHR vendors'
    ],
    platformRole: 'The Prevention Index identifies provider knowledge gaps through referral pattern analysis and supports targeted education campaigns.',
    milestones: [
      { phase: 'Needs Assessment', duration: '2 mo', desc: 'Survey provider knowledge gaps' },
      { phase: 'Curriculum Development', duration: '2 mo', desc: 'Create training materials' },
      { phase: 'Deployment', duration: '6-8 mo', desc: 'CME, EHR alerts, practice tools' },
    ]
  },
  {
    title: 'Patient Awareness',
    timeline: 'Ongoing',
    description: 'Empowering patients to discuss CAC scoring with their providers.',
    keyActors: [
      'AHA and patient advocacy groups',
      'Health plans (member education)',
      'Digital health platforms',
      'Employers (workplace wellness)'
    ],
    platformRole: 'The Prevention Index supports population targeting using claims and socioeconomic data to reach highest-impact patient segments.',
    milestones: [
      { phase: 'Campaign Design', duration: '3 mo', desc: 'Develop messaging and materials' },
      { phase: 'Channel Activation', duration: '3 mo', desc: 'Launch across touchpoints' },
      { phase: 'Measurement', duration: 'Ongoing', desc: 'Track awareness and action' },
    ]
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
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    overflow: 'hidden',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  cardHeader: {
    backgroundColor: '#F5F5F5',
    borderBottom: '2px solid #C8102E',
    padding: '20px 24px'
  },
  cardTitle: {
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '4px'
  },
  cardTimeline: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#C8102E'
  },
  cardBody: {
    padding: '28px'
  },
  cardDesc: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.7',
    marginBottom: '24px'
  },
  actorsSection: {
    marginBottom: '24px'
  },
  actorsTitle: {
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#9CA3AF',
    marginBottom: '12px'
  },
  actorsTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  actorTag: {
    fontSize: '12px',
    padding: '6px 12px',
    borderRadius: '999px',
    backgroundColor: '#F5F5F5',
    color: '#1A1A1A',
    border: '1px solid #E5E7EB'
  },
  platformBox: {
    backgroundColor: '#FFF5F5',
    border: '1px solid #FECDD3',
    borderLeft: '3px solid #C8102E',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '24px'
  },
  platformTitle: {
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#C8102E',
    marginBottom: '8px'
  },
  platformText: {
    fontSize: '14px',
    color: '#4A5568',
    lineHeight: '1.6'
  },
  milestonesTitle: {
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#9CA3AF',
    marginBottom: '16px'
  },
  milestoneItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px'
  },
  milestoneLabel: {
    width: '96px',
    flexShrink: 0
  },
  milestoneName: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#1A1A1A'
  },
  milestoneDuration: {
    fontSize: '12px',
    color: '#9CA3AF'
  },
  milestoneBar: {
    flex: 1,
    height: '6px',
    borderRadius: '999px',
    backgroundColor: '#F3F4F6',
    marginLeft: '12px',
    overflow: 'hidden'
  },
  milestoneBarFill: {
    height: '6px',
    borderRadius: '999px',
    backgroundColor: '#C8102E'
  },
  milestoneDesc: {
    fontSize: '12px',
    color: '#6B7280',
    marginLeft: '12px',
    width: '160px',
    flexShrink: 0
  },
  ctaBox: {
    backgroundColor: '#1A1A1A',
    borderRadius: '16px',
    padding: '48px',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  ctaBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(200,16,46,0.15)',
    border: '1px solid rgba(200,16,46,0.4)',
    borderRadius: '999px',
    padding: '8px 16px',
    marginBottom: '24px'
  },
  ctaBadgeText: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#C8102E'
  },
  ctaTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: '20px'
  },
  ctaText: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.72)',
    lineHeight: '1.7',
    maxWidth: '700px',
    margin: '0 auto 32px'
  },
  ctaDivider: {
    height: '1px',
    backgroundColor: 'rgba(200,16,46,0.3)',
    maxWidth: '400px',
    margin: '0 auto 32px'
  },
  ctaStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    maxWidth: '600px',
    margin: '0 auto 40px'
  },
  ctaStat: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '20px'
  },
  ctaStatMiddle: {
    backgroundColor: 'rgba(200,16,46,0.08)',
    border: '1px solid rgba(200,16,46,0.2)',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ctaStatValue: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '4px'
  },
  ctaStatLabel: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.5)'
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#C8102E',
    color: '#FFFFFF',
    padding: '16px 32px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    textDecoration: 'none'
  },
  guidelinesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    padding: '32px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
  },
  guidelinesTitle: {
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: '12px'
  },
  guidelinesText: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.7',
    marginBottom: '28px'
  },
  guidelinesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px'
  },
  guidelineItem: {
    backgroundColor: '#F5F5F5',
    border: '2px dashed #E5E7EB',
    borderRadius: '12px',
    padding: '20px'
  },
  guidelineBadge: {
    display: 'inline-block',
    fontSize: '11px',
    padding: '4px 10px',
    borderRadius: '999px',
    backgroundColor: '#FFF5F5',
    color: '#C8102E',
    border: '1px solid #FECDD3',
    fontWeight: '500',
    marginBottom: '12px'
  },
  guidelineName: {
    fontWeight: '600',
    fontSize: '14px',
    color: '#1A1A1A',
    marginBottom: '4px'
  },
  guidelineDesc: {
    fontSize: '12px',
    color: '#6B7280',
    lineHeight: '1.5'
  },
  footer: {
    textAlign: 'center',
    padding: '24px 0'
  },
  footerText: {
    fontSize: '14px',
    color: '#9CA3AF',
    marginBottom: '12px'
  },
  footerLink: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#C8102E',
    textDecoration: 'none'
  }
}

function PathwayLayer() {
  return (
    <div style={styles.container}>
      {/* Section Header */}
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>What would it take to move the needle here?</h2>
        <div style={styles.sectionAccent}></div>
        <p style={styles.sectionSubtitle}>Implementation pathways for accelerating CAC scoring adoption</p>
      </div>

      {/* Implementation Cards */}
      <div style={styles.cardsGrid}>
        {implementationCards.map((card, index) => (
          <div key={index} style={styles.card}>
            {/* Card Header */}
            <div style={styles.cardHeader}>
              <div style={styles.cardTitle}>{card.title}</div>
              <span style={styles.cardTimeline}>Timeline: {card.timeline}</span>
            </div>

            {/* Card Body */}
            <div style={styles.cardBody}>
              <p style={styles.cardDesc}>{card.description}</p>

              {/* Key Actors */}
              <div style={styles.actorsSection}>
                <h4 style={styles.actorsTitle}>Key Actors</h4>
                <div style={styles.actorsTags}>
                  {card.keyActors.map((actor, i) => (
                    <span key={i} style={styles.actorTag}>{actor}</span>
                  ))}
                </div>
              </div>

              {/* Platform Role */}
              <div style={styles.platformBox}>
                <h4 style={styles.platformTitle}>Prevention Index Role</h4>
                <p style={styles.platformText}>{card.platformRole}</p>
              </div>

              {/* Milestones */}
              <div>
                <h4 style={styles.milestonesTitle}>Implementation Phases</h4>
                {card.milestones.map((milestone, i) => (
                  <div key={i} style={styles.milestoneItem}>
                    <div style={styles.milestoneLabel}>
                      <span style={styles.milestoneName}>{milestone.phase}</span>
                      <span style={styles.milestoneDuration}>{milestone.duration}</span>
                    </div>
                    <div style={styles.milestoneBar}>
                      <div style={{
                        ...styles.milestoneBarFill,
                        width: i === 0 ? '33%' : i === 1 ? '66%' : '100%'
                      }}></div>
                    </div>
                    <span style={styles.milestoneDesc}>{milestone.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ecosystem Opportunity Callout */}
      <div style={styles.ctaBox}>
        <div style={styles.ctaBadge}>
          <svg width="16" height="16" fill="#C8102E" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span style={styles.ctaBadgeText}>The Ecosystem Opportunity</span>
        </div>

        <h3 style={styles.ctaTitle}>From 17 Years to 5 Years</h3>

        <p style={styles.ctaText}>
          CAC scoring is just one example. The Cardiovascular Prevention Index can be deployed for{' '}
          <span style={{ color: '#FFFFFF', fontWeight: '500' }}>every evidence-based guideline</span> the American Heart Association advances.
          By combining health plan transparency data, disease prevalence intelligence, and implementation science,
          we can compress the adoption timeline for life-saving interventions.
        </p>

        <div style={styles.ctaDivider}></div>

        <div style={styles.ctaStats}>
          <div style={styles.ctaStat}>
            <div style={{ ...styles.ctaStatValue, color: '#9CA3AF' }}>17 years</div>
            <div style={styles.ctaStatLabel}>Traditional guideline adoption</div>
          </div>
          <div style={styles.ctaStatMiddle}>
            <svg width="32" height="32" fill="none" stroke="#C8102E" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <div style={styles.ctaStat}>
            <div style={{ ...styles.ctaStatValue, color: '#C8102E' }}>5-7 years</div>
            <div style={styles.ctaStatLabel}>With Prevention Index platform</div>
          </div>
        </div>

        <a href="mailto:info@heart.org?subject=Custom%20Analysis%20Request%20-%20Cardiovascular%20Prevention%20Index" style={styles.ctaBtn}>
          Request a Custom Analysis
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Guidelines Preview */}
      <div style={styles.guidelinesCard}>
        <h3 style={styles.guidelinesTitle}>Ready for the Next Guideline?</h3>
        <p style={styles.guidelinesText}>
          The same four-layer framework demonstrated here for CAC scoring can be applied to any
          evidence-based clinical guideline. Coming soon to the Prevention Index:
        </p>
        <div style={styles.guidelinesGrid}>
          {[
            { name: 'Ambulatory BP Monitoring', desc: 'Detecting masked and white-coat hypertension' },
            { name: 'Cardiovascular Genetic Testing', desc: 'Familial hypercholesterolemia screening' },
            { name: 'Cardiac Rehabilitation', desc: 'Post-event recovery programs' }
          ].map((guideline, index) => (
            <div key={index} style={styles.guidelineItem}>
              <span style={styles.guidelineBadge}>Coming Soon</span>
              <h4 style={styles.guidelineName}>{guideline.name}</h4>
              <p style={styles.guidelineDesc}>{guideline.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div style={styles.footer}>
        <p style={styles.footerText}>
          Interested in partnering on the Cardiovascular Prevention Index?
        </p>
        <a href="mailto:info@heart.org?subject=Partnership%20Inquiry%20-%20Cardiovascular%20Prevention%20Index" style={styles.footerLink}>
          Contact info@heart.org
        </a>
      </div>
    </div>
  )
}

export default PathwayLayer
