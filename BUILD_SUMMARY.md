# AHA Cardiovascular Prevention Index - Build Summary

## Deployment URLs
- **GitHub Repository:** https://github.com/ds016683/aha-cardiovascular-index
- **GitHub Pages (Live):** https://ds016683.github.io/aha-cardiovascular-index/

---

## Layer-by-Layer Summary

### Landing Page
- **Hero Section:** Bold headline "Solving the 17-Year Problem" with explanation of the evidence-to-adoption gap
- **Four-Layer Framework Explainer:** Visual cards showing Evidence Base → Implementation State → Value Calculation → Implementation Pathway
- **Evidence-Based Guideline Grid:** 6 tiles including:
  - **CAC Scoring** (LIVE) - fully functional with all 4 layers
  - **Ambulatory BP Monitoring** (Coming Soon)
  - **Cardiovascular Genetic Testing** (Coming Soon)
  - **Cardiac Rehabilitation** (Coming Soon)
  - 2× "2026 Guideline Preview" tiles to reinforce ecosystem vision
- **Vision Section:** Red CTA block emphasizing "From 17 Years to 5 Years"
- **Partners Section:** AHA + Third Horizon Strategies

### Layer 1: Evidence Base
- **Clinical Summary:** Two-paragraph evidence synthesis on CAC scoring, including guideline context (2019 ACC/AHA Primary Prevention Guidelines, Class IIa recommendation)
- **Confidence Rating:** High - with explanation of supporting evidence quality
- **Key Research Findings:** 4 stat cards:
  - ~25% risk reclassification rate
  - ~30% MACE reduction with CAC-guided therapy
  - ~40% reduction in unnecessary statins
  - $75-$400 out-of-pocket cost range
- **Selected Citations:** 4 realistic (synthetic) journal citations
- **AI Q&A Box:** Labeled "Powered by Claude Haiku - Live AI responses available in full deployment"
  - 6 pre-written Q&A pairs matched by keyword search
  - Topics: eligibility, radiation safety, score interpretation, insurance coverage, guideline recommendations, repeat testing
  - Quick-topic buttons for easy navigation

### Layer 2: Implementation State
- **US Choropleth Map:** Built with react-simple-maps
  - Color scale: light pink → deep red for adoption rates
  - Toggle between "Adoption Rate" and "Disease Prevalence" overlays
  - Interactive hover tooltips showing state name, adoption score, prevalence rate, eligible population, coverage mandate status
- **National Overview Panel:**
  - National avg CAC adoption: 14%
  - States above 20% adoption: 8
  - States with coverage mandates: 2 (CA, MA)
  - Total eligible population: ~81M
- **Rankings:**
  - Highest adoption: TX (32%), MN (28%), MA (26%), CA (24%), CO (22%)
  - Lowest adoption: MS (4%), AL (5%), WV (5%), AR (6%), LA (7%)
- **Key Insights:** 4 bullet points highlighting patterns (coverage mandates, opportunity gaps, system-driven adoption)

### Layer 3: Economic & Social Value (ESVA Calculator)
- **Input Controls:**
  - Geographic scope: National or any of 50 states (dropdown)
  - Current adoption rate: 0-40% slider
  - Target adoption rate: 0-60% slider
  - Population size: editable number field
  - Disease prevalence: editable percentage
  - Payer mix: Commercial/Medicare/Medicaid sliders (constrained to sum to 100%)
- **Real-Time Outputs:**
  - Lives Impacted
  - MACE Events Prevented
  - Total Cost Savings
  - Implementation Cost
  - Net Savings
  - ROI Ratio
  - QALYs Gained
- **Value Flow Chart:** Recharts horizontal bar chart showing Current Burden → Implementation Cost → Events Prevented → Net Savings
- **Download Assumptions:** Button shows detailed methodology in alert
- **Methodology Notes:** Transparent assumptions for all calculations

