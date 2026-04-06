import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
  {
    name: 'Lean Six Sigma Yellow Belt',
    category: 'Process Excellence',
    icon: '🎯',
    color: '#6c5ce7',
  },
  {
    name: 'CAPM',
    fullName: 'Certified Associate Project Manager',
    category: 'Project Management',
    icon: '📊',
    color: '#00cec9',
  },
  {
    name: 'Agile Project Management',
    category: 'Agile',
    icon: '⚡',
    color: '#fd79a8',
  },
  {
    name: 'Google Data Analytics',
    category: 'Data & Analytics',
    icon: '📈',
    color: '#fdcb6e',
  },
  {
    name: 'Microsoft Co-Pilot Studio',
    fullName: 'Agent & Workflow Design',
    category: 'AI & Automation',
    icon: '🤖',
    color: '#6c5ce7',
  },
  {
    name: 'Power BI',
    category: 'Data Visualization',
    icon: '📉',
    color: '#00cec9',
  },
  {
    name: 'CSPO',
    fullName: 'Certified Scrum Product Owner',
    category: 'Scrum',
    icon: '🏆',
    color: '#fd79a8',
  },
  {
    name: 'AI in Product Management',
    category: 'AI & Product',
    icon: '🧠',
    color: '#fdcb6e',
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section" ref={ref}>
      <div className="orb orb-3" style={{ opacity: 0.06 }} />
      <div className="grid-bg" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Certifications</div>
          <h2 className="section-title">
            Validated <span className="glow-text">Expertise</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            Professional certifications that demonstrate commitment to continuous learning and industry best practices.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: 20,
        }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: `0 20px 40px ${cert.color}15`,
              }}
              className="glow-border"
              style={{
                padding: 28,
                borderRadius: 'var(--border-radius)',
                background: 'var(--bg-card)',
                border: '1px solid var(--glass-border)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
              }}
            >
              {/* Glow dot */}
              <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: cert.color,
                filter: 'blur(40px)',
                opacity: 0.1,
              }} />

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                position: 'relative',
              }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `${cert.color}10`,
                  border: `1px solid ${cert.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  flexShrink: 0,
                }}>
                  {cert.icon}
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: 4,
                    lineHeight: 1.3,
                  }}>
                    {cert.name}
                  </h3>
                  {cert.fullName && (
                    <p style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      marginBottom: 8,
                    }}>
                      {cert.fullName}
                    </p>
                  )}
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: 20,
                    background: `${cert.color}10`,
                    color: cert.color,
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.5px',
                  }}>
                    {cert.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: 80 }}
        >
          <div className="section-label">Education</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            Academic <span className="glow-text">Foundation</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 24,
            marginTop: 40,
          }}>
            {[
              {
                school: 'The Pennsylvania State University',
                degree: 'Master of Engineering Management',
                period: 'Anticipated Dec 2026',
                location: 'Malvern, PA',
                color: '#6c5ce7',
                courses: ['Project Management', 'Financial Management', 'Product Management', 'Systems Engineering', 'Creativity in Problem Solving'],
              },
              {
                school: 'RV College of Engineering',
                degree: 'B.E. in Mechanical Engineering',
                period: 'Feb 2020 - Sept 2024',
                location: 'Bengaluru, India',
                color: '#00cec9',
                courses: ['Operations Research', 'Product Development', 'Materials Science', 'Manufacturing Processes', 'Engineering Mechanics'],
              },
            ].map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + i * 0.15 }}
                whileHover={{ y: -6 }}
                style={{
                  padding: 36,
                  borderRadius: 'var(--border-radius-lg)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--glass-border)',
                  borderTop: `3px solid ${edu.color}`,
                  transition: 'all 0.4s ease',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 16,
                  flexWrap: 'wrap',
                  gap: 8,
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      marginBottom: 4,
                    }}>
                      {edu.school}
                    </h3>
                    <p style={{ color: edu.color, fontWeight: 500, fontSize: '0.95rem' }}>
                      {edu.degree}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{edu.period}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{edu.location}</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  marginTop: 16,
                }}>
                  {edu.courses.map((course) => (
                    <span key={course} style={{
                      padding: '6px 14px',
                      borderRadius: 20,
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                    }}>
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
