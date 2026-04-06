import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

const experiences = [
  {
    role: 'Product Research Assistant',
    company: 'The Pennsylvania State University',
    location: 'Malvern, PA',
    period: 'Sept 2025 - Present',
    color: '#6c5ce7',
    achievements: [
      'Built a 2-month product roadmap for a vendor-focused MVP by aligning user pain points and business goals, improving delivery predictability and stakeholder clarity.',
      'Implemented RICE prioritization framework to rank features, ensuring high-impact modules were delivered first and reducing vendor onboarding time by 40%.',
      'Built KPI dashboards in Power BI to track inventory accuracy and order fulfillment speed, enabling data-driven decisions that reduced stockout incidents by 25%.',
      'Conducted competitive analysis against ERP/POS solutions, identifying usability gaps and positioning MVP as a cost-effective alternative with 20% lower operating overhead.',
    ],
    metrics: [
      { value: '40%', label: 'Faster Onboarding' },
      { value: '25%', label: 'Less Stockouts' },
      { value: '20%', label: 'Lower Overhead' },
    ],
  },
  {
    role: 'Associate Product Manager',
    company: 'Indigo Nation Pvt Ltd',
    location: 'India',
    period: 'May 2023 - Aug 2025',
    color: '#00cec9',
    achievements: [
      'Streamlined the user checkout flow for BOPIS feature by collaborating with cross-functional teams to write detailed PRDs, reducing cart abandonment and increasing local store pickup conversion rate by 12%.',
      'Orchestrated the successful Go-to-Market (GTM) strategy for a new digital fit-recommendation engine based on extensive market research, decreasing size-related online returns by 9% within two months.',
      'Streamlined backlog prioritization, user story mapping, and sprint retrospectives for a cross-functional squad of 6 engineers and designers, improving team sprint velocity by 20%.',
      'Redesigned mobile app onboarding funnel using rigorous A/B testing and user behavior analytics, increasing user retention by 20% within three months of launch.',
    ],
    metrics: [
      { value: '12%', label: 'Conversion Boost' },
      { value: '20%', label: 'Velocity Increase' },
      { value: '20%', label: 'Retention Growth' },
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="orb orb-1" style={{ opacity: 0.06 }} />
      <div className="grid-bg" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Experience</div>
          <h2 className="section-title">
            Where I&apos;ve Made <span className="glow-text">Impact</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            Building products that drive measurable business outcomes.
          </p>
        </motion.div>

        {/* Experience tabs */}
        <div style={{
          display: 'flex',
          gap: 12,
          marginBottom: 40,
          flexWrap: 'wrap',
        }}>
          {experiences.map((exp, i) => (
            <motion.button
              key={exp.company}
              onClick={() => setActiveExp(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                padding: '14px 28px',
                borderRadius: 50,
                background: activeExp === i ? `${exp.color}20` : 'var(--bg-card)',
                border: `1px solid ${activeExp === i ? exp.color + '40' : 'var(--glass-border)'}`,
                color: activeExp === i ? '#fff' : 'var(--text-secondary)',
                fontWeight: activeExp === i ? 600 : 400,
                fontSize: '0.9rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-primary)',
                transition: 'all 0.3s ease',
              }}
            >
              {exp.company}
            </motion.button>
          ))}
        </div>

        {/* Active Experience Card */}
        <motion.div
          key={activeExp}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--glass-border)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{
            padding: '36px 40px',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            background: `linear-gradient(135deg, ${experiences[activeExp].color}08, transparent)`,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 16,
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  marginBottom: 8,
                }}>
                  {experiences[activeExp].role}
                </h3>
                <div style={{
                  fontSize: '1.1rem',
                  color: experiences[activeExp].color,
                  fontWeight: 500,
                  marginBottom: 12,
                }}>
                  {experiences[activeExp].company}
                </div>
                <div style={{
                  display: 'flex',
                  gap: 20,
                  flexWrap: 'wrap',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <FaMapMarkerAlt style={{ color: experiences[activeExp].color }} />
                    {experiences[activeExp].location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <FaCalendarAlt style={{ color: experiences[activeExp].color }} />
                    {experiences[activeExp].period}
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div style={{ display: 'flex', gap: 24 }}>
                {experiences[activeExp].metrics.map((m) => (
                  <div key={m.label} style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: experiences[activeExp].color,
                    }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div style={{ padding: '32px 40px' }}>
            {experiences[activeExp].achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  gap: 16,
                  marginBottom: 20,
                  padding: '16px 20px',
                  borderRadius: 'var(--border-radius-sm)',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <FaChevronRight style={{
                  color: experiences[activeExp].color,
                  marginTop: 5,
                  flexShrink: 0,
                  fontSize: '0.7rem',
                }} />
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}>
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