### Layer 4: Implementation Pathway
- **4 Implementation Cards:**
  1. **Clinical Infrastructure** (6-18 months)
     - Key actors: Health systems, cardiologists, radiologists, device manufacturers
     - TH role: Market intelligence on imaging capacity gaps
  2. **Coverage & Reimbursement** (12-24 months)
     - Key actors: Health plans, CMS, state legislatures, employer coalitions
     - TH role: Payer analytics for coverage expansion business cases
  3. **Provider Education** (6-12 months)
     - Key actors: Medical societies (AHA, ACC), CME providers, EHR vendors
     - TH role: Referral pattern analysis for targeted education
  4. **Patient Awareness** (Ongoing)
     - Key actors: AHA, health plans, digital health platforms, employers
     - TH role: Population targeting using claims and socioeconomic data
- **Ecosystem Opportunity Callout:** Full-width dark section with:
  - "From 17 Years to 5 Years" headline
  - Explanation of platform scalability
  - Visual: 17 years → 5-7 years with Prevention Index
  - "Request a Custom Analysis" CTA (mailto: david.smith@thirdhorizon.com)
- **Coming Soon Preview:** ABPM, Cardiovascular Genetic Testing, Cardiac Rehabilitation
- **Contact CTA:** Partnership inquiry link

---

## What's Synthetic vs. Real Data

### Synthetic (for demonstration)
- All state-level adoption scores (0-100 scale)
- Disease prevalence rates by state
- Eligible population figures
- Coverage mandate status (only CA and MA marked as having mandates)
- Reimbursement averages
- ESVA calculator assumptions and outputs
- AI Q&A responses (pre-written, keyword-matched)
- Research finding statistics (plausible but not from actual studies)
- Citation sources (realistic journal names but not real papers)

### Would Be Real in Production
- Health plan claims data for actual CAC utilization rates
- CMS/state Medicaid data for coverage patterns
- Disease prevalence from CDC BRFSS or similar
- Actual peer-reviewed literature for evidence base
- Live AI model (Claude Haiku) for Q&A
- Real economic modeling with validated assumptions
- Actual provider and imaging center data

---

## Tech Stack
- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM 7
- **Map:** react-simple-maps with TopoJSON (us-atlas)
- **Charts:** Recharts
- **Database Client:** @supabase/supabase-js (falls back to local data)
- **Deployment:** GitHub Pages (gh-pages branch)

---

## Known Limitations

1. **Supabase not configured:** The app includes Supabase client code but falls back to hardcoded data since table creation requires server-side migration. In production, data would be fetched from Supabase.

2. **AI Q&A is pre-written:** The Q&A box matches keywords to pre-written responses rather than using live AI. Production would integrate Claude Haiku API.

3. **Map rendering on mobile:** The US map is optimized for desktop/tablet. Mobile view works but is more compact.

4. **No authentication:** Prototype is open-access. Production might include authenticated views for sensitive analytics.

5. **Bundle size:** Single-chunk build is ~756KB gzipped. Production should implement code splitting.

6. **No caching:** Each page load fetches fresh. Production would implement service worker and caching.

7. **Accessibility:** Basic accessibility in place but would need full a11y audit for production.

---

## Suggested Next Steps

### Immediate (for demo)
1. Test all interactive features
2. Verify mobile responsiveness
3. Add Google Analytics or similar for demo tracking

### Short-term (Phase 1 Development)
1. Configure Supabase table and real data pipeline
2. Integrate Claude Haiku API for live Q&A
3. Add actual citations from peer-reviewed literature
4. Implement user feedback collection

### Medium-term (Phase 2 Development)
1. Add ABPM, Genetic Testing, Cardiac Rehab modules
2. Build admin dashboard for data updates
3. Implement state-specific drill-down pages
4. Add PDF export for ESVA calculator results

### Long-term (Full Platform)
1. Health plan data integration via APIs
2. Provider-facing tools (EHR integration)
3. Patient education portal
4. Payer-specific ROI calculators
5. Automated guideline update monitoring

---

## Contact
**David Smith**  
Third Horizon Strategies  
david.smith@thirdhorizon.com

---

*This prototype was built to demonstrate the vision of the Cardiovascular Prevention Index platform. All data is synthetic and for illustration purposes only. Not intended for clinical decision-making.*
